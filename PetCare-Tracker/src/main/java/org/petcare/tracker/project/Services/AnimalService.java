package org.petcare.tracker.project.Services;

import org.petcare.tracker.project.Models.Animal;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface AnimalService {

    // Method to get animal with owner id
    List<Animal> getAnimalWithOwnerId(Long ownerId);

    // Method to Save or update a doctor's information
    Animal saveAnimal(Animal animal);
}
