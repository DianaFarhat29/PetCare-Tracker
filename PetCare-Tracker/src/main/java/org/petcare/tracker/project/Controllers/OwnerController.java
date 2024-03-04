package org.petcare.tracker.project.Controllers;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import org.petcare.tracker.project.Models.*;
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
import java.time.format.DateTimeFormatter;
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
    @RequestMapping(value = "/addAnimal", produces = "application/json",
            method=RequestMethod.POST)
    @Transactional
    public ResponseEntity<Animal> addAnimal(@RequestBody AnimalData animalData, RedirectAttributes redirectAttributes) {
        log.info("Inside addAnimal method in the owner controller.");

        log.info("Received animal data: " + animalData.getOwner() + " " + animalData.getName() + " " + animalData.getRace() + " " + animalData.getBirthday() + " " + animalData.getWeight() + " " + animalData.getHeight() + " " + animalData.getHealthCondition() + " " + animalData.getLastVisit() + " " + animalData.getNotes() + " " + animalData.getPicture());

        DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;;

        try {

            // Fetch Owner by ID
            Optional<Owner> ownerOptional = ownerService.getOwnerById(animalData.getOwner());

            if (ownerOptional.isEmpty()) {
                throw new IllegalArgumentException("Owner not found with ID: " + animalData.getOwner());
            }

            Owner owner = ownerOptional.get();

            Set<Owner> ownerSet = new HashSet<Owner> ();

            ownerSet.add(owner);

        // Validate that a owner was found
        if (ownerSet.isEmpty()) {
            throw new IllegalArgumentException("No valid owner IDs provided");
        }

        Animal newAnimal = new Animal(null, ownerSet, animalData.getName(), animalData.getRace(), animalData.getGender(), animalData.getBirthday() != null ? LocalDate.parse(animalData.getBirthday(), formatter) : null , Double.parseDouble(animalData.getWeight()), Double.parseDouble(animalData.getHeight()), animalData.getHealthCondition(),  animalData.getLastVisit() != null ? LocalDate.parse(animalData.getLastVisit(), formatter) : null,
                animalData.getNotes(), animalData.getPicture());


        // Maintenir la symétrie (si relation bidirectionnelle)
        for (Owner ownerBidirectionnelle : ownerSet) {
            owner.addAnimal(newAnimal);
        }

        // Save the animal
        animalService.saveAnimal(newAnimal);
            // Add success message
            redirectAttributes.addFlashAttribute("successMessage", "Animal ajouté avec succès.");

            return ResponseEntity.created(URI.create("/addAnimal/" + newAnimal.getId())).body(newAnimal);

        } catch (Exception e) {

            // Manage errors
            redirectAttributes.addFlashAttribute("errorMessage", "Erreur lors de l'ajout de l'animal: " + e.getMessage());

            log.info("errorMessage " + "Erreur lors de l'ajout de l'animal: " + e.getMessage());

            return ResponseEntity.badRequest().build();

        }
    }

    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    @RequestMapping(value = "/updateAnimalProfile", produces = "application/json",
            method=RequestMethod.PUT)
    @Transactional
    public ResponseEntity<Animal> updateAnimalProfile(@ModelAttribute("animal") Animal animal,
                                       @RequestParam Map<String, String> allParams,
                                       // Authentication authentication
                                        RedirectAttributes redirectAttributes) {

        log.info("Inside updateAnimalProfile controller methode." );
        log.info("Received animal data: " + animal.getId() + " " + animal.getName() + " " + animal.getRace() + " " + animal.getBirthday() + " " + animal.getWeight() + " " + animal.getHeight() + " " + animal.getHealthCondition() + " " + animal.getLastVisit() + " " + animal.getNotes() + " " + animal.getPicture());

        // Vérification de l'existence de l'animal
        Optional<Animal> existingAnimalOpt = animalService.getAnimalById(animal.getId());
        if (!existingAnimalOpt.isPresent()) {
            redirectAttributes.addFlashAttribute("error", "Animal with id " + animal.getId() + " not found.");
            return ResponseEntity.badRequest().build();
        }

        Animal existingAnimal = existingAnimalOpt.get();

        // Mise à jour des informations de base du patient
        animalService.updateAnimal(animal);

        // Sauvegarder les modifications
        animalService.updateAnimal(existingAnimal);

        redirectAttributes.addFlashAttribute("success", "Profil de l'animal mis à jour avec succès.");
        return ResponseEntity.created(URI.create("/updateAnimalProfile/" + animal.getId())).body(animal);
    }

    // Cancel an appointment
    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    //@GetMapping("/cancelAppointment/{id}")
    @RequestMapping(value = "/deleteAnimal/{id}",
            produces = "application/json",
            method=RequestMethod.DELETE)
    @Transactional
    public ResponseEntity<Animal> deleteAnimal(@PathVariable Long id) {

        log.info("Inside deleteAnimal controller methode." );
        log.info("Received animal id: " + id);

        try {
            animalService.deleteAnimal(id);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
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
