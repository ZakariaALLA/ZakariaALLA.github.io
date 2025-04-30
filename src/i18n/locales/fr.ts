
export default {
  // Navigation
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.skills": "Compétences",
  "nav.resume": "CV",
  "nav.projects": "Projets",
  "nav.contact": "Contact",
  
  // Home Section
  "home.greeting": "Bonjour, je suis",
  "home.name": "Zakaria Alla",
  "home.title": "Développeur Full Stack",
  "home.description": "Passionné par la création de solutions élégantes et efficaces pour des problèmes complexes.",
  "home.cta": "Voir les projets",
  
  // About Section
  "about.title": "À propos de moi",
  "about.description": "Je suis un développeur full-stack spécialisé dans les technologies web modernes. Solide en front-end et back-end, je crée des applications robustes offrant des expériences utilisateurs exceptionnelles.",
  "about.experience": "Années d'expérience",
  "about.projects": "Projets Réalisés",
  "about.clients": "Clients Satisfaits",
  "about.bio": "Après avoir travaillé dans divers domaines, de l'e-commerce aux solutions d'entreprise, j'ai développé un sens aigu du détail et un engagement pour un code propre et maintenable. J'aime résoudre des problèmes complexes et apprendre en continu de nouvelles technologies pour améliorer mes compétences.",
  
  // Skills Section
  "skills.title": "Mes Compétences",
  "skills.hard": "Compétences Techniques",
  "skills.soft": "Compétences Comportementales",
  
  // Resume Section
  "resume.title": "Mon CV",
  "resume.download": "Télécharger le CV",
  "resume.education": "Formation",
  "resume.experience": "Expérience",
  "resume.certifications": "Certifications",
  "resume.experience.list": [
    {
      company: "Econocom",
      client: "Client CDC",
      role: "Ingénieur Informatique",
      period: "Avril 2024 – Présent",
      location: "Paris",
      intro: "Au sein du client CDC (Caisse des Dépôts et de Consignation), j’ai travaillé sur deux projets stratégiques dans le domaine de la gestion des risques bancaires.",
      projects: [
        {
          label: "Projet 1 : Refonte de l’outil de gestion des tiers référentiels risques",
          desc: "Cet outil permet d’identifier et surveiller les tiers (clients, fournisseurs, partenaires) en fonction de leur exposition aux risques financiers, réglementaires et opérationnels. J’ai participé à la migration de l’application existante, développée initialement en ASP.NET, vers une nouvelle architecture basée sur Java 21, Spring Boot 3 et Angular 17. La base de données MSSQL a été conservée, et l’application a été déployée sur un cloud privé pour assurer une meilleure scalabilité et sécurité."
        },
        {
          label: "Projet 2 : Création d’un outil de calcul des risques climatiques",
          desc: "Cet outil évalue les risques physiques (événements climatiques extrêmes) et risques de transition (impact des politiques de décarbonations). Il aide à la gestion des engagements financiers de la banque. Le développement a respecté les normes RGAA (Référentiel Général d'Amélioration de l'Accessibilité) pour garantir l’accessibilité aux personnes en situation de handicap."
        }
      ],
      team: "1 Scrum Master, 1 Product Owner, 1 Tech Lead, 1 Business Analyst, 1 Testeur, 4 Développeurs",
      missions: [
        "Création et refonte des applications.",
        "Développement d’API REST avec Spring Boot 3 & Java 21.",
        "Développement des interfaces utilisateurs en Angular 17 et 18.",
        "Réalisation des tests unitaires (back et front) pour assurer la qualité du code (JUnit, Mockito et Jest).",
        "Réalisation des tests d’intégration et de non-régression (BDD avec Cucumber).",
        "Préparation des livrables et documentation technique.",
        "Refactorisation du code pour améliorer la performance et la maintenabilité.",
        "Analyse et chiffrage."
      ],      
      technologies: "Java 17, 21, Spring Boot 3, Angular 17, 18, chartjs, Liquibase, PostgreSQL, MSSQL, Swagger, Maven, SonarQube, Git, Bitbucket, Jenkins, Cloudbees, Docker, Kubernetes, Rancher, ArgoCD, Cloud, Confluence, Scrum"
    },
    {
      company: "CGI",
      client: "Client BNP Paribas",
      role: "Ingénieur Informatique",
      period: "Mars 2022 – Mars 2024",
      location: "Casablanca",
      intro: "J’ai contribué à deux projets majeurs pour BNP Paribas, alliant maintenance, migration et évolution d’applications stratégiques.",
      projects: [
        {
          label: "Projet 1 : Maintenance et migration de l’application Conseil BPF",
          desc: "Conseil BPF est une application permettant aux conseillers bancaires de proposer des recommandations financières adaptées aux clients (investissements, assurances, épargne). L’application reposait sur des batch Java et des web services Spring MVC. J’ai participé à sa maintenance puis sa migration vers une architecture cloud, en introduisant Spring Boot, Spring Batch, Docker et Kubernetes, garantissant une meilleure performance et scalabilité."
        },
        {
          label: "Projet 2 : Maintenance et évolution de NeoLink (Contexte international et anglophone)",
          desc: "NeoLink est un portail en ligne de BNP Paribas Securities Services, offrant aux clients un accès centralisé aux services financiers (gestion d’actifs, trésorerie, market updates, reporting …). J’ai travaillé sur la maintenance, la correction de bugs en production, ainsi que le développement de nouvelles fonctionnalités pour optimiser la plateforme."
        }
      ],
      team: "1 Scrum Master, 1 Tech Lead, 1 Product Owner, 2 Business Analyst/QA, 5 Développeurs",
      missions: [
        "Développement et évolution des applications.",
        "Migration vers Java (8 → 17 → 21), Spring Boot (2.3 → 3.2), Angular (9 → 14).",
        "Développement d’API REST et d’interfaces Angular.",
        "Refactorisation et optimisation du code.",
        "Tests unitaires et intégration.",
        "Mise en production & qualification (MEQ/MEP).",
        "Analyse et chiffrage des évolutions."
      ],
      technologies: "Java 8, 17/21, Spring MVC, Spring Boot, Spring Batch, Angular, Mave, Gradle, DDD, Jenkins, Git, GitLab, OracleDB, PostgreSQL, SyBase, Liquibase, Cloud, Docker, Kubernetes, Linux, Bash, CI/CD."
    },
    {
      company: "LeRIF",
      client: "Interne",
      role: "Ingénieur Informatique - Alternance",
      period: "Avril 2020 – Août 2021",
      location: "Paris",
      intro: "J’ai contribué à deux projets majeurs en alternance chez LeRIF, alliant conception et développement d’applications internes basées sur une architecture microservices:",
      projects: [
        {
          label: "Projet 1 : Application de gestion médecins/patients (type Doctolib)",
          desc: "Conception d’une solution facilitant la prise de rendez-vous, la gestion des dossiers médicaux et la communication entre patients et médecins. J’ai participé à la mise en place d’une architecture microservices décomposant le système en modules (rendez-vous, notifications, facturation)."
        },
        {
          label: "Projet 2 : Application de gestion des ressources humaines",
          desc: "Développement d’une application centralisant la gestion des employés, le suivi des congés, la formation et l’évaluation des performances. J’ai participé à la conception et le développement de l’outil en appliquant une architecture microservices pour assurer flexibilité et évolutivité."
        }
      ],
      team: "1 Scrum Master, 1 Tech Lead, 2 Business Analyst/QA, 4 Développeurs",
      missions: [
        "Participation à la mise en place de l’architecture microservices.",
        "Conception et développement d’API REST (backend Spring) et d’interfaces dynamiques en Angular.",
        "Rédaction des livrables techniques et travail en mode agile (Scrum)."
      ],
      technologies: "Java/JEE, Spring, Angular, ChartJS, API REST, postgresql, Eureka, Zuul, micro services, API Mail, API SMS, JUnit, GitHub, Scrum."
    },    
  ],
  "resume.education.list":[
    {
      title: "Ingénieur en génie informatique",
      place: "Université Mundiapolis",
      year: "2019 – 2022",
      description: "Cycle d'ingénieurs en ingénierie informatique à l'université Mundiapolis de Casablanca."
    },
    {
      title: "Cycle des classes préparatoires",
      place: "Université Mundiapolis",
      year: "2017 - 2019",
      description: "Classes préparatoires à l'université Mundiapolis de Casablanca."
    },
    {
      title: "Baccalauréat en Sciences physiques",
      place: "Lycée Tondoute",
      year: "2017",
      description: "Baccalauréat en Sciences physiques."
    }
  ],
  "resume.projects.list": [
    {
      "id": 2,
      "title": "API de Gestion de Football",
      "description": "Une API RESTful pour la gestion des équipes de football, développée avec Spring Boot et technologies associées.",
      "image": "/static/portfolio/footbal1.png",
      "category": "web",
      "codeUrl": "https://github.com/ZakariaALLA/nice-equipe-football-api",
      "technologies": ["Java 21", "Spring Boot 3.4.4", "Spring Security - JWT", "Docker", "PostgreSQL"]
    },
    {
      "id": 1,
      "title": "HRM-RIF",
      "description": "Un système de gestion des ressources humaines.",
      "image": "/static/portfolio/hrmrif.PNG",
      "category": "web",
      "technologies": ["Spring Boot", "Angular", "Microservices", "MySQL"]
    },
    {
      "id": 3,
      "title": "DoctoRIF",
      "description": "DoctoRIF aide les patients à trouver leurs médecins. Cette application permet de rechercher des médecins selon différentes spécialités et localisations.",
      "image": "/static/portfolio/doctorifss.PNG",
      "category": "web",
      "technologies": ["Java", "Spring Boot", "Angular", "Microservices", "Spring Cloud", "PostgreSQL"]
    },
    {
      "id": 4,
      "title": "Clickshop",
      "description": "Le projet CLICKSHOP est un site de commerce en ligne permettant aux visiteurs de commander et payer des produits liés à la santé et au bien-être.",
      "image": "/static/portfolio/clickshopss.PNG",
      "category": "web",
      "technologies": ["WordPress", "WooCommerce", "Elementor"]
    },
    {
      "id": 5,
      "title": "Cinema Hub",
      "description": "Une application web pour gérer les cinémas dans différentes villes.",
      "image": "/static/portfolio/cinemahubss.PNG",
      "category": "web",
      "codeUrl": "https://github.com/ZakariaALLA/GestionCinema-Angular-Spring-Thymleaf",
      "technologies": ["Spring Boot", "Angular", "Thymeleaf", "MySQL"]
    },
    {
      "id": 6,
      "title": "Movie Platform",
      "description": "Une plateforme web de films, réactive et intuitive, utilisant le filtrage du contenu pour les recommandations.",
      "image": "/static/portfolio/moviess.PNG",
      "category": "web",
      "technologies": ["JavaScript", "PHP", "jQuery", "Bootstrap", "MySQL"]
    },
    {
      "id": 7,
      "title": "Massroufi",
      "description": "Une application mobile pour la gestion du budget personnel « مصروفي تحت تصرفي ».",
      "image": "/static/portfolio/massroufiss.PNG",
      "category": "mobile",
      "codeUrl": "https://github.com/ZakariaALLA/MassroufiMobileDev",
      "technologies": ["Flutter", "Dart"]
    },
    {
      "id": 8,
      "title": "Gestion UTH",
      "description": "Gestion UTH est un petit système permettant la gestion de l'entreprise UTH GROUPE.",
      "image": "/static/portfolio/gestionUthsh.PNG",
      "category": "desktop",
      "technologies": ["Java 8", "JavaFX"]
    },
    {
      "id": 9,
      "title": "I Offer For Free",
      "description": "I Offer for Free : Une plateforme où la générosité connecte les gens.",
      "image": "/static/portfolio/offreGratuite.PNG",
      "category": "web",
      "technologies": ["JavaScript", "PHP", "jQuery", "Bootstrap"]
    }
  ],
  "resume.projectsdetails": [
    {
      "id": 2,
      "title": "Football Management API",
      "description": "Une API RESTful robuste pour la gestion des équipes de football, développée avec Spring Boot et des technologies de pointe. Elle propose des endpoints pour créer, mettre à jour et organiser des équipes, des joueurs et des calendriers de matchs. Avec une sécurité intégrée via Spring Security et JWT, et un déploiement évolutif grâce à Docker et PostgreSQL, elle offre une base solide pour des applications ou plateformes liées au football.",
      "images": ["/static/portfolio/footbal1.png", "/static/portfolio/footbal2.png", "/static/portfolio/footbal3.png"],
      "technologies": ["Java 21", "Spring boot 3.4.4", "Spring security - JWT", "Docker", "Postgresql"]
    },
    {
      "id": 1,
      "title": "HRM-RIF",
      "description": "Création d'un système de gestion des ressources humaines composé de deux parties : un backend développé avec Spring Boot et des microservices, et un frontend construit avec Angular. Le backend est organisé selon une architecture microservices, tandis que le frontend utilise Angular pour l'interface utilisateur. Le système comprend plusieurs microservices : ConfigurationService, qui gère les fichiers de configuration et se connecte à un dépôt Git ; ServiceDiscovery, qui surveille l'état (actif/inactif) de tous les microservices ; ServiceGateway avec Zuul, qui agit comme un proxy et sert de point d'entrée principal tout en gérant également l'authentification ; et UserManagement, dédié à la gestion des utilisateurs tels que les directeurs RH, agents de service et employés au sein de l'application HRManagement-RIF.",
      "videoUrl": "/static/videos/Demo_HRMRIF_Zakaria_ALLA.mp4",
      "technologies": ["Java", "Spring Boot", "Angular", "PostgreSQL", "microservices", "API Nexmo"]
    },
    {
      "id": 3,
      "title": "DoctoRIF",
      "description": "DoctoRIF aide les patients à trouver facilement des médecins selon leurs spécialités et leurs localisations. Cette application intuitive permet aux utilisateurs de rechercher des professionnels de santé dans divers domaines, garantissant ainsi un accès rapide aux soins appropriés. Développée avec un backend robuste utilisant Java, Spring Boot, une architecture microservices et Spring Cloud, ainsi qu'un frontend dynamique sous Angular, DoctoRIF assure une expérience utilisateur fluide, évolutive et performante, avec PostgreSQL comme solution de base de données.",
      "videoUrl": "/static/videos/DemoApplicationDoctorif.mp4",
      "technologies": ["Java", "Spring Boot", "Angular", "Microservices", "Spring Cloud", "PostgreSQL"]
    },
    {
      "id": 4,
      "title": "Clickshop",
      "description": "CLICKSHOP est un site de commerce en ligne dédié à l'offre d'une large gamme de produits de santé et de bien-être. Les visiteurs peuvent facilement parcourir le catalogue, passer commande et effectuer leurs achats en ligne en toute sécurité. Développée avec WordPress, WooCommerce et Elementor, la plateforme offre un design réactif, une navigation fluide et un puissant système de gestion de contenu, garantissant une expérience d'achat optimale pour les clients comme pour les administrateurs.",
      "videoUrl": "/static/videos/clickshopVF.mp4",
      "technologies": ["WordPress", "WooCommerce", "Elementor"]
    },
    {
      "id": 5,
      "title": "Cinema Hub",
      "description": "Cinema Hub est un système de gestion web destiné aux cinémas situés dans différentes villes, permettant aux administrateurs de gérer les programmes de films, les salles de cinéma et les réservations de billets efficacement. Construit avec Spring Boot, Angular, Thymeleaf et MySQL, cette plateforme offre une interface fiable et intuitive pour optimiser à la fois les opérations quotidiennes et l'interaction avec les clients.",
      "images": ["/static/portfolio/frontOffice.png", "/static/portfolio/backOffice.png"],
      "technologies": ["Spring Boot", "Angular", "Thymeleaf", "MySQL"]
    },
    {
      "id": 6,
      "title": "Movie Platform",
      "description": "Movie Platform est une application web réactive et intuitive conçue pour les amateurs de cinéma souhaitant explorer un large éventail de films. Elle propose un système avancé de filtrage de contenu et de recommandations pour personnaliser l'expérience utilisateur. Développée avec JavaScript, PHP, jQuery, Bootstrap et MySQL, cette plateforme garantit une navigation rapide, une présentation dynamique des contenus et une expérience de consultation agréable pour tous les utilisateurs.",
      "videoUrl": "/static/videos/movies.mp4",
      "technologies": ["JavaScript", "PHP", "jQuery", "Bootstrap", "MySQL"]
    },
    {
      "id": 7,
      "title": "Massroufi",
      "description": "Massroufi est une application mobile créée pour aider les individus à mieux gérer leur budget personnel, avec pour slogan « مصروفي تحت تصرفي » signifiant « Mes dépenses sous mon contrôle ». Développée avec Flutter et Dart, l'application propose une interface épurée et conviviale pour suivre les revenus, les dépenses et les économies, permettant aux utilisateurs de reprendre le contrôle de leur santé financière directement depuis leur smartphone.",
      "videoUrl": "/static/videos/massroufi.mp4",
      "technologies": ["Flutter", "Dart"]
    },
    {
      "id": 8,
      "title": "Gestion UTH",
      "description": "Gestion UTH est un système de gestion de bureau léger développé pour la société UTH GROUPE afin de faciliter la gestion des opérations et des ressources internes. Construit avec Java 8 et JavaFX, l'application fournit une interface simple et efficace pour gérer les processus métiers essentiels, améliorant ainsi la productivité organisationnelle et l'aide à la prise de décision.",
      "videoUrl": "/static/videos/gestionUTH.mp4",
      "technologies": ["Java 8", "JavaFX"]
    },
    {
      "id": 9,
      "title": "I Offer For Free",
      "description": "I Offer For Free est une plateforme web conçue pour connecter les personnes à travers la générosité en leur permettant d'offrir et de recevoir gratuitement des biens ou des services. Développée avec JavaScript, PHP, jQuery et Bootstrap, l'application favorise un environnement communautaire axé sur le partage et l'entraide, contribuant à rendre le monde un peu plus solidaire et connecté.",
      "videoUrl": "/static/videos/offreGratuitement.mp4",
      "technologies": ["JavaScript", "PHP", "jQuery", "Bootstrap"]
    }
  ],  
  // Projects Section
  "projects.title": "Mes Projets",
  "projects.filter.all": "Tous",
  "projects.filter.web": "Web",
  "projects.filter.mobile": "Mobile",
  "projects.filter.desktop": "Bureau",
  "projects.viewDemo": "Démo",
  "projects.viewCode": "Code Source",
  
  // Contact Section
  "contact.title": "Contactez-moi",
  "contact.description": "N'hésitez pas à me contacter pour une collaboration ou toute demande.",
  "contact.name": "Votre Nom",
  "contact.email": "Votre Email",
  "contact.subject": "Sujet",
  "contact.message": "Votre Message",
  "contact.send": "Envoyer le message",
  "contact.success": "Votre message a été envoyé avec succès !",
  "contact.error": "Oups ! Une erreur est survenue. Veuillez réessayer.",
  
  // Footer
  "footer.rights": "Tous droits réservés",
  "footer.madeWith": "Fait avec",
  
  // Theme Toggle
  "theme.light": "Mode clair",
  "theme.dark": "Mode sombre",
  
  // Language Toggle
  "language.en": "Anglais",
  "language.fr": "Français",
  "projects.back": "Revenir"
};
