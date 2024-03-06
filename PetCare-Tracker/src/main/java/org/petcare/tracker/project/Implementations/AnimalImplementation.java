package org.petcare.tracker.project.Implementations;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Models.Owner;
import org.petcare.tracker.project.Repositories.AnimalRepository;
import org.petcare.tracker.project.Repositories.AppointmentRepository;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.petcare.tracker.project.Services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AnimalImplementation implements AnimalService {

    // Injection of repositories
    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private OwnerRepository ownerRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;



    // Implementation for getting animal with owner id
    @Override
    public List<Animal> getAnimalWithOwnerId(Long ownerId) {
        return animalRepository.findByOwners_Id(ownerId);
    }

    // Implementation for saving animal information
    @Override
    public Animal saveAnimal(Animal animal) {
        return animalRepository.save(animal);
    }

    // Implementation for getting animal by id
    @Override
    public Optional<Animal> getAnimalById(Long id) {
        return animalRepository.findById(id);
    }

    @Override
    public Optional<Animal> getAnimalByName(String name) {
        return animalRepository.findByName(name);
    }

    @Override
    @Transactional
    public Animal updateAnimal(Animal updatedAnimal) {
        Animal existingAnimal = animalRepository.findById(updatedAnimal.getId())
                .orElseThrow(() -> new EntityNotFoundException("Animal not found with ID: " + updatedAnimal.getId()));

        // Update fields of the existing animal
        existingAnimal.setOwners(existingAnimal.getOwners());
        existingAnimal.setName(updatedAnimal.getName());
        existingAnimal.setRace(updatedAnimal.getRace());
        existingAnimal.setGender(updatedAnimal.getGender());
        existingAnimal.setBirthday(updatedAnimal.getBirthday());
        existingAnimal.setWeight(updatedAnimal.getWeight());
        existingAnimal.setHeight(updatedAnimal.getHeight());
        existingAnimal.setHealthCondition(updatedAnimal.getHealthCondition());
        existingAnimal.setLastVisit(updatedAnimal.getLastVisit());
        existingAnimal.setNotes(updatedAnimal.getNotes());
        existingAnimal.setPicture(updatedAnimal.getPicture());

        // Save the updated animal back to the database
        return animalRepository.save(existingAnimal);
    }

    @Override
    @Transactional
    public void deleteAnimal(Long animalId) {
        Optional<Animal> animalOptional = animalRepository.findById(animalId);
        if (animalOptional.isPresent()) {
            Animal animal = animalOptional.get();

            // Delete associated appointments
            appointmentRepository.deleteByAnimalId(animalId);

            // Dissociate from owners
            for (Owner owner : animal.getOwners()) {
                owner.getAnimals().remove(animal);
                ownerRepository.save(owner);
            }

            animalRepository.deleteById(animalId);
        } else {
            throw new EntityNotFoundException("Animal not found with id: " + animalId);
        }
    }

}
