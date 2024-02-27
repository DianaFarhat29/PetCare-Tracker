package org.petcare.tracker.project.Controllers;

import jakarta.persistence.EntityNotFoundException;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.petcare.tracker.project.Services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.petcare.tracker.project.Models.Owner;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@SessionAttributes("userId")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("/api/owners")


public class OwnerController {

    @Autowired
    private OwnerRepository ownerRepository;
    private final OwnerService ownerService;

    @Autowired
    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }


    // Get all owners
    @GetMapping()
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }


    //Create a new owner
    @PostMapping(value = "/create", consumes = {"application/xml","application/json"})
    public Owner createOwner(@RequestBody Owner owner){
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


}
