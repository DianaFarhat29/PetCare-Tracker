package org.petcare.tracker.project.Repositories;

import org.petcare.tracker.project.Models.Appointment;
import org.petcare.tracker.project.Models.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    // Standard methods of the JpaRepository already included (save, findById, deleteById, etc.)

    // Method to find appointements by owner id
    @Query("SELECT a FROM Appointment a WHERE a.owner.id = :ownerId AND a.dateTime > :currentDateTime")
    List<Appointment> findUpcomingAppointmentsByOwnerId(Long ownerId, LocalDateTime currentDateTime);

    // Method to find appointements by animal id
    @Query("SELECT a FROM Appointment a WHERE a.animal.id = :animalId AND a.dateTime > :currentDateTime")
    List<Appointment> findUpcomingAppointmentsByAnimalId(Long animalId, LocalDateTime currentDateTime);

    // Find all appointments for a given animal on a given date
    @Query("SELECT a FROM Appointment a WHERE a.animal.id = :animalId AND DATE(a.dateTime) = :date")
    List<Appointment> findByAnimalIdAndDate(@Param("animalId") Long animalId, @Param("date") LocalDate date);

    // Delete all appointments for a given animal id
    @Modifying
    @Query("DELETE FROM Appointment a WHERE a.animal.id = :animalId")
    void deleteByAnimalId(Long animalId);

    @Modifying
    @Query("DELETE FROM Appointment a WHERE a.owner.id = :ownerId")
    void deleteByOwnerId(Long ownerId);

    // Find all appointments for a given owner id
    List<Appointment> findByOwnerId(Long ownerId);

    // Find all appointments for a given animal id
    List<Appointment> findByAnimalId(Long animalId);

    // Find all appointments for a given owner object
    List<Appointment> findByOwner(Owner owner);


}
