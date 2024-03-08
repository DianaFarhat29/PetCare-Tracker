# Introduction

The "PetCare Tracker" project is a client-server asynchronous transactional web application developed as part of the Hypermedia Applications II course. This platform aims to help pet owners track and effectively manage their pets' care.

# Features

The application offers several key features:

- Tracking Vaccinations and Healthcare:

    • Personalized calendar for each pet with reminders for vaccinations, veterinary visits, and medical treatments.
    • Ability to add events and appointments to an appointment reminder section. The reminder section offers the option to display all the details (pet involved, type, date, location, and notes) of each upcoming appointment.

- Personalized Profiles:
  
    • Individual profiles for each pet, including information such as name, age, breed, specific needs, and upcoming appointments.
    • Ability to create photos and associate them with profiles.

- Daily Care Tips:

    • Suggestions and tips for daily pet care, based on the pet's age, breed, and needs.

- Account Management:

    • Account creation system for owners, allowing secure management of their information and that of their pets.
    • Ability for the owner to modify their registration information and delete their account, after registering and logging in.
    • Administrator account for managing users and application data.

# Technologies Used

- Front-end: Angular 17, Bootstrap 5, HTML, CSS, JavaScript
- Back-end: Spring Boot 3.2.2
- Database: MySQL
- Tools: GitLab/GitHub, MySQL Workbench
- Plugins: FullCalendar
    
# Getting Started

1. Prerequisites:

    1) Have MySQL Server and MySQL Workbench installed.
    2) Have Angular CLI, Git, Node.js, and npm installed.

2. Clone the Repository:

    1) Initialize a Git folder with the following command:
       git init
    2) Navigate to the initialized folder and execute the following command in a folder:
       git clone https://github.com/DianaFarhat29/PetCare-Tracker.git
   
3. Open the Project:

    Open the project in an IDE that supports Java and Spring Boot, such as IntelliJ IDEA or Eclipse.

4. Install the Dependencies:

    1) Navigate to the PetCare-Tracker folder.
    2) Run npm install.
    3) Ensure that the project is recognized as a Maven project (blue 'm' to the left of the pom.xml file) and that the Maven dependencies have been loaded.
    4) Navigate to the angularFolder folder.
    5) Run npm install.
       
5. Database Configuration:

    1) Open the application.properties file (located in: PetCare-Tracker\src\main\resources).
    2) Adjust the database connection password (connection string).
  
6. Run the Application:

    1) Open your IDE (IntelliJ IDEA, Eclipse, etc.).
    2) Open the PetCare-Tracker project.
    3) Run the main PetCareTrackerProjectApplication.java file (located in PetCare-Tracker /src/main/java/org/petcare/tracker/project/PetCareTrackerProjectApplication.java)
    4) Navigate to the angularFolder folder and run the command npm serve –open in the terminal.
    5) Run the application.
    6) The application should launch on localhost:4200.
       
7. Using the Application:

    1) Open a web browser and navigate to the URL localhost:4200.
    2) Create an account to start using the application.
    3) Once logged in, you can enjoy all the features of the application.
    4) It is also possible to connect with 3 demo accounts (Two owners and one administrator) whose login information can be found in the main PetCareTrackerProjectApplication.java file.
   
# Conclusion

The PetCare Tracker project is a complete and intuitive solution for pet care management. The application offers a variety of features to help owners keep their pets healthy and happy.
