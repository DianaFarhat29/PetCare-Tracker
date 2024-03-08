# Introduction

  Le projet "PetCare Tracker" est une application web transactionnelle asynchrone client-serveur développée dans le cadre du cours Applications Hypermédia II. Cette plateforme vise à aider les propriétaires d'animaux à suivre et gérer efficacement les soins de leurs animaux de compagnie.

# Fonctionnalités

  L'application offre plusieurs fonctionnalités clés :

    -	Suivi des Vaccinations et des Soins de Santé:
      
      •	Calendrier personnalisé pour chaque animal avec rappels pour les vaccinations, visites vétérinaires et traitements médicaux.
      •	Possibilité d’ajout d’évènements et de rendez-vous à une section de rappels de rendez-vous. La section de rappels offre l’option d’afficher tous les détails (animal concerné, type, date, lieu et notes) de chaque rendez-vous à venir. 
    
    -	Profils Personnalisés:
  
      •	Profils individuels pour chaque animal, incluant des informations : nom, âge, race, besoins spécifiques et rendez-vous à venir.
      •	Possibilité de créer des photos et de les associer aux profils.
  
    -	Conseils de Soins Quotidiens:
      
      •	Suggestions et conseils pour le soin quotidien des animaux, basés sur l'âge, la race et les besoins des animaux.
     	
    -	Gestion des Comptes:
      
      •	Système de création de compte pour les propriétaires, permettant une gestion sécurisée de leurs informations et celles de leurs animaux.
      •	 Possibilité au propriétaire de modifier ses informations d’inscription et de supprimer son compte, après s’être inscrit et connecté.
      •	Compte administrateur pour la gestion des utilisateurs et des données de l'application.

# Technologies Utilisées

  -	Front-end: Angular 17, Bootstrap 5, HTML, CSS, JavaScript
  -	Back-end: Spring Boot 3.2.2
  -	Base de données: MySQL
  -	Outils: GitLab/GitHub, MySQL Workbench
  -	Plugins : FullCalendar
  
# Mise en Route

  1.	Prérequis:
     
    1)	Avoir installé MySQL Server et MySQL Workbench.
    2)	Avoir Angular CLI, Git, Node.js et npm installés.
  
  2. Cloner le Dépôt:

    1)	Initialiser un dossier Git avec la commande suivante :
    
        git init
        
    2)	Naviguer dans le dossier initialisé et exécuter la commande suivante dans un dossier  :
    
        git clone https://github.com/DianaFarhat29/PetCare-Tracker.git
    
  3.	Ouvrir le Projet :

    Ouvrez le projet dans un IDE supportant Java et Spring Boot, comme IntelliJ IDEA ou Eclipse.

  4.	Installer les Dépendances:
     
    1)	Naviguer dans le dossier PetCare-Tracker.
    2)	Exécuter npm install.
    3)	S’assurer que le projet est reconnu en tant que projet Maven (‘m’ de couleur bleue à gauche du dossier pom.xml) et que les dépendances de Maven ont été chargées.
    4)	Naviguer dans le dossier angularFolder.
    5)	Exécuter npm install.
    
  5.	Configuration de la Base de Données:
    
    1)	Ouvrir le fichier application.properties (situé dans :  PetCare-Tracker\src\main\resources).
    2)	Ajuster le mot de passe de la connexion à la base de données sur MySql (connection string).

  6.	Lancer l'Application:
   
    1)	Ouvrir votre IDE (IntelliJ IDEA, Eclipse, etc.).
    2)	Ouvrir le projet PetCare-Tracker.
    3)	Lancer l’exécution du fichier main PetCareTrackerProjectApplication.java (situé dans PetCare-Tracker /src/main/java/org/petcare/tracker/project/PetCareTrackerProjectApplication.java)
    4)	Naviguer au dossier angularFolder et exécuter la commande npm serve –open dans le terminal 
    5)	Exécuter l'application.
    6)	L'application devrait se lancer sur localhost:4200.
  
  7.	Utilisation de l'Application
     
    1)	Ouvrir un navigateur web et accéder à l'URL localhost:4200.
    2)	Créer un compte pour commencer à utiliser l'application.
    3)	Une fois connecté, vous pouvez profiter de toutes les fonctionnalités de l'application.
    4)	Il est aussi possible de se connecter avec 3 comptes de démonstration (Deux propriétaires et un administrateur) dont les informations de connexions se trouvent dans le fichier main PetCareTrackerProjectApplication.java

# Conclusion

  Le projet PetCare Tracker est une solution complète et intuitive pour la gestion des soins des animaux de compagnie. L'application offre une variété de fonctionnalités pour aider les propriétaires à garder leurs animaux en bonne santé et heureux.

