package org.petcare.tracker.project.Controllers;

import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Models.Owner;
import org.petcare.tracker.project.PetCareTrackerProjectApplication;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.petcare.tracker.project.Services.AnimalService;
import org.petcare.tracker.project.Repositories.AnimalRepository;
import org.petcare.tracker.project.Services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.net.URI;
import java.util.*;
import java.util.logging.Logger;
import java.util.stream.Collectors;


@SessionAttributes("userId")
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class AnimalController {

    private static final String SESSION_USER_ID = "userId";
    static Logger log = Logger.getLogger(PetCareTrackerProjectApplication.class.getName());

    // Injection of services

    @Autowired
    private AnimalService animalService;

    @Autowired
    private OwnerService ownerService;

    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private OwnerRepository ownerRepository;


    @GetMapping("/user/{userId}")
    @ResponseBody
    public List<Animal> getAnimalsByUserId(@PathVariable Long userId, HttpSession session) {
        log.info("getAnimalsByUserId called with userId: " + userId);
        if (session.getAttribute(SESSION_USER_ID) == null) {
            session.setAttribute(SESSION_USER_ID, 1L);
        }

        Optional<Owner> owner = ownerRepository.findById(userId);
        if (owner.isPresent()) {
            return animalRepository.findByOwners_Id(owner.get().getId());
        } else {
            // Handle case if no owner is found
            return Collections.emptyList();
        }

    }

    @GetMapping("/animals")
    public List<Animal> getAnimals() {
        return (List<Animal>) animalRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    @PostMapping("/animals")
    @Transactional
    public ResponseEntity<Animal> addAnimal(@RequestBody Animal animal, @RequestParam List<Long> ownerId) {
        log.info("Received POST request for creating an animal.");

        // 1. Validate Owner Existence
        Set<Owner> selectedOwner = ownerId.stream()
                .map(ownerService::getOwnerById)
                .flatMap(Optional::stream)
                .collect(Collectors.toSet());

        // Validate that we actually found some owners
        if (selectedOwner.isEmpty()) {
            throw new IllegalArgumentException("No valid owner IDs provided");
        }

        animal.setOwners(selectedOwner);

        // Maintenir la symétrie (si relation bidirectionnelle)
        for (Owner owner : selectedOwner) {
            owner.addAnimal(animal);
        }

        // Save the animal
        animalService.saveAnimal(animal);

        log.info("Animal created successfully with ID: " + animal.getId());
        return ResponseEntity.created(URI.create("/animals/" + animal.getId())).body(animal);
    }

    @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
    @RequestMapping(value = "/update/{id}",
            produces = "application/json",
            method=RequestMethod.PUT)
    @Transactional
    public ResponseEntity<Animal> updateAnimal(@RequestBody Animal animal,
                                 RedirectAttributes redirectAttributes) {

        log.info("INSIDE updateAnimal method");
        log.info("Received animal data: " + animal.toString() );


        // Verification of the existence of the Animal
        Optional<Animal> existingAnimalOpt = animalService.getAnimalById(animal.getId());
        if (!existingAnimalOpt.isPresent()) {
            redirectAttributes.addFlashAttribute("error", "Animal avec le id" + animal.getId() + " non trouvé.");
            log.info("ERROR: " + "Animal avec le id" + animal.getId() + " non trouvé.");
            return ResponseEntity.badRequest().build();
        }

        Animal existingAnimal = existingAnimalOpt.get();

        // Update Animal info
        animalService.updateAnimal(animal);
        log.info("Successfully updated animal data: " + animal.toString() );

        return ResponseEntity.created(URI.create("/animals/" + animal.getId())).body(animal);
    }

}
