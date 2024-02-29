package org.petcare.tracker.project.Controllers;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Models.Appointment;
import org.petcare.tracker.project.Models.AppointmentData;
import org.petcare.tracker.project.Models.Owner;
import org.petcare.tracker.project.PetCareTrackerProjectApplication;
import org.petcare.tracker.project.Repositories.AnimalRepository;
import org.petcare.tracker.project.Repositories.AppointmentRepository;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.petcare.tracker.project.Services.AnimalService;
import org.petcare.tracker.project.Services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.json.JSONObject;

import java.net.URI;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@SessionAttributes("userId")
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
@RestController
@RequestMapping("/api/owners")
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @Autowired
    private AnimalService animalService;

    @Autowired
    private OwnerRepository ownerRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;


    static Logger log = Logger.getLogger(PetCareTrackerProjectApplication.class.getName());

    @Autowired
    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    // Get all owners
    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    @Transactional
    @RequestMapping(value = "/findAll", produces = "application/json")
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }


    //Create a new owner
    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    @Transactional
    @PostMapping(value = "/create", produces = "application/json")
    public Owner createOwner(@RequestBody Owner owner){
        log.info("Received owner data: " + owner);
        return ownerRepository.save(owner);
    }


    @PutMapping
    public ResponseEntity<Owner> updateOwner(@RequestBody Owner owner) {
        return ResponseEntity.ok(ownerService.updateOwner(owner));
    }


    // Get a user by id
    @GetMapping("/{id}")
    public ResponseEntity<Owner> getOwnerById(@PathVariable Long id) {
        return ownerService.getOwnerById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update a user
    @PutMapping("/{id}")
    public ResponseEntity<Owner> updateOwner(@PathVariable(value = "id") Long ownerId,
                                             @RequestBody Owner ownerDetails) {
        Owner owner = ownerRepository.findById(ownerId)
                .orElseThrow(() -> new RuntimeException("Owner not found for this id :: " + ownerId));

        owner.setFirstName(ownerDetails.getFirstName());
        owner.setLastName(ownerDetails.getLastName());
        owner.setEmail(ownerDetails.getEmail());
        owner.setNoTel(ownerDetails.getNoTel());
        owner.setPassword(ownerDetails.getPassword());
        owner.setRole(ownerDetails.getRole());
        // plus update for owners if needed

        final Owner updatedOwner = ownerRepository.save(owner);
        return ResponseEntity.ok(updatedOwner);
    }

    // Delete a user
    @DeleteMapping("/owners/{id}")
    public ResponseEntity<?> deleteOwner(@PathVariable Long id) {
        try {
            ownerService.deleteOwner(id);
            return ResponseEntity.ok().build(); // Retourne un statut 200 OK pour indiquer la réussite de la suppression
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build(); // Retourne un statut 404 NOT FOUND si l'entité n'existe pas
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Une erreur s'est produite lors de la suppression de l'utilisateur."); // Gestion des autres exceptions
        }
    }

    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    @RequestMapping(value = "/cancelAppointment/{id}", produces = "application/json",
            method=RequestMethod.POST)
    @Transactional
    public ResponseEntity<Animal> addAnimal(@RequestBody Animal animal, @RequestParam String email) {
        log.info("Received POST request for adding an animal to the owner.");

        Owner ownerRecherche = ownerService.getOwnerByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("Owner not found"));

        List<Long> ownerId = Collections.singletonList(ownerRecherche.getId());

        // Create the new animal object
        // 1. Validate Owner Existence
        Set<Owner> selectedOwner = ownerId.stream()
                .map(ownerService::getOwnerById)
                .flatMap(Optional::stream)
                .collect(Collectors.toSet());

        animal.setOwners(selectedOwner);

        // Maintenir la symétrie (relation bidirectionnelle)
        for (Owner owner : selectedOwner) {
            owner.addAnimal(animal);
        }

        // Save the animal
        animalService.saveAnimal(animal);

        log.info("Animal created successfully with ID: " + animal.getId());
        return ResponseEntity.created(URI.create("/addAnimal/" + animal.getId())).body(animal);
    }

    // Method to book an appointment
    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    @PostMapping("/bookAppointment")
    @Transactional
    public ResponseEntity<Appointment> bookAppointment( @RequestBody AppointmentData appointmentData,


            // Remettre Authentication quand la connexion est faite
            // Authentication authentication,

            RedirectAttributes redirectAttributes) {

        log.info("Inside bookAppointment controller methode." );
        log.info("Received appointment data: " + appointmentData.getAnimalId() + " " + appointmentData.getAppointmentDateTime() + " " + appointmentData.getAppointmentNotes() + " " + appointmentData.getAppointmentType() + " " + appointmentData.getAppointmentLocation() + " " + appointmentData.getEmailOwner());

        try {

            // Remettre quand la connexion est faite
            // Get the owner
            // String email = authentication.getName();

            Owner owner = ownerService.getOwnerByEmail(appointmentData.getEmailOwner())
                    .orElseThrow(() -> new EntityNotFoundException("Owner not found"));

            log.info("owner" + owner);

            // Get the animal
            Animal animal = animalService.getAnimalById(appointmentData.getAnimalId())
                    .orElseThrow(() -> new EntityNotFoundException("Animal not found"));

            log.info("animal" + animal);

            // Create the new AppointmentModel
            Appointment appointment = new Appointment();
            appointment.setDateTime(LocalDateTime.parse(appointmentData.getAppointmentDateTime()));
            appointment.setNotes(appointmentData.getAppointmentNotes());
            appointment.setType(appointmentData.getAppointmentType());
            appointment.setLocation(appointmentData.getAppointmentLocation());
            appointment.setAnimal(animal);
            appointment.setOwner(owner);


            // Save appointment
            ownerService.bookAppointment(appointment);

            // Add success message
            redirectAttributes.addFlashAttribute("successMessage", "Rendez-vous enregistré avec succès.");

            return ResponseEntity.created(URI.create("/bookAppointment/" + appointment.getId())).body(appointment);

        } catch (Exception e) {

            // Manage errors
            redirectAttributes.addFlashAttribute("errorMessage", "Erreur lors de l'enregistrement du rendez-vous : " + e.getMessage());

            return ResponseEntity.badRequest().build();

        }
    }

    @GetMapping("/{ownerId}/appointments")
    public List<Appointment> getAppointmentsByOwner(@PathVariable Long ownerId) {
        Owner owner = ownerService.getOwnerById(ownerId)
                .orElseThrow(() -> new EntityNotFoundException("Owner not found for this id :: " + ownerId));
        return appointmentRepository.findByOwner(owner);
    }

    // Cancel an appointment
    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    //@GetMapping("/cancelAppointment/{id}")
    @RequestMapping(value = "/cancelAppointment/{id}",
            produces = "application/json",
            method=RequestMethod.DELETE)
    @Transactional
    public ResponseEntity<Appointment> cancelAppointment(@PathVariable Long id) {

        log.info("Inside cancelAppointment controller methode." );
        log.info("Received appointment id: " + id);

        try {
            ownerService.cancelAppointment(id);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
