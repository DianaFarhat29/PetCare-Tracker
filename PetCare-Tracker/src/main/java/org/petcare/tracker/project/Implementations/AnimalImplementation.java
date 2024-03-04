package org.petcare.tracker.project.Implementations;

import jakarta.persistence.EntityNotFoundException;
import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Models.Owner;
import org.petcare.tracker.project.Repositories.AnimalRepository;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.petcare.tracker.project.Services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimalImplementation implements AnimalService {

    // Injection of repositories
    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private OwnerRepository ownerRepository;

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
    public Animal updateAnimal(Animal updatedAnimal) {
        Animal existingAnimal = animalRepository.findById(updatedAnimal.getId())
                .orElseThrow(() -> new EntityNotFoundException("Animal not found with ID: " + updatedAnimal.getId()));

        // Update fields of the existing animal
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

        // Save the updated doctor back to the database
        return animalRepository.save(updatedAnimal);
    }

    @Override
    public void deleteAnimal(Long animalId) {
        animalRepository.deleteById(animalId);
    }

}
