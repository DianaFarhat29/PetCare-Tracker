package org.petcare.tracker.project.Implementations;


import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Models.Owner;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.petcare.tracker.project.Services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OwnerImplementation implements OwnerService {

    private final OwnerRepository ownerRepository;
    // Inject repositories for Owner and Animal
    @Autowired
    private OwnerImplementation(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    // Implementation for saving owner information
    @Override
    public Owner saveOwner(Owner owner) {
        return ownerRepository.save(owner);
    }

    // Implementation for finding user by id
    @Override
    public Optional<Owner> getOwnerById(Long id) {
        return ownerRepository.findById(id);
    }

    // Implementation for update owner information
    @Override
    public Owner updateOwner(Owner owner) {
        return ownerRepository.save(owner);
    }

    // Implementation for delete owner information
    @Override
    public void deleteOwner(Long id) {
        ownerRepository.deleteById(id);
    }


    @Override
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }


}
