package org.petcare.tracker.project.Implementations;


import org.petcare.tracker.project.Models.Owner;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.petcare.tracker.project.Services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OwnerImplementation implements OwnerService {

    // Inject repositories for Owner and Animal
    @Autowired
    private OwnerRepository ownerRepository;

    // Implementation for finding clinic by id
    @Override
    public Optional<Owner> getOwnerById(Long id) {
        return ownerRepository.findById(id);
    }



}
