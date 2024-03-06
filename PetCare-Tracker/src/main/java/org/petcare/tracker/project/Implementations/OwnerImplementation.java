package org.petcare.tracker.project.Implementations;


import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Models.Appointment;
import org.petcare.tracker.project.Models.Owner;
import org.petcare.tracker.project.Repositories.AppointmentRepository;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.petcare.tracker.project.Services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OwnerImplementation implements OwnerService {

    // Inject repositories for Owner and Animal
    @Autowired
    private OwnerRepository ownerRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private AppointmentRepository animalRepository;


    // Implementation for finding clinic by id
    @Override
    public Optional<Owner> getOwnerById(Long id) {
        return ownerRepository.findById(id);
    }

    // Implementation for finding owner by email
    @Override
    public Optional<Owner> getOwnerByEmail(String email) {
        return ownerRepository.findByEmail(email);
    }

    // Implementation of method to book an appointment
    @Override
    public void bookAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);
    }

    @Override
    @Transactional
    public Owner updateOwner(Owner updatedOwner) {
        Owner existingOwner = ownerRepository.findById(updatedOwner.getId())
                .orElseThrow(() -> new EntityNotFoundException("Owner not found with ID: " + updatedOwner.getId()));

        // Update fields of the existing Owner
        existingOwner.setAnimals(existingOwner.getAnimals());
        existingOwner.setFirstName(updatedOwner.getFirstName());
        existingOwner.setLastName(updatedOwner.getLastName());
        existingOwner.setEmail(updatedOwner.getEmail());
        existingOwner.setNoTel(updatedOwner.getNoTel());
        existingOwner.setPassword(updatedOwner.getPassword());
        existingOwner.setRole(existingOwner.getRole());

        // Save the updated animal back to the database
        return ownerRepository.save(existingOwner);
    }

    @Override
    @Transactional
    public void deleteOwner(Long ownerId) {
        Optional<Owner> ownerOptional = ownerRepository.findById(ownerId);
        if (ownerOptional.isPresent()) {
            Owner owner = ownerOptional.get();

            // Delete associated appointements
            appointmentRepository.deleteByOwnerId(ownerId);

            // Dissociate from animals


            ownerRepository.deleteById(ownerId);
        } else {
            throw new EntityNotFoundException("Animal not found with id: " + ownerId);
        }
    }

    @Override
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

    // Implementation for saving owner information
    @Override
    public Owner saveOwner(Owner owner) {
        return ownerRepository.save(owner);
    }

    @Override
    public void cancelAppointment(Long appointmentId) {
        appointmentRepository.deleteById(appointmentId);
    }

    @Override
    public void deleteAnimal(Long animalId) {
        animalRepository.deleteById(animalId);
    }

}
