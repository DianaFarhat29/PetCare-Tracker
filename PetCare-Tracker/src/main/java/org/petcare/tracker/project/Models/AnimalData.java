package org.petcare.tracker.project.Models;

public class AnimalData {

    // Attributes
    private Long owner;
    private String name;
    private String race;
    private String gender;
    private String birthday;
    private String weight;
    private String height;
    private String healthCondition;
    private String lastVisit;
    private String notes;
    private String picture;

    // Constructors

    public AnimalData(Long owner, String name, String race, String gender, String birthday, String weight, String height, String healthCondition, String lastVisit, String notes, String picture) {
        this.owner = owner;
        this.name = name;
        this.race = race;
        this.gender = gender;
        this.birthday = birthday;
        this.weight = weight;
        this.height = height;
        this.healthCondition = healthCondition;
        this.lastVisit = lastVisit;
        this.notes = notes;
        this.picture = picture;
    }

    // Getters and Setters

    public Long getOwner() {
        return owner;
    }

    public void setOwner(Long owner) {
        this.owner = owner;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getHealthCondition() {
        return healthCondition;
    }

    public void setHealthCondition(String healthCondition) {
        this.healthCondition = healthCondition;
    }

    public String getLastVisit() {
        return lastVisit;
    }

    public void setLastVisit(String lastVisit) {
        this.lastVisit = lastVisit;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    // Method toString

    @Override
    public String toString() {
        return "AnimalData{" +
                "owner=" + owner +
                ", name='" + name + '\'' +
                ", race='" + race + '\'' +
                ", gender='" + gender + '\'' +
                ", birthday='" + birthday + '\'' +
                ", weight='" + weight + '\'' +
                ", height='" + height + '\'' +
                ", healthCondition='" + healthCondition + '\'' +
                ", lastVisit='" + lastVisit + '\'' +
                ", notes='" + notes + '\'' +
                ", picture='" + picture + '\'' +
                '}';
    }
}
