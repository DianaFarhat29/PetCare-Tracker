package org.petcare.tracker.project.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "owners")
public class Owner {

    // Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String noTel;

    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String role;

    @ManyToMany
    @JoinTable(
            name = "owner_animal",
            joinColumns = @JoinColumn(name = "owner_id"),
            inverseJoinColumns = @JoinColumn(name = "animal_id")
    )
    @JsonBackReference
    private Set<Animal> animals = new HashSet<>();

    // Constructors
    public Owner(Long id, String firstName, String lastName,
                 String email, String noTel, String password,
                 String role, Set<Animal> animals) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.noTel = noTel;
        this.password = password;
        this.role =role;
        this.animals = animals;
    }

    public Owner() {

    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNoTel() {
        return noTel;
    }
    public void setNoTel(String noTel) {
        this.noTel = noTel;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }


    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }


    public Set<Animal> getAnimals() {
        return animals;
    }

    public void setAnimals(Set<Animal> animals) {
        this.animals = animals;
    }

    // Method toString()

    @Override
    public String toString() {
        return "Owner{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    public void addAnimal(Animal animal) {
        this.animals.add(animal);
        animal.getOwners().add(this);
    }

}
