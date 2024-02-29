package org.petcare.tracker.project.Services;

import org.petcare.tracker.project.Models.Appointment;
import org.petcare.tracker.project.Models.Owner;

import java.util.List;
import java.util.Optional;

public interface OwnerService {

    // Method to find owner by id
    Optional<Owner> getOwnerById(Long id);

    // Method to find owner by email
    Optional<Owner> getOwnerByEmail(String email);

    // Method to book a new appointment
    void bookAppointment(Appointment appointment);

    //Method to save an owner's information
    Owner saveOwner(Owner owner);

    //Method to update an owner's information
    Owner updateOwner(Owner owner);

    //Method to delete an owner's information
    void deleteOwner(Long id);

    List<Owner> getAllOwners();

    // Method to cancel an appointment
    void cancelAppointment(Long appointmentId);

}
