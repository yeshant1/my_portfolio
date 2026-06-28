import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useMobile } from "../hooks/useMobile";

// Node description mappings for tooltips
const NODE_DESCRIPTIONS = {
  // Bookstore Application Nodes
  client_book: {
    title: "React.js Frontend",
    tech: "React 19 / CSS Custom Properties / Framer Motion",
    desc: "Provides a responsive user interface with dynamic page rendering, role-specific admin dashboards, and interactive Spring AI Chatbot elements."
  },
  gateway_book: {
    title: "Spring Cloud API Gateway",
    tech: "Spring Cloud Gateway / Reactive HTTP",
    desc: "Single entry point for the application. Coordinates API routing, load balancing, rate limiting, and handles cross-cutting security headers."
  },
  security_book: {
    title: "Spring Security & JWT",
    tech: "Spring Security / stateless JWT tokens",
    desc: "Secures downstream API endpoints. Extracts JWT headers from incoming HTTP requests, validates signatures, and maps roles for authorization."
  },
  user_book: {
    title: "User Service",
    tech: "Spring Boot / JPA / Hibernate",
    desc: "Manages user lifecycle, registration, authentication endpoints, and secure credentials using BCrypt encoder."
  },
  book_book: {
    title: "Book Catalog Service",
    tech: "Spring Boot / Hibernate / Cloudinary SDK",
    desc: "Maintains catalog metadata and book listings. Integrates with Cloudinary to handle secure image upload, storage, and optimization."
  },
  order_book: {
    title: "Order Service",
    tech: "Spring Boot / JPA Transactions",
    desc: "Coordinates book purchase checkout pipelines. Manages transaction locking, cart verification, and invoice generation."
  },
  payment_book: {
    title: "Payment Service",
    tech: "Spring Boot / Razorpay SDK",
    desc: "Processes transactions securely in real-time. Communicates with Razorpay APIs, validates signatures, and logs payment success webhooks."
  },
  chatbot_book: {
    title: "AI Chatbot Service",
    tech: "Spring Boot / Spring AI",
    desc: "AI assistant endpoint. Handles chatbot queries, preserves conversational context, and handles conversational retrieval actions."
  },
  db_book: {
    title: "MySQL Database",
    tech: "MySQL Server / Spring Transaction Management",
    desc: "Provides transactional data storage with normalized schemas and indexed tables for books, users, orders, and payments."
  },
  cloudinary_book: {
    title: "Cloudinary Cloud Storage",
    tech: "Cloudinary REST API",
    desc: "Remote CDN storing book thumbnails. Delivers optimized images dynamically with low latency."
  },
  razorpay_book: {
    title: "Razorpay Payment Gateway",
    tech: "Razorpay API / Secure Checkout Webhooks",
    desc: "Enterprise payment gateway processing credit cards, UPI, and digital wallets, reporting status via secure cryptographic webhooks."
  },
  springai_book: {
    title: "Spring AI Integration",
    tech: "Spring AI API Client",
    desc: "Wraps LLM provider integrations, supplying system prompts, chat memory buffers, and enforcing structured JSON outputs."
  },
  llm_book: {
    title: "LLM Provider (OpenAI/Gemini)",
    tech: "REST / Streaming API Protocols",
    desc: "Large Language Model powering conversational intelligence, responding to user prompts with natural language."
  },

  // Quiz Application Nodes
  client_quiz: {
    title: "Quiz Frontend",
    tech: "HTML / CSS / React.js",
    desc: "Provides the quiz UI, question rendering, leaderboard display, and premium access flow for learners."
  },
  gateway_quiz: {
    title: "Spring Cloud API Gateway",
    tech: "Spring Cloud Gateway / Routing",
    desc: "Routes requests to the quiz microservices and centralizes authentication and service access."
  },
  security_quiz: {
    title: "Spring Security & JWT",
    tech: "Spring Security / JWT",
    desc: "Protects endpoints and validates secure access for users across the quiz platform."
  },
  eureka_quiz: {
    title: "Eureka Service Discovery",
    tech: "Netflix Eureka",
    desc: "Registers the microservices and enables dynamic discovery for the gateway and clients."
  },
  auth_quiz: {
    title: "Authentication Service",
    tech: "Spring Boot / Spring Security",
    desc: "Manages user register-login flows and secures access to quiz modules."
  },
  question_quiz: {
    title: "Question Service",
    tech: "Spring Boot / CRUD APIs",
    desc: "Handles question creation, update, retrieval, and quiz content management."
  },
  quiz_quiz: {
    title: "Quiz Service",
    tech: "Spring Boot / REST APIs",
    desc: "Coordinates quiz sessions, score generation, and learner progression workflows."
  },
  leaderboard_quiz: {
    title: "Leaderboard Service",
    tech: "Spring Boot / Real-time Data",
    desc: "Tracks rankings and provides real-time leaderboard updates during quiz participation."
  },
  payment_quiz: {
    title: "Payment Service",
    tech: "Spring Boot / Premium Access",
    desc: "Handles premium quiz access and payment-related workflow for upgraded features."
  },
  db_auth_quiz: {
    title: "MySQL DB (Auth)",
    tech: "MySQL / Isolated Schema",
    desc: "Stores user credentials, registration details, profiles, and role mappings for secure token issuance."
  },
  db_question_quiz: {
    title: "MySQL DB (Question)",
    tech: "MySQL / Isolated Schema",
    desc: "Maintains the complete repository of questions, options, correct answers, and categorizations."
  },
  db_quiz_quiz: {
    title: "MySQL DB (Quiz)",
    tech: "MySQL / Isolated Schema",
    desc: "Manages active quiz sessions, user responses, history, and generated scores."
  },
  db_leaderboard_quiz: {
    title: "MySQL DB (Leaderboard)",
    tech: "MySQL / Isolated Schema",
    desc: "Stores ranking logs, high scores, dynamic leaderboard data, and historical user performances."
  },
  stripe_quiz: {
    title: "Stripe Payment Gateway",
    tech: "Stripe API / Webhooks",
    desc: "Handles secure checkouts, subscription states, and dynamic webhooks for premium quiz packages."
  },

  // Bank Application Nodes
  client_bank: {
    title: "React.js Web App",
    tech: "React.js / Tailwinds CSS / Axios",
    desc: "Fintech client portal. Displays account balances, transaction logs, loan status, and cards dashboards in real-time."
  },
  gateway_bank: {
    title: "Spring Cloud API Gateway",
    tech: "Spring Cloud Gateway / Actuator Observability",
    desc: "Central gateway managing routing to core microservices. Integrates with Eureka service discovery for client-side load balancing."
  },
  keycloak_bank: {
    title: "Keycloak OAuth2 / JWT Auth",
    tech: "Keycloak IAM / OpenID Connect (OIDC)",
    desc: "Identity Provider. Issues secure, cryptographically signed JWT tokens and manages client credentials, roles, and session timeouts."
  },
  accounts_bank: {
    title: "Accounts Microservice",
    tech: "Spring Boot / Spring Cloud Config client",
    desc: "Fintech accounts ledger. Manages user balances, deposits, and coordinates transaction streams through Kafka messaging."
  },
  loans_bank: {
    title: "Loans Microservice",
    tech: "Spring Boot / JPA Query Optimization",
    desc: "Coordinates loan status, eligibility checks, monthly EMI calculations, and outstanding amortization tables."
  },
  cards_bank: {
    title: "Cards Microservice",
    tech: "Spring Boot / Spring Security",
    desc: "Manages credit/debit card transactions, limits adjustments, status blockings, and logs processing details."
  },
  db1_bank: {
    title: "MySQL DB (Accounts)",
    tech: "MySQL / Isolated Schema",
    desc: "Database containing account ledgers, user mappings, and transactions. Isolated per microservice pattern."
  },
  db2_bank: {
    title: "MySQL DB (Loans)",
    tech: "MySQL Database",
    desc: "Stores loan applications, approval logs, and payment schedules under structural transactional safety."
  },
  db3_bank: {
    title: "MySQL DB (Cards)",
    tech: "MySQL Database",
    desc: "Database containing card credentials, configuration settings, limits, and transactions log."
  },
  kafka_bank: {
    title: "Kafka / RabbitMQ Broker",
    tech: "Apache Kafka Clusters / Spring Kafka template",
    desc: "Asynchronous messaging backbone. Broadcasts events (e.g., balance updates) between isolated microservices to maintain eventual consistency."
  },
  springai_bank: {
    title: "Spring AI Agentic Tools",
    tech: "Spring AI / Model Context Protocol (MCP)",
    desc: "Autonomous AI Agent. Utilizes tool-calling capability to securely query database ledgers and invoke external actions based on chat intent."
  },
  tools_bank: {
    title: "MCP Functions & Databases",
    tech: "MCP server tools",
    desc: "Database triggers, ledger routines, and transactional tools securely registered for autonomous execution by the AI agent."
  }
};

