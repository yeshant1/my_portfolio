export const NAV_LINKS = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export const SKILLS = [
  { name: "Java", icon: "☕", level: 95, color: "#007396" },
  { name: "Spring Boot", icon: "🌱", level: 92, color: "#6DB33F" },
  { name: "Microservices", icon: "🔗", level: 90, color: "#0071C5" },
  { name: "React.js", icon: "⚛️", level: 80, color: "#61DAFB" },
  { name: "SQL & Databases", icon: "🗄️", level: 88, color: "#00758F" },
  { name: "AWS Cloud", icon: "☁️", level: 80, color: "#FF9900" },
  { name: "Spring AI & GenAI", icon: "🤖", level: 88, color: "#7C3AED" },
  { name: "Agentic AI & RAG", icon: "🧠", level: 85, color: "#8B5CF6" },
  { name: "Docker & DevOps", icon: "🐳", level: 86, color: "#2496ED" },
  { name: "Apache Kafka / RabbitMQ", icon: "📨", level: 82, color: "#39d353" },
];

export const TECH_BADGES = [
  ["Java", "SQL", "Python", "C++"],
  ["Spring Boot", "Spring Cloud", "Spring Security", "Spring AI", "LangChain"],
  ["Generative AI", "Agentic AI", "RAG", "LLM Integration"],
  ["AWS", "Docker", "Kubernetes", "OAuth 2.0", "JWT"],
  ["MySQL", "PostgreSQL", "Apache Kafka", "RabbitMQ"],
  ["Microservices", "RESTful APIs", "Agile", "Git", "Swagger"],
];

export const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Capgemini Technology Services India Limited",
    location: "Bangalore",
    period: "April 2025 – June 2025",
    type: "Internship",
    points: [
      "Designed and developed a Quiz Application using a microservices architecture by splitting the system into Authentication, Question, Quiz, Leaderboard, and Payment services.",
      "Implemented secure REST APIs using Spring Boot, Spring Security, API Gateway, and Netflix Eureka for centralized routing and service discovery.",
      "Built quiz and question management modules with complete CRUD functionality, integrated a real-time leaderboard, and added payment support for premium quiz access.",
      "Applied Spring AOP for cross-cutting concerns and developed responsive frontend using HTML and CSS.",
      "Collaborated with team members in an Agile environment to deliver a production-ready microservices application.",
    ],
    tags: ["Java", "Spring Boot", "Microservices", "Spring Security", "Netflix Eureka", "MySQL", "REST APIs"],
  },
  {
    role: "Java Full Stack Developer",
    company: "Capgemini Private Limited",
    location: "Pune",
    period: "July 2025 – Present",
    type: "Full-time",
    points: [
      "Monitored and contributed to the modernization of legacy Java applications by applying Domain-Driven Design (DDD) principles—bounded contexts, aggregates, entities, value objects, and domain services.",
      "Refactored tightly coupled legacy components into modular and maintainable services, reducing inter-module dependencies and improving long-term maintainability.",
      "Applied strategic DDD patterns such as context mapping and anti-corruption layers to facilitate integration between modernized modules and existing legacy systems.",
      "Developed AI-powered enterprise applications using Spring AI, LangChain, and Large Language Model (LLM) integrations to deliver intelligent automation.",
      "Designed evaluation and observability workflows for Agentic AI systems using LangFuse, structured logging, and OpenTelemetry tracing to monitor response quality, tool usage, and task accuracy.",
      "Built Agentic AI workflows with tool-calling capabilities and Excel harnesses, enabling AI agents to interact with external APIs, databases, and enterprise services through Model Context Protocol (MCP).",
      "Collaborated in Agile sprints with product owners, UI/UX designers, and QA teams to deliver features, perform code reviews, unit testing (JUnit 5), and defect resolution.",
    ],
    tags: ["Java", "Spring Boot", "DDD", "Spring AI", "LangChain", "LangFuse", "AWS", "Docker", "Microservices"],
  },
];

