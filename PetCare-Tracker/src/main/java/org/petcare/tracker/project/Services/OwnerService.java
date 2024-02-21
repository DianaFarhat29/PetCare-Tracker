package org.petcare.tracker.project.Services;

import org.petcare.tracker.project.Models.Owner;

import java.util.Optional;

public interface OwnerService {
    // Method to find clinic by id
    Optional<Owner> getOwnerById(Long id);

}