// Connections mapping for highlighting paths
const BOOK_CONNECTIONS = {
  client: ["gateway"],
  gateway: ["client", "security", "user", "book", "order", "payment", "chatbot"],
  security: ["gateway"],
  user: ["gateway", "db"],
  book: ["gateway", "db", "cloudinary"],
  order: ["gateway", "db"],
  payment: ["gateway", "db", "razorpay"],
  chatbot: ["gateway", "springai"],
  db: ["user", "book", "order", "payment"],
  cloudinary: ["book"],
  razorpay: ["payment"],
  springai: ["chatbot", "llm"],
  llm: ["springai"]
};

const QUIZ_CONNECTIONS = {
  client: ["gateway"],
  gateway: ["client", "security", "eureka", "auth", "question", "quiz", "leaderboard", "payment"],
  security: ["gateway"],
  eureka: ["gateway", "auth", "question", "quiz", "leaderboard", "payment"],
  auth: ["gateway", "db_auth", "eureka"],
  question: ["gateway", "db_question", "eureka"],
  quiz: ["gateway", "db_quiz", "eureka"],
  leaderboard: ["gateway", "db_leaderboard", "eureka"],
  payment: ["gateway", "stripe", "eureka"],
  db_auth: ["auth"],
  db_question: ["question"],
  db_quiz: ["quiz"],
  db_leaderboard: ["leaderboard"],
  stripe: ["payment"]
};

