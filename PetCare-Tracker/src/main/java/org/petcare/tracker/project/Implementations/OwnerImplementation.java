package org.petcare.tracker.project.Implementations;


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
    private OwnerImplementation(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

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

    // Implementation for saving owner information
    @Override
    public Owner saveOwner(Owner owner) {
        return ownerRepository.save(owner);
    }

    @Override
    public void cancelAppointment(Long appointmentId) {
        appointmentRepository.deleteById(appointmentId);
    }

}
