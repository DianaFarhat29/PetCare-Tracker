package org.petcare.tracker.project.Models;

import org.springframework.format.annotation.DateTimeFormat;

public class AppointmentData {

    // Attributes
    private Long animalId;
    private String appointmentDateTime;
    private String appointmentNotes;
    private String appointmentType;
    private String appointmentLocation;
    private Long ownerId;

    // Constructors
    public AppointmentData(Long animalId, String appointmentDateTime, String appointmentNotes, String appointmentType, String appointmentLocation, Long ownerId) {
        this.animalId = animalId;
        this.appointmentDateTime = appointmentDateTime;
        this.appointmentNotes = appointmentNotes;
        this.appointmentType = appointmentType;
        this.appointmentLocation = appointmentLocation;
        this.ownerId = ownerId;
    }

    // Getters and setters
    public Long getAnimalId() {
        return animalId;
    }

    public void setAnimalId(Long animalId) {
        this.animalId = animalId;
    }

    public String getAppointmentDateTime() {
        return appointmentDateTime;
    }

    public void setAppointmentDateTime(String appointmentDateTime) {
        this.appointmentDateTime = appointmentDateTime;
    }

    public String getAppointmentNotes() {
        return appointmentNotes;
    }

    public void setAppointmentNotes(String appointmentNotes) {
        this.appointmentNotes = appointmentNotes;
    }

    public String getAppointmentType() {
        return appointmentType;
    }

    public void setAppointmentType(String appointmentType) {
        this.appointmentType = appointmentType;
    }

    public String getAppointmentLocation() {
        return appointmentLocation;
    }

    public void setAppointmentLocation(String appointmentLocation) {
        this.appointmentLocation = appointmentLocation;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    // Method toString


    @Override
    public String toString() {
        return "AppointmentData{" +
                "animalId='" + animalId + '\'' +
                ", appointmentDateTime='" + appointmentDateTime + '\'' +
                ", appointmentNotes='" + appointmentNotes + '\'' +
                ", appointmentType='" + appointmentType + '\'' +
                ", appointmentLocation='" + appointmentLocation + '\'' +
                ", ownerId='" + ownerId + '\'' +
                '}';
    }
}
