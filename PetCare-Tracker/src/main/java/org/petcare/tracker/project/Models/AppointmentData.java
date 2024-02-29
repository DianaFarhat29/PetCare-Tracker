package org.petcare.tracker.project.Models;

import org.springframework.format.annotation.DateTimeFormat;

public class AppointmentData {

    // Attributes
    private Long animalId;
    private String appointmentDateTime;
    private String appointmentNotes;
    private String appointmentType;
    private String appointmentLocation;
    private String emailOwner;

    // Constructors
    public AppointmentData(Long animalId, String appointmentDateTime, String appointmentNotes, String appointmentType, String appointmentLocation, String emailOwner) {
        this.animalId = animalId;
        this.appointmentDateTime = appointmentDateTime;
        this.appointmentNotes = appointmentNotes;
        this.appointmentType = appointmentType;
        this.appointmentLocation = appointmentLocation;
        this.emailOwner = emailOwner;
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

    public String getEmailOwner() {
        return emailOwner;
    }

    public void setEmailOwner(String emailOwner) {
        this.emailOwner = emailOwner;
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
                ", emailOwner='" + emailOwner + '\'' +
                '}';
    }
}