const BANK_CONNECTIONS = {
  client: ["gateway"],
  gateway: ["client", "keycloak", "accounts", "loans", "cards"],
  keycloak: ["gateway"],
  accounts: ["gateway", "db1", "kafka", "springai"],
  loans: ["gateway", "db2", "kafka"],
  cards: ["gateway", "db3", "kafka"],
  db1: ["accounts"],
  db2: ["loans"],
  db3: ["cards"],
  kafka: ["accounts", "loans", "cards"],
  springai: ["accounts", "tools"],
  tools: ["springai"]
};

export function ArchitectureDiagram({ projectKey }) {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const [hoveredNode, setHoveredNode] = useState(null);

  const isBook = projectKey === "book";
  const isQuiz = projectKey === "quiz";
  const connections = isBook ? BOOK_CONNECTIONS : isQuiz ? QUIZ_CONNECTIONS : BANK_CONNECTIONS;

  const isHighlighted = (nodeId) => {
    if (!hoveredNode) return false;
    if (hoveredNode === nodeId) return true;
    return connections[hoveredNode]?.includes(nodeId) || false;
  };

  const isPathHighlighted = (from, to) => {
    if (!hoveredNode) return false;
    return (
      (hoveredNode === from && connections[from]?.includes(to)) ||
      (hoveredNode === to && connections[to]?.includes(from))
    );
  };

  const currentDesc = hoveredNode ? NODE_DESCRIPTIONS[`${hoveredNode}_${projectKey}`] : null;

  // Custom node styling based on active/inactive states
  const getNodeStyle = (nodeId, color) => {
    const active = isHighlighted(nodeId);
    const hasHover = hoveredNode !== null;
    return {
      border: `1.5px solid ${active ? color : hasHover ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.2)"}`,
      background: active ? `${color}14` : "rgba(15, 8, 30, 0.7)",
      boxShadow: active ? `0 0 20px ${color}33, inset 0 0 10px ${color}1a` : "none",
      color: active ? "#ffffff" : hasHover ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.8)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      fontSize: "11px",
      fontWeight: "600",
      textAlign: "center",
      cursor: "pointer",
      padding: "6px 8px",
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      userSelect: "none",
    };
  };

  const getPathProps = (from, to) => {
    const active = isPathHighlighted(from, to);
    return {
      stroke: active ? theme.primary : "rgba(255, 255, 255, 0.15)",
      strokeWidth: active ? 2.5 : 1.5,
      strokeDasharray: active ? "none" : "none",
      markerEnd: `url(#arrow-${projectKey}-${active ? "active" : "inactive"})`,
      transition: "stroke 0.3s, stroke-width 0.3s",
      className: active ? "flow-path-animated" : "",
    };
  };

  const getDottedPathProps = (from, to) => {
    const active = isPathHighlighted(from, to);
    return {
      stroke: active ? theme.accent : "rgba(255, 255, 255, 0.15)",
      strokeWidth: active ? 2.5 : 1.5,
      strokeDasharray: "4 4",
      markerEnd: `url(#arrow-dotted-${projectKey}-${active ? "active" : "inactive"})`,
      transition: "stroke 0.3s, stroke-width 0.3s",
      className: active ? "flow-path-animated" : "",
    };
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        marginTop: "24px",
      }}
    >
      {/* Interactive Legend Banner */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "12px" : "0",
          fontSize: "11px",
          color: theme.textMuted,
          padding: "8px 16px",
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${theme.borderColor}`,
          borderRadius: "8px",
          fontFamily: "Fira Code, monospace",
        }}
      >
        <span>{isMobile ? "💡 Tap nodes to inspect flow pathways" : "💡 Hover over nodes to inspect flow pathways"}</span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: isMobile ? "6px 12px" : "12px",
          }}
        >
          <span><span style={{ color: "#00f5ff" }}>■</span> Client</span>
          <span><span style={{ color: "#8338ec" }}>■</span> Gateway</span>
          <span><span style={{ color: "#ff006e" }}>■</span> Services</span>
          <span><span style={{ color: "#00e676" }}>■</span> Databases</span>
          <span><span style={{ color: "#ffbe0b" }}>■</span> AI Engine</span>
        </div>
      </div>

      {/* SVG Canvas for Diagrams */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflowX: "auto",
          background: "rgba(10, 5, 25, 0.4)",
          border: `1px solid ${theme.borderColor}`,
          borderRadius: "12px",
          padding: "10px",
        }}
      >
        {isBook ? (
          /* E-COMMERCE BOOKSTORE DIAGRAM */
          <svg viewBox="0 0 800 500" style={{ width: "100%", minWidth: "750px", display: "block" }}>
            <defs>
              <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              {/* Arrow definitions */}
              <marker id="arrow-book-active" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill={theme.primary} />
              </marker>
              <marker id="arrow-book-inactive" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255, 255, 255, 0.15)" />
              </marker>
            </defs>

            {/* FLOW LINES / PATHS */}
            <g id="paths">
              {/* Client -> Gateway */}
              <path d="M 400 65 L 400 95" {...getPathProps("client", "gateway")} />
              {/* Gateway <-> Security */}
              <path d="M 380 117 L 420 117" {...getPathProps("gateway", "security")} />
              
              {/* Gateway -> Services */}
              <path d="M 290 140 C 290 160, 85 150, 85 180" {...getPathProps("gateway", "user")} />
              <path d="M 290 140 C 290 165, 240 160, 240 180" {...getPathProps("gateway", "book")} />
              <path d="M 290 140 C 290 170, 395 160, 395 180" {...getPathProps("gateway", "order")} />
              <path d="M 290 140 C 290 165, 550 160, 550 180" {...getPathProps("gateway", "payment")} />
              <path d="M 290 140 C 290 160, 705 150, 705 180" {...getPathProps("gateway", "chatbot")} />

              {/* Services -> MySQL DB */}
              <path d="M 85 235 C 85 270, 320 260, 320 300" {...getPathProps("user", "db")} />
              <path d="M 240 235 C 240 270, 360 260, 360 300" {...getPathProps("book", "db")} />
              <path d="M 395 235 C 395 270, 440 260, 440 300" {...getPathProps("order", "db")} />
              <path d="M 550 235 C 550 270, 480 260, 480 300" {...getPathProps("payment", "db")} />

              {/* Services -> Cloudinary */}
              <path d="M 220 235 L 220 300" {...getPathProps("book", "cloudinary")} />
              
              {/* Services -> Razorpay */}
              <path d="M 550 235 L 550 300" {...getPathProps("payment", "razorpay")} />
              
              {/* Services -> Spring AI */}
              <path d="M 705 235 L 705 300" {...getPathProps("chatbot", "springai")} />
              
              {/* Spring AI -> LLM */}
              <path d="M 705 355 L 705 395" {...getPathProps("springai", "llm")} />
            </g>

            {/* INTERACTIVE NODES */}
            {/* ROW 1: Client */}
            <foreignObject x="300" y="20" width="200" height="45">
              <div
                style={getNodeStyle("client", "#00f5ff")}
                onMouseEnter={() => setHoveredNode("client")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                💻 React.js Frontend
              </div>
            </foreignObject>

            {/* ROW 2: Gateway & Security */}
            <foreignObject x="190" y="95" width="190" height="45">
              <div
                style={getNodeStyle("gateway", "#8338ec")}
                onMouseEnter={() => setHoveredNode("gateway")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                ⚡ API Gateway (Cloud)
              </div>
            </foreignObject>
            <foreignObject x="420" y="95" width="190" height="45">
              <div
                style={getNodeStyle("security", "#8338ec")}
                onMouseEnter={() => setHoveredNode("security")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🔐 Spring Security (JWT)
              </div>
            </foreignObject>

            {/* ROW 3: Microservices */}
            <foreignObject x="20" y="180" width="130" height="55">
              <div
                style={getNodeStyle("user", "#ff006e")}
                onMouseEnter={() => setHoveredNode("user")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                User Service
              </div>
            </foreignObject>
            <foreignObject x="175" y="180" width="130" height="55">
              <div
                style={getNodeStyle("book", "#ff006e")}
                onMouseEnter={() => setHoveredNode("book")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                Book Catalog
              </div>
            </foreignObject>
            <foreignObject x="330" y="180" width="130" height="55">
              <div
                style={getNodeStyle("order", "#ff006e")}
                onMouseEnter={() => setHoveredNode("order")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                Order Service
              </div>
            </foreignObject>
            <foreignObject x="485" y="180" width="130" height="55">
              <div
                style={getNodeStyle("payment", "#ff006e")}
                onMouseEnter={() => setHoveredNode("payment")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                Payment Service
              </div>
            </foreignObject>
            <foreignObject x="640" y="180" width="130" height="55">
              <div
                style={getNodeStyle("chatbot", "#ff006e")}
                onMouseEnter={() => setHoveredNode("chatbot")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                AI Chatbot Service
              </div>
            </foreignObject>

            {/* ROW 4: Integrations & DBs */}
            <foreignObject x="175" y="300" width="100" height="55">
              <div
                style={getNodeStyle("cloudinary", "#00e676")}
                onMouseEnter={() => setHoveredNode("cloudinary")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                ☁️ Cloudinary
              </div>
            </foreignObject>
            <foreignObject x="295" y="300" width="210" height="55">
              <div
                style={getNodeStyle("db", "#00e676")}
                onMouseEnter={() => setHoveredNode("db")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🗄️ MySQL Database (Shared)
              </div>
            </foreignObject>
            <foreignObject x="525" y="300" width="100" height="55">
              <div
                style={getNodeStyle("razorpay", "#00e676")}
                onMouseEnter={() => setHoveredNode("razorpay")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                💳 Razorpay
              </div>
            </foreignObject>
            <foreignObject x="640" y="300" width="130" height="55">
              <div
                style={getNodeStyle("springai", "#ffbe0b")}
                onMouseEnter={() => setHoveredNode("springai")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🤖 Spring AI Client
              </div>
            </foreignObject>

            {/* ROW 5: LLM */}
            <foreignObject x="640" y="395" width="130" height="45">
              <div
                style={getNodeStyle("llm", "#ffbe0b")}
                onMouseEnter={() => setHoveredNode("llm")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🧠 LLM Provider
              </div>
            </foreignObject>
          </svg>
        ) : isQuiz ? (
          /* QUIZ APPLICATION MICROSERVICES DIAGRAM */
          <svg viewBox="0 0 900 380" style={{ width: "100%", minWidth: "850px", display: "block" }}>
            <defs>
              <marker id="arrow-quiz-active" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill={theme.primary} />
              </marker>
              <marker id="arrow-quiz-inactive" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255, 255, 255, 0.15)" />
              </marker>
              <marker id="arrow-dotted-quiz-active" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill={theme.accent} />
              </marker>
              <marker id="arrow-dotted-quiz-inactive" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255, 255, 255, 0.15)" />
              </marker>
            </defs>

            <g id="paths">
              {/* Client -> Gateway */}
              <path d="M 450 65 L 450 95" {...getPathProps("client", "gateway")} />
              
              {/* Gateway <-> Security / Eureka */}
              <path d="M 350 117 L 300 117" {...getPathProps("gateway", "security")} />
              <path d="M 550 117 L 600 117" {...getPathProps("gateway", "eureka")} />
              
              {/* Gateway -> Services */}
              <path d="M 450 140 C 450 170, 90 160, 90 190" {...getPathProps("gateway", "auth")} />
              <path d="M 450 140 C 450 170, 270 160, 270 190" {...getPathProps("gateway", "question")} />
              <path d="M 450 140 L 450 190" {...getPathProps("gateway", "quiz")} />
              <path d="M 450 140 C 450 170, 630 160, 630 190" {...getPathProps("gateway", "leaderboard")} />
              <path d="M 450 140 C 450 170, 810 160, 810 190" {...getPathProps("gateway", "payment")} />
              
              {/* Eureka -> Services (Dotted registration) */}
              <path d="M 700 140 C 700 175, 90 165, 90 190" {...getDottedPathProps("eureka", "auth")} />
              <path d="M 700 140 C 700 175, 270 165, 270 190" {...getDottedPathProps("eureka", "question")} />
              <path d="M 700 140 C 700 175, 450 165, 450 190" {...getDottedPathProps("eureka", "quiz")} />
              <path d="M 700 140 C 700 175, 630 165, 630 190" {...getDottedPathProps("eureka", "leaderboard")} />
              <path d="M 700 140 C 700 175, 810 165, 810 190" {...getDottedPathProps("eureka", "payment")} />

              {/* Services -> Databases / Stripe */}
              <path d="M 90 245 L 90 300" {...getPathProps("auth", "db_auth")} />
              <path d="M 270 245 L 270 300" {...getPathProps("question", "db_question")} />
              <path d="M 450 245 L 450 300" {...getPathProps("quiz", "db_quiz")} />
              <path d="M 630 245 L 630 300" {...getPathProps("leaderboard", "db_leaderboard")} />
              <path d="M 810 245 L 810 300" {...getPathProps("payment", "stripe")} />
            </g>

            {/* ROW 1: Client */}
            <foreignObject x="350" y="20" width="200" height="45">
              <div style={getNodeStyle("client", "#00f5ff")} onMouseEnter={() => setHoveredNode("client")} onMouseLeave={() => setHoveredNode(null)}>
                💻 Quiz Frontend
              </div>
            </foreignObject>

            {/* ROW 2: Gateway & Security & Eureka */}
            <foreignObject x="100" y="95" width="200" height="45">
              <div style={getNodeStyle("security", "#8338ec")} onMouseEnter={() => setHoveredNode("security")} onMouseLeave={() => setHoveredNode(null)}>
                🔐 Spring Security
              </div>
            </foreignObject>
            <foreignObject x="350" y="95" width="200" height="45">
              <div style={getNodeStyle("gateway", "#8338ec")} onMouseEnter={() => setHoveredNode("gateway")} onMouseLeave={() => setHoveredNode(null)}>
                ⚡ API Gateway
              </div>
            </foreignObject>
            <foreignObject x="600" y="95" width="200" height="45">
              <div style={getNodeStyle("eureka", "#ffbe0b")} onMouseEnter={() => setHoveredNode("eureka")} onMouseLeave={() => setHoveredNode(null)}>
                🔎 Eureka Discovery
              </div>
            </foreignObject>

            {/* ROW 3: Microservices */}
            <foreignObject x="20" y="190" width="140" height="55">
              <div style={getNodeStyle("auth", "#ff006e")} onMouseEnter={() => setHoveredNode("auth")} onMouseLeave={() => setHoveredNode(null)}>
                Auth Service
              </div>
            </foreignObject>
            <foreignObject x="200" y="190" width="140" height="55">
              <div style={getNodeStyle("question", "#ff006e")} onMouseEnter={() => setHoveredNode("question")} onMouseLeave={() => setHoveredNode(null)}>
                Question Service
              </div>
            </foreignObject>
            <foreignObject x="380" y="190" width="140" height="55">
              <div style={getNodeStyle("quiz", "#ff006e")} onMouseEnter={() => setHoveredNode("quiz")} onMouseLeave={() => setHoveredNode(null)}>
                Quiz Service
              </div>
            </foreignObject>
            <foreignObject x="560" y="190" width="140" height="55">
              <div style={getNodeStyle("leaderboard", "#ff006e")} onMouseEnter={() => setHoveredNode("leaderboard")} onMouseLeave={() => setHoveredNode(null)}>
                Leaderboard Service
              </div>
            </foreignObject>
            <foreignObject x="740" y="190" width="140" height="55">
              <div style={getNodeStyle("payment", "#ff006e")} onMouseEnter={() => setHoveredNode("payment")} onMouseLeave={() => setHoveredNode(null)}>
                Payment Service
              </div>
            </foreignObject>

            {/* ROW 4: Databases & Stripe */}
            <foreignObject x="20" y="300" width="140" height="50">
              <div style={getNodeStyle("db_auth", "#00e676")} onMouseEnter={() => setHoveredNode("db_auth")} onMouseLeave={() => setHoveredNode(null)}>
                🗄️ MySQL DB (Auth)
              </div>
            </foreignObject>
            <foreignObject x="200" y="300" width="140" height="50">
              <div style={getNodeStyle("db_question", "#00e676")} onMouseEnter={() => setHoveredNode("db_question")} onMouseLeave={() => setHoveredNode(null)}>
                🗄️ MySQL DB (Ques)
              </div>
            </foreignObject>
            <foreignObject x="380" y="300" width="140" height="50">
              <div style={getNodeStyle("db_quiz", "#00e676")} onMouseEnter={() => setHoveredNode("db_quiz")} onMouseLeave={() => setHoveredNode(null)}>
                🗄️ MySQL DB (Quiz)
              </div>
            </foreignObject>
            <foreignObject x="560" y="300" width="140" height="50">
              <div style={getNodeStyle("db_leaderboard", "#00e676")} onMouseEnter={() => setHoveredNode("db_leaderboard")} onMouseLeave={() => setHoveredNode(null)}>
                🗄️ MySQL DB (Ldr)
              </div>
            </foreignObject>
            <foreignObject x="740" y="300" width="140" height="50">
              <div style={getNodeStyle("stripe", "#ffbe0b")} onMouseEnter={() => setHoveredNode("stripe")} onMouseLeave={() => setHoveredNode(null)}>
                💳 Stripe Gateway
              </div>
            </foreignObject>
          </svg>
        ) : (
          /* BANKING MICROSERVICES DIAGRAM */
          <svg viewBox="0 0 800 580" style={{ width: "100%", minWidth: "750px", display: "block" }}>
            <defs>
              <marker id="arrow-bank-active" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill={theme.primary} />
              </marker>
              <marker id="arrow-bank-inactive" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255, 255, 255, 0.15)" />
              </marker>
              <marker id="arrow-dotted-bank-active" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill={theme.accent} />
              </marker>
              <marker id="arrow-dotted-bank-inactive" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255, 255, 255, 0.15)" />
              </marker>
            </defs>

            {/* FLOW LINES / PATHS */}
            <g id="paths">
              {/* Client -> Gateway */}
              <path d="M 400 65 L 400 95" {...getPathProps("client", "gateway")} />
              {/* Gateway <-> Keycloak */}
              <path d="M 380 117 L 420 117" {...getPathProps("gateway", "keycloak")} />

              {/* Gateway -> Services */}
              <path d="M 290 140 C 290 160, 160 155, 160 180" {...getPathProps("gateway", "accounts")} />
              <path d="M 290 140 C 290 165, 400 160, 400 180" {...getPathProps("gateway", "loans")} />
              <path d="M 290 140 C 290 160, 640 155, 640 180" {...getPathProps("gateway", "cards")} />

              {/* Services -> DBs */}
              <path d="M 160 235 L 160 285" {...getPathProps("accounts", "db1")} />
              <path d="M 400 235 L 400 285" {...getPathProps("loans", "db2")} />
              <path d="M 640 235 L 640 285" {...getPathProps("cards", "db3")} />

              {/* Broker <-> Services */}
              <path d="M 160 330 L 160 375" {...getPathProps("accounts", "kafka")} />
              <path d="M 400 330 L 400 375" {...getPathProps("loans", "kafka")} />
              <path d="M 640 330 L 640 375" {...getPathProps("cards", "kafka")} />

              {/* Accounts -> Spring AI Agent */}
              <path d="M 120 235 C 120 255, 40 260, 40 450 C 40 480, 80 480, 80 480" {...getDottedPathProps("accounts", "springai")} />

              {/* Spring AI Agent -> Tools */}
              <path d="M 260 497 L 320 497" {...getDottedPathProps("springai", "tools")} />
            </g>

            {/* INTERACTIVE NODES */}
            {/* ROW 1: Client */}
            <foreignObject x="300" y="20" width="200" height="45">
              <div
                style={getNodeStyle("client", "#00f5ff")}
                onMouseEnter={() => setHoveredNode("client")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                💻 React.js Web App
              </div>
            </foreignObject>

            {/* ROW 2: Gateway & Keycloak */}
            <foreignObject x="190" y="95" width="190" height="45">
              <div
                style={getNodeStyle("gateway", "#8338ec")}
                onMouseEnter={() => setHoveredNode("gateway")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                ⚡ Spring Cloud Gateway
              </div>
            </foreignObject>
            <foreignObject x="420" y="95" width="190" height="45">
              <div
                style={getNodeStyle("keycloak", "#8338ec")}
                onMouseEnter={() => setHoveredNode("keycloak")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🔑 Keycloak OIDC Provider
              </div>
            </foreignObject>

            {/* ROW 3: Microservices */}
            <foreignObject x="80" y="180" width="160" height="55">
              <div
                style={getNodeStyle("accounts", "#ff006e")}
                onMouseEnter={() => setHoveredNode("accounts")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                Accounts Service
              </div>
            </foreignObject>
            <foreignObject x="320" y="180" width="160" height="55">
              <div
                style={getNodeStyle("loans", "#ff006e")}
                onMouseEnter={() => setHoveredNode("loans")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                Loans Service
              </div>
            </foreignObject>
            <foreignObject x="560" y="180" width="160" height="55">
              <div
                style={getNodeStyle("cards", "#ff006e")}
                onMouseEnter={() => setHoveredNode("cards")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                Cards Service
              </div>
            </foreignObject>

            {/* ROW 4: Databases */}
            <foreignObject x="100" y="285" width="120" height="45">
              <div
                style={getNodeStyle("db1", "#00e676")}
                onMouseEnter={() => setHoveredNode("db1")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🗄️ MySQL DB (Accs)
              </div>
            </foreignObject>
            <foreignObject x="340" y="285" width="120" height="45">
              <div
                style={getNodeStyle("db2", "#00e676")}
                onMouseEnter={() => setHoveredNode("db2")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🗄️ MySQL DB (Loans)
              </div>
            </foreignObject>
            <foreignObject x="580" y="285" width="120" height="45">
              <div
                style={getNodeStyle("db3", "#00e676")}
                onMouseEnter={() => setHoveredNode("db3")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🗄️ MySQL DB (Cards)
              </div>
            </foreignObject>

            {/* ROW 5: Kafka Broker */}
            <foreignObject x="150" y="375" width="500" height="50">
              <div
                style={getNodeStyle("kafka", "#00e676")}
                onMouseEnter={() => setHoveredNode("kafka")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                📨 Kafka / RabbitMQ Event Streams (Broker)
              </div>
            </foreignObject>

            {/* ROW 6: AI Agents */}
            <foreignObject x="80" y="470" width="180" height="55">
              <div
                style={getNodeStyle("springai", "#ffbe0b")}
                onMouseEnter={() => setHoveredNode("springai")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                🧠 Spring AI Agents
              </div>
            </foreignObject>
            <foreignObject x="320" y="470" width="180" height="55">
              <div
                style={getNodeStyle("tools", "#ffbe0b")}
                onMouseEnter={() => setHoveredNode("tools")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                ⚙️ MCP DB Tools
              </div>
            </foreignObject>
          </svg>
        )}
      </div>

      {/* NODE DETAILS HUD CARD */}
      <div
        style={{
          minHeight: "100px",
          background: "rgba(10, 5, 20, 0.7)",
          border: `1px solid ${hoveredNode ? theme.primary : theme.borderColor}`,
          borderRadius: "12px",
          padding: "16px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          backdropFilter: "blur(10px)",
          boxShadow: hoveredNode ? `0 4px 20px ${theme.primary}22` : "none",
          transition: "all 0.3s ease",
        }}
      >
        {currentDesc ? (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {currentDesc.title}
              </h4>
              <span
                style={{
                  fontSize: "11px",
                  color: theme.primary,
                  fontFamily: "Fira Code, monospace",
                  fontWeight: "600",
                }}
              >
                {currentDesc.tech}
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {currentDesc.desc}
            </p>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              minHeight: "68px",
              color: theme.textMuted,
              fontSize: "13px",
              fontStyle: "italic",
            }}
          >
            Hover over any component block to inspect technical architecture details.
          </div>
        )}
      </div>
    </div>
  );
}
