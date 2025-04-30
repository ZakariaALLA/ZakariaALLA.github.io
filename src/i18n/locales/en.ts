
export default {
  // Navigation
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.resume": "Resume",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  
  // Home Section
  "home.greeting": "Hello, I'm",
  "home.name": "Zakaria Alla",
  "home.title": "Full Stack Developer",
  "home.description": "Passionate about creating elegant, efficient solutions to complex problems.",
  "home.cta": "View Projects",
  
  // About Section
  "about.title": "About Me",
  "about.description": "I'm a full-stack developer with expertise in modern web technologies and the ability to manage the entire software development lifecycle from system design and architecture to back-end, front-end, and DevOps/cloud deployment. I specialize in building scalable web applications using Java, Spring, Angular, and microservices architectures, with a strong focus on delivering reliable, maintainable, and production-ready solutions.",
  "about.experience": "Years of Experience",
  "about.projects": "Projects Completed",
  "about.clients": "Satisfied Clients",
  "about.bio": "Having worked across various domains especially on enterprise solutions (Bank and finance tech), I've developed a keen eye for detail and a commitment to writing clean, maintainable code. I enjoy solving complex problems and continuously learning new technologies to enhance my skill set.",
  
  // Skills Section
  "skills.title": "My Skills",
  "skills.frontend": "Frontend",
  "skills.backend": "Backend",
  "skills.tools": "Tools & Others",
  
  // Resume Section
  "resume.title": "My Resume",
  "resume.download": "Download CV",
  "resume.education": "Education",
  "resume.experience": "Experience",
  "resume.certifications": "Certifications",
  "resume.experience.list": [
    {
      company: "Econocom",
      client: "CDC (Caisse des Dépôts et Consignations)",
      role: "IT Engineer",
      period: "April 2024 – Present",
      location: "Paris",
      intro: "Within the CDC client (Caisse des Dépôts et Consignations), I worked on two strategic projects in banking risk management.",
      projects: [
        {
          label: "Project 1: Overhaul of the risk reference-data management tool",
          desc: "This tool identifies and monitors third parties (clients, suppliers, partners) based on their exposure to financial, regulatory, and operational risks. I participated in migrating the existing application—originally developed in ASP.NET—to a new architecture based on Java 21, Spring Boot 3, and Angular 17. The MSSQL database was retained, and the app was deployed on a private cloud to ensure better scalability and security."
        },
        {
          label: "Project 2: Creation of a climate-risk calculation tool",
          desc: "This tool assesses physical risks (extreme weather events) and transition risks (impacts of decarbonization policies). It supports management of the bank’s financial exposures. Development adhered to RGAA (General Accessibility Improvement Framework) standards to guarantee accessibility for users with disabilities."
        }
      ],
      team: "1 Scrum Master, 1 Product Owner, 1 Tech Lead, 1 Business Analyst, 1 Tester, 4 Developers",
      missions: [
        "Application creation and redesign",
        "Development of REST APIs with Spring Boot 3 & Java 21",
        "Development of user interfaces in Angular 17 & 18",
        "Unit testing (back and front) to ensure code quality (JUnit, Mockito, Jest)",
        "Integration and regression testing (BDD with Cucumber)",
        "Preparation of deliverables and technical documentation",
        "Code refactoring to improve performance and maintainability",
        "Analysis and estimation"
      ],
      technologies: "Java 17, 21; Spring Boot 3; Angular 17, 18; Chart.js; Liquibase; PostgreSQL; MSSQL; Swagger; Maven; SonarQube; Git; Bitbucket; Jenkins; Cloudbees; Docker; Kubernetes; Rancher; ArgoCD; Private Cloud; Confluence; Scrum"
    },
  
    {
      company: "CGI",
      client: "BNP Paribas",
      role: "IT Engineer",
      period: "March 2022 – March 2024",
      location: "Casablanca",
      intro: "I contributed to two major projects for BNP Paribas, combining maintenance, migration, and evolution of strategic applications.",
      projects: [
        {
          label: "Project 1: Maintenance and migration of the Conseil BPF application",
          desc: "Conseil BPF is an application that enables banking advisors to propose tailored financial recommendations to clients (investments, insurance, savings). It was based on Java batch jobs and Spring MVC web services. I took part in its maintenance and then its migration to a cloud architecture—introducing Spring Boot, Spring Batch, Docker, and Kubernetes—to ensure better performance and scalability."
        },
        {
          label: "Project 2: Maintenance and evolution of NeoLink (international, English-speaking context)",
          desc: "NeoLink is BNP Paribas Securities Services’ online portal, offering clients centralized access to financial services (asset management, treasury, market updates, reporting, etc.). I worked on maintenance, production bug-fixes, and the development of new features to optimize the platform."
        }
      ],
      team: "1 Scrum Master, 1 Tech Lead, 1 Product Owner, 2 Business Analysts/QA, 5 Developers",
      missions: [
        "Application development and enhancement",
        "Migration to Java (8 → 17 → 21), Spring Boot (2.3 → 3.2), Angular (9 → 14)",
        "Development of REST APIs and Angular interfaces",
        "Code refactoring and optimization",
        "Unit and integration testing",
        "Production releases & validation",
        "Analysis and estimation of enhancements"
      ],
      technologies: "Java 8, 17/21; Spring MVC; Spring Boot; Spring Batch; Angular; Maven; Gradle; DDD; Jenkins; Git; GitLab; OracleDB; PostgreSQL; SyBase; Liquibase; Cloud; Docker; Kubernetes; Linux; Bash; CI/CD"
    },
  
    {
      company: "LeRIF",
      client: "Internal",
      role: "IT Engineer (Apprenticeship)",
      period: "April 2020 – August 2021",
      location: "Paris",
      intro: "I contributed to two major projects as an apprentice at LeRIF, designing and developing internal applications based on a microservices architecture:",
      projects: [
        {
          label: "Project 1: Doctor/Patient Management Application (Doctolib-style)",
          desc: "Designed a solution to facilitate appointment scheduling, medical record management, and communication between patients and doctors. I helped implement a microservices architecture by splitting the system into modules (appointments, notifications, billing)."
        },
        {
          label: "Project 2: Human Resources Management Application",
          desc: "Developed an application centralizing employee management, leave tracking, training, and performance evaluation. I contributed to the design and development of the tool using a microservices approach to ensure flexibility and scalability."
        }
      ],
      team: "1 Scrum Master, 1 Tech Lead, 2 Business Analysts/QA, 4 Developers",
      missions: [
        "Participation in implementing the microservices architecture",
        "Design and development of REST APIs (Spring backend) and dynamic Angular interfaces",
        "Writing technical deliverables and working in agile mode (Scrum)"
      ],
      technologies: "Java/JEE; Spring; Angular; Chart.js; REST APIs; PostgreSQL; Eureka; Zuul; Microservices; Mail API; SMS API; JUnit; GitHub; Scrum"
    }
  ],  
  "resume.education.list":[
    {
      title: "Software engineer",
      place: "Mundiapolis University",
      year: "2019 – 2022",
      description: "Computer engineering cycle at Mundiapolis University in Casablanca. Graduated with honors."
    },
    {
      title: "Preparatory classes cycle",
      place: "Mundiapolis University",
      year: "2017 - 2019",
      description: "Integrated Preparatory Classes Cycle."
    },
    {
      title: "Baccalaureate in physical sciences",
      place: "Toundoute High School",
      year: "2017",
      description: "Bachelor of Physical Sciences."
    }
  ],
  "resume.projects.list": [
    {
      id: 2,
      title: 'Football Management API',
      description: 'A RESTful API for managing football teams, built with Spring Boot and related technologies.',
      image: '/static/portfolio/footbal1.png',
      category: 'web',
      codeUrl: 'https://github.com/ZakariaALLA/nice-equipe-football-api',
      technologies: ['Java 21', 'Spring boot 3.4.4', 'Spring security - JWT', 'Docker', 'Postgresql']
    },
    {
      id: 1,
      title: 'HRM-RIF',
      description: 'A human resources management system.',
      image: '/static/portfolio/hrmrif.PNG',
      category: 'web',
      technologies: ['Spring boot', 'Angular', 'Microservices', 'MySql']
    },
    {
      id: 3,
      title: 'DoctoRIF',
      description: 'DoctoRIF Helps Patients To Find their Doctors. This application allows to search doctors with different specialties in different locations.',
      image: '/static/portfolio/doctorifss.PNG',
      category: 'web',
      technologies: ['Java', 'Spring boot', 'Angular', 'Microservice', 'Spring cloud', 'Postgresql']
    },
    {
      id: 4,
      title: 'Clickshop',
      description: 'The CLICKSHOP project is an e-commerce website. CLICKSHOP will allow visitors to order and pay for products related to health and wellness.',
      image: '/static/portfolio/clickshopss.PNG',
      category: 'web',
      technologies: ['WordPress', 'WooCommerce', 'Elementor']
    },
    {
      id: 5,
      title: 'Cinema Hub',
      description: 'A web application to manage cinemas in different cities.',
      image: '/static/portfolio/cinemahubss.PNG',
      category: 'web',
      codeUrl: 'https://github.com/ZakariaALLA/GestionCinema-Angular-Spring-Thymleaf',
      technologies: ['Spring boot', 'Angular', 'Thymleaf', 'MySql']
    },
    {
      id: 6,
      title: 'Movie Platform',
      description: 'A web movie platform, responsive and intuitive, which uses filtering based onon content for recommendations.',
      image: '/static/portfolio/moviess.PNG',
      category: 'web',
      technologies: ['JavaScript', 'PHP', 'JQuery', 'Bootstrap', 'MySql']
    },
    {
      id: 7,
      title: 'Massroufi',
      description: 'A mobile application for managing the personnel budget "مصروفي تحت تصرفي".',
      image: '/static/portfolio/massroufiss.PNG',
      category: 'mobile',
      codeUrl: 'https://github.com/ZakariaALLA/MassroufiMobileDev',
      technologies: ['Flutter', 'Dart']
    },
    {
      id: 8,
      title: 'UTH Management',
      description: 'UTH Management is a small system that will allow the management of the UTH GROUPE company.',
      image: '/static/portfolio/gestionUthsh.PNG',
      category: 'desktop',
      technologies: ['Java 8', 'JavaFX']
    },
    {
      id: 9,
      title: 'I Offer For Free',
      description: 'I Offer for Free: A platform where generosity connects people.',
      image: '/static/portfolio/offreGratuite.PNG',
      category: 'web',
      technologies: ['JavaScript', 'php', 'Jquery', 'Bootstrap']
    },
  ],
  "resume.projectsdetails": [
    {
      "id": 2,
      "title": "Football Management API",
      "description": "A robust RESTful API for managing football teams, built with Spring Boot and cutting-edge technologies. It provides endpoints for creating, updating, and organizing teams, players, and match schedules. With integrated security through Spring Security and JWT, and scalable deployment using Docker and PostgreSQL, it offers a solid foundation for football-related applications or platforms.",
      "images": ["/static/portfolio/footbal1.png", "/static/portfolio/footbal2.png", "/static/portfolio/footbal3.png"],
      "technologies": ["Java 21", "Spring boot 3.4.4", "Spring security - JWT", "Docker", "Postgresql"]
    },
    {
      "id": 1,
      "title": "HRM-RIF",
      "description": "Creation of a human resources management system composed of two parts: a backend developed with Spring Boot and microservices, and a frontend built with Angular. The backend is organized according to a microservices architecture, while the frontend uses Angular for the user interface. The system includes several microservices: ConfigurationService, which manages the configuration files and connects to a Git repository; ServiceDiscovery, which monitors the status (up/down) of all microservices; ServiceGateway with Zuul, which acts as a proxy and serves as the main entry point to the application while also handling authentication; and UserManagement, dedicated to managing users such as HR directors, service agents, and employees within the HRManagement-RIF application.",
      "videoUrl": "/static/videos/Demo_HRMRIF_Zakaria_ALLA.mp4",
      "technologies": ["Java", "Spring Boot", "Angular", "PostgreSQL", "microservices", "API Nexmo"]
    },
    {
      "id": 3,
      "title": "DoctoRIF",
      "description": "DoctoRIF helps patients easily find doctors based on their specialties and locations. This intuitive application enables users to search for healthcare professionals across various fields, ensuring they receive the right medical care nearby. Developed with a robust backend using Java, Spring Boot, Microservices, and Spring Cloud, and a dynamic frontend with Angular, DoctoRIF guarantees a seamless, scalable, and efficient user experience, with PostgreSQL as the database solution.",
      "videoUrl": "/static/videos/DemoApplicationDoctorif.mp4",
      "technologies": ["Java", "Spring Boot", "Angular", "Microservices", "Spring Cloud", "PostgreSQL"]
    },
    {
      "id": 4,
      "title": "Clickshop",
      "description": "CLICKSHOP is an e-commerce website dedicated to offering a wide range of health and wellness products. Visitors can easily browse through the catalog, place orders, and securely complete purchases online. Developed using WordPress, WooCommerce, and Elementor, the platform ensures a responsive design, smooth navigation, and a powerful content management system, providing both customers and administrators with an optimal online shopping experience.",
      "videoUrl": "/static/videos/clickshopVF.mp4",
      "technologies": ["WordPress", "WooCommerce", "Elementor"]
    },
    {
      "id": 5,
      "title": "Cinema Hub",
      "description": "Cinema Hub is a web-based management system for cinemas located in various cities, allowing administrators to manage movie schedules, theater halls, and ticket bookings efficiently. Built with Spring Boot, Angular, Thymeleaf, and MySQL, this platform offers a reliable and intuitive interface for cinema operators, ensuring that both day-to-day operations and customer interactions are streamlined and optimized.",
      "images": ["/static/portfolio/frontOffice.png", "/static/portfolio/backOffice.png"],
      "technologies": ["Spring Boot", "Angular", "Thymeleaf", "MySQL"]
    },
    {
      "id": 6,
      "title": "Movie Platform",
      "description": "Movie Platform is a responsive and intuitive web application designed for movie enthusiasts to explore a wide range of films. It features advanced content filtering and recommendation systems to personalize user experiences. Developed using JavaScript, PHP, jQuery, Bootstrap, and MySQL, this platform ensures quick navigation, dynamic content presentation, and an enjoyable browsing environment for all users.",
      "videoUrl": "/static/videos/movies.mp4",
      "technologies": ["JavaScript", "PHP", "jQuery", "Bootstrap", "MySQL"]
    },
    {
      "id": 7,
      "title": "Massroufi",
      "description": "Massroufi is a mobile application created to help individuals manage their personal budget effectively, carrying the slogan 'مصروفي تحت تصرفي' meaning 'My expenses under my control.' Developed with Flutter and Dart, the app offers a clean, user-friendly interface for tracking income, expenses, and savings, empowering users to take control of their financial health from their smartphones.",
      "videoUrl": "/static/videos/massroufi.mp4",
      "technologies": ["Flutter", "Dart"]
    },
    {
      "id": 8,
      "title": "Gestion UTH",
      "description": "Gestion UTH is a lightweight desktop management system developed for the UTH GROUPE company to handle internal operations and resources more efficiently. Built with Java 8 and JavaFX, the application provides a straightforward interface for managing essential business processes, improving organizational productivity and decision-making.",
      "videoUrl": "/static/videos/gestionUTH.mp4",
      "technologies": ["Java 8", "JavaFX"]
    },
    {
      "id": 9,
      "title": "I Offer For Free",
      "description": "I Offer For Free is a web platform designed to connect people through generosity by allowing users to offer and receive goods or services for free. Developed with JavaScript, PHP, jQuery, and Bootstrap, the application promotes a community-driven environment where sharing and helping others is at the core, making the world a little more connected and compassionate.",
      "videoUrl": "/static/videos/offreGratuitement.mp4",
      "technologies": ["JavaScript", "PHP", "jQuery", "Bootstrap"]
    }  
  ],
  // Projects Section
  "projects.title": "My Projects",
  "projects.filter.all": "All",
  "projects.filter.web": "Web",
  "projects.filter.mobile": "Mobile",
  "projects.filter.desktop": "Desktop",
  "projects.viewDemo": "Live Demo",
  "projects.viewCode": "Source Code",
  
  // Contact Section
  "contact.title": "Contact Me",
  "contact.description": "Feel free to reach out for collaboration or any inquiries.",
  "contact.name": "Your Name",
  "contact.email": "Your Email",
  "contact.subject": "Subject",
  "contact.message": "Your Message",
  "contact.send": "Send Message",
  "contact.success": "Your message has been sent successfully!",
  "contact.error": "Oops! Something went wrong. Please try again.",
  
  // Footer
  "footer.rights": "All Rights Reserved",
  "footer.madeWith": "Made with",
  
  // Theme Toggle
  "theme.light": "Light Mode",
  "theme.dark": "Dark Mode",
  
  // Language Toggle
  "language.en": "English",
  "language.ar": "العربية",
  "projects.back": "Return"
};