export const PROJECTS = [
  {
    key: "quiz",
    title: "Quiz Application",
    subtitle: "Microservices Learning Project",
    period: "Apr 2025 – June 2025",
    emoji: "🧠",
    gradient: "from-blue-500 to-cyan-600",
    glow: "#0891b2",
    desc: "Production-ready Quiz platform demonstrating microservices architecture with service discovery, API Gateway, and real-time leaderboard integration.",
    points: [
      "Designed and developed a Quiz Application using a microservices architecture by splitting the system into Authentication, Question, Quiz, Leaderboard, and Payment services.",
      "Implemented secure REST APIs using Spring Boot, Spring Security, API Gateway, and Netflix Eureka for centralized routing and service discovery.",
      "Built quiz and question management modules with complete CRUD functionality, integrated a real-time leaderboard, and added payment support for premium quiz access.",
      "Applied Spring AOP for cross-cutting concerns and developed responsive frontend using HTML and CSS.",
      "Collaborated with team members in an Agile environment to deliver a production-ready microservices application."
    ],
    metrics: [{ v: "5", l: "Microservices" }, { v: "Real-time", l: "Leaderboard" }, { v: "Payment", l: "Integration" }],
    tags: ["Java", "Spring Boot", "Microservices", "Spring Security", "Netflix Eureka", "MySQL", "REST APIs", "Agile"],
    github: "https://github.com/yeshant1/Quiz_App",
  },
  {
    key: "bank",
    title: "Bank Application",
    subtitle: "Production-Grade Microservices System",
    period: "Jan 2026 – Apr 2026",
    emoji: "🏦",
    gradient: "from-pink-500 to-purple-600",
    glow: "#ff006e",
    desc: "Highly scalable, event-driven banking platform architected with independent services, central configuration, and robust role-based security.",
    points: [
      "Architected 3 independent Microservices (Accounts, Loans, Cards) with centralized configuration management using Spring Cloud Config Server, reducing configuration drift across environments.",
      "Implemented service discovery using Eureka Server and API Gateway for routing, authentication, and cross-cutting concerns.",
      "Integrated RabbitMQ and Kafka for event-driven communication; containerized all services with Docker and Docker Compose for consistent and streamlined deployments.",
      "Applied circuit-breaker resilience patterns; configured Prometheus and Grafana observability dashboards monitoring 10+ service health metrics in real time.",
      "Secured inter-service communication using OAuth2 with JWT and Keycloak, implementing role-based access control across all 3 microservices.",
      "Documented 20+ RESTful APIs using Swagger (OpenAPI) and validated all endpoints with Postman, achieving full API test coverage."
    ],
    metrics: [{ v: "3", l: "Microservices" }, { v: "10+", l: "Obs Metrics" }, { v: "20+", l: "APIs (Swagger)" }],
    tags: ["Java", "Spring Boot", "Microservices", "Spring Security", "Spring Cloud", "Docker", "Kafka", "RabbitMQ", "Prometheus", "Keycloak"],
    github: "https://github.com/yeshant1",
  },
  {
    key: "book",
    title: "E-Commerce Book Application",
    subtitle: "Full-Stack GenAI Integration",
    period: "Sep 2025 – Dec 2025",
    emoji: "📚",
    gradient: "from-purple-500 to-indigo-600",
    glow: "#8338ec",
    desc: "Full-stack e-commerce marketplace featuring secure payment integration, role-specific dashboards, and AI-powered customer support chatbot.",
    points: [
      "Built a full-stack Book Application using Java, Spring Boot, React.js, and MySQL with JWT-secured Microservices; integrated Razorpay for secure real-time payment processing and transaction management.",
      "Integrated MySQL for transactional data management and Cloudinary for storing and delivering book thumbnails, enabling efficient media handling and seamless content delivery.",
      "Designed efficient REST APIs and optimized database queries for reliable data retrieval and application performance.",
      "Developed role-specific dashboards with admin CRUD operations, ensuring controlled content management across 3 distinct user roles.",
      "Integrated an AI-powered chatbot using Spring AI, automating support responses and increasing user engagement.",
      "Documented 15+ RESTful APIs using Swagger; performed code reviews and delivered features in Agile sprints in collaboration with UI/UX and QA teams."
    ],
    metrics: [{ v: "Spring AI", l: "Support Chatbot" }, { v: "Razorpay", l: "Payments Gateway" }, { v: "3", l: "User Roles" }],
    tags: ["Java", "Spring Boot", "Spring AI", "React.js", "MySQL", "JWT", "Razorpay", "Cloudinary", "REST APIs"],
    github: "https://github.com/yeshant1",
  },
];

export const ACHIEVEMENTS = [
  { icon: "☁️", title: "AWS Certified Cloud Practitioner", sub: "CLF-C02 Certification — Dec 2025" },
  { icon: "🥇", title: "GATE 2023 AIR 1519", sub: "Score 357 in Mathematics (GATE MA)" },
  { icon: "⭐", title: "5-Star SQL Developer", sub: "HackerRank SQL Category" },
  { icon: "🐍", title: "Python Basics", sub: "Coding Ninjas Certification — Apr 2024" },
  { icon: "🗄️", title: "SQL Basic Certification", sub: "HackerRank — Aug 2024" },
];

export const SOCIAL_LINKS = [
  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/in/eshant-yadav" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/yeshant1" },
  { icon: "📧", label: "Email", href: "mailto:eshant.yadav7017@gmail.com" },
];
