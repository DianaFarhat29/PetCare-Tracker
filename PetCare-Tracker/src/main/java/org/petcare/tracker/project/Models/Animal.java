package org.petcare.tracker.project.Models;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Table(name = "animals")
public class Animal {

    // Attributs
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;
    @ManyToMany
    @JoinTable(
            name = "animal_owner",
            joinColumns = @JoinColumn(name = "animal_id"),
            inverseJoinColumns = @JoinColumn(name = "owner_id")
    )
    private Set<Owner> owners = new HashSet<>();
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String race;
    @Column(nullable = true)
    private String gender;
    @Column(nullable = true)
    private LocalDate birthday;
    @Column(nullable = true)
    private double weight;
    @Column(nullable = true)
    private double height;
    @Column(nullable = true)
    private String healthCondition;
    @Column(nullable = true)
    private LocalDate lastVisit;
    @Column(nullable = true)
    private String notes;
    @Column(nullable = true)
    private String picture;


    // Constructors

    // Constructor with all attributs
    public Animal(Long id,Set<Owner> owners, String name, String race, String gender, LocalDate birthday, double weight, double height, String healthCondition, LocalDate lastVisit, String notes, String picture) {
        this.id = id;
        this.owners = owners;
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

    // Constructor with (nullable=false) attributs
    public Animal(Long id, Set<Owner> owners, String name, String race) {
        this.id = id;
        this.owners = owners;
        this.name = name;
        this.race = race;
    }

    // Empty constructor
    public Animal() {

    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Owner> getOwners() {
        return owners;
    }

    public void setOwners(Set<Owner> owners) {
        this.owners = owners;
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

    public LocalDate getBirthday() {
        return birthday;
    }


    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }
    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public String getHealthCondition() {
        return healthCondition;
    }

    public void setHealthCondition(String healthCondition) {
        this.healthCondition = healthCondition;
    }

    public LocalDate getLastVisit() {
        return lastVisit;
    }

    public void setLastVisit(LocalDate lastVisit) {
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

    // Method toString()

    @Override
    public String toString() {
        return "Animal{" +
                "id=" + id +
                ", owners=" + owners +
                ", name='" + name + '\'' +
                ", race='" + race + '\'' +
                ", gender='" + gender + '\'' +
                ", birthday=" + birthday +
                ", weight=" + weight +
                ", height=" + height +
                ", healthCondition='" + healthCondition + '\'' +
                ", lastVisit=" + lastVisit +
                ", notes='" + notes + '\'' +
                ", picture='" + picture + '\'' +
                '}';
    }
}
