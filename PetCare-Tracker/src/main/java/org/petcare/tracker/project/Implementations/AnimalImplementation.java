package org.petcare.tracker.project.Implementations;

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

    // Implementation for saving doctor information
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


}
