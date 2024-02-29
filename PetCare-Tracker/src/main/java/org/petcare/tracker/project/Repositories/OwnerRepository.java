package org.petcare.tracker.project.Repositories;

import org.petcare.tracker.project.Models.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OwnerRepository extends CrudRepository<Owner, Long>, JpaRepository<Owner, Long> {

    // Standard methods of the JpaRepository already included (save, findById, deleteById, etc.)

    // Method to find patient by Health Insurance Number
    Optional<Owner> findByEmail(String email);

}
