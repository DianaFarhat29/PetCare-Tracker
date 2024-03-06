package org.petcare.tracker.project;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.apache.log4j.BasicConfigurator;
import org.petcare.tracker.project.Controllers.AnimalController;
import org.petcare.tracker.project.Models.Animal;
import org.petcare.tracker.project.Models.Owner;
import org.petcare.tracker.project.Repositories.AnimalRepository;
import org.petcare.tracker.project.Repositories.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.web.filter.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.LogManager;

import java.util.logging.Logger;
import java.util.stream.Stream;

@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"org.petcare.tracker.project.Models"})
public class PetCareTrackerProjectApplication {


    // static java.util.logging.Logger log = Logger.getLogger(PetCareTrackerProjectApplication.class.getName());

    @Autowired
    private AnimalController animalController;

    @Autowired
    private OwnerRepository ownerRepository;

    public static void main(String[] args) {

        BasicConfigurator.configure();

        SpringApplication.run(PetCareTrackerProjectApplication.class, args);

    }


    @Bean
    CommandLineRunner initAnimals(OwnerRepository ownerRepository) {
        // log.info("METHODE initAnimals");

        Owner owner1 = new Owner(1L, "Sami", "Farhat", "Sami@outlook.com", "514-585-1234", "Pass123Word!", "Admin", new HashSet<>());
        Owner owner2 = new Owner(2L, "Diana", "Farhat", "Diana.farhat@outlook.com", "514-555-1234", "Pass123Word!", "Owner", new HashSet<>());
        ownerRepository.save(owner1);
        ownerRepository.save(owner2);

        return args -> {

            Stream.of(
                    new Animal( null, Collections.singleton(owner2), "Fluffy", "Siamese", "Female", LocalDate.of(2020, 2, 15), 3.5, 25.0, null, null, "Likes tuna treats", "../assets/images/patte.png"),
                    new Animal(null, Collections.singleton(owner2), "Max", "Golden Retriever", "Male", LocalDate.of(2018, 8, 4), 35.0, 60.0, "Allergies", LocalDate.of(2023, 11, 20), null, "../assets/images/patte.png"),
                    new Animal(null, Collections.singleton(owner2), "Daisy", "Poodle", "Female", LocalDate.of(2022, 5, 29), 6.0, 30.0, null, LocalDate.of(2024, 1, 12), "Recently groomed", "../assets/images/patte.png")

            ).forEach(animal -> animalController.addAnimal(animal, List.of(2L)));
        };
    }

}
