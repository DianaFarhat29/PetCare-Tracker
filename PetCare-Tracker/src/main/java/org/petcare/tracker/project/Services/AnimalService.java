package org.petcare.tracker.project.Services;

import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Models.Owner;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface AnimalService {

    // Method to get animal with owner id
    List<Animal> getAnimalWithOwnerId(Long ownerId);

    // Method to Save or update animal's information
    Animal saveAnimal(Animal animal);

    // Method to find animal by id
    Optional<Animal> getAnimalById(Long id);

    // Method to find animal by name
    Optional<Animal> getAnimalByName(String animalName);

    // Method to update animal's information
    Animal updateAnimal(Animal animal);

    // Method to delete an animal
    void deleteAnimal(Long id);
}
