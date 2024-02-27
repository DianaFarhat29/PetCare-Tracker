package org.petcare.tracker.project.Implementations;

import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Repositories.AnimalRepository;
import org.petcare.tracker.project.Services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalImplementation implements AnimalService {

    // Injection of repositories
    @Autowired
    private AnimalRepository animalRepository;

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
}
