package org.petcare.tracker.project.Repositories;

import org.petcare.tracker.project.Models.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends CrudRepository<Animal, Long>, JpaRepository<Animal, Long> {

    // Standard methods of the JpaRepository already included (save, findById, deleteById, etc.)

    // Method to find animal with owner id
    List<Animal> findByOwners_Id(Long ownerId);

}
