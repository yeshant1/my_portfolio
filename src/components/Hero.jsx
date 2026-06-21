import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function TypeWriter({ words }) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const word = words[wi];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(word.slice(0, ci + 1));
        if (ci + 1 === word.length) setTimeout(() => setDel(true), 1500);
        else setCi(ci + 1);
      } else {
        setDisplay(word.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDel(false);
          setWi((wi + 1) % words.length);
          setCi(0);
        } else setCi(ci - 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [ci, del, wi, words]);

  return (
    <span
      style={{
        background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {display}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{
          opacity: 1,
          WebkitTextFillColor: theme.primary,
        }}
      >
        |
      </motion.span>
    </span>
  );
}

const TERMINAL_DATA = [
  { text: "eshant@portfolio:~$ neofetch", type: "cmd", delay: 900 },
  { text: "OS: Java / Spring / React Ecosystem", type: "output", delay: 150 },
  { text: "Host: Capgemini Pune Enterprise Stack", type: "output", delay: 150 },
  { text: "Uptime: 1+ Years (since July 2025)", type: "output", delay: 150 },
  { text: "Shell: spring-ai-agentic-workflow", type: "output", delay: 150 },
  { text: "Metrics: ~35% dependency reduction", type: "success", delay: 250 },
  { text: "Observability: Prometheus / Grafana / LangFuse", type: "output", delay: 150 },
  { text: "eshant@portfolio:~$ ./run-agent.sh --eval", type: "cmd", delay: 1000 },
  { text: "[INFO] Active context: Bounded Context Modernization", type: "info", delay: 300 },
  { text: "[INFO] Resolving MCP tools for enterprise APIs...", type: "info", delay: 400 },
  { text: "[SUCCESS] Connected 3 Microservices securely via Keycloak.", type: "success", delay: 300 },
  { text: "[EVAL] Tracing metrics pushed to LangFuse successfully.", type: "success", delay: 400 },
  { text: "eshant@portfolio:~$ ", type: "cmd", delay: 2500 }
];

function MockTerminal() {
  const { theme } = useTheme();
  const [lines, setLines] = useState([]);

  useEffect(() => {
    let currentLine = 0;
    let timer;

    const printNextLine = () => {
      if (currentLine >= TERMINAL_DATA.length) {
        timer = setTimeout(() => {
          setLines([]);
          currentLine = 0;
          printNextLine();
        }, 3000);
        return;
      }

      const item = TERMINAL_DATA[currentLine];
      setLines(prev => [...prev, item]);
      currentLine++;
      timer = setTimeout(printNextLine, item.delay);
    };

    printNextLine();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        background: "rgba(10, 5, 25, 0.85)",
        border: `1px solid ${theme.primary}33`,
        borderRadius: "12px",
        boxShadow: `0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px ${theme.primary}10`,
        fontFamily: "'Fira Code', monospace",
        fontSize: "12px",
        color: "rgba(255, 255, 255, 0.85)",
        textAlign: "left",
        width: "100%",
        maxWidth: "420px",
        height: "230px",
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Title Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "8px 12px",
          background: "rgba(25, 10, 45, 0.6)",
          borderBottom: `1px solid ${theme.borderColor}`,
        }}
      >
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
        <span style={{ marginLeft: "10px", color: theme.textMuted, fontSize: "11px", fontWeight: "600" }}>bash - eshant_yadav</span>
      </div>

      {/* Code Area */}
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "5px", flexGrow: 1, overflowY: "hidden" }}>
        {lines.map((line, i) => (
          <div key={i} style={{ lineHeight: "1.4" }}>
            {line.type === "cmd" && (
              <span>
                <span style={{ color: theme.primary, fontWeight: "600" }}>{line.text.slice(0, 19)}</span>
                <span style={{ color: theme.secondary }}>{line.text.slice(19)}</span>
              </span>
            )}
            {line.type === "output" && <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>{line.text}</span>}
            {line.type === "info" && <span style={{ color: theme.secondary }}>{line.text}</span>}
            {line.type === "success" && <span style={{ color: "#39d353" }}>{line.text}</span>}
          </div>
        ))}
        {/* Blinking Cursor */}
        {lines.length > 0 && lines[lines.length - 1].type === "cmd" && (
          <div style={{ display: "inline-block", width: "7px", height: "12px", background: theme.primary, animation: "blink 1s step-end infinite" }} />
        )}
      </div>
    </div>
  );
}

export function Hero() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentLayout = isMobile ? (
    // Mobile Centered Layout
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
      {/* Profile Picture */}
      <motion.div
        variants={itemVariants}
        style={{
          position: "relative",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          overflow: "hidden",
          border: `3px solid ${theme.primary}`,
          boxShadow: `0 0 30px ${theme.primary}40, inset 0 0 30px ${theme.primary}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.cardBg,
        }}
      >
        <img
          src="./profile.jpg"
          alt="Eshant Yadav"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div style={{ fontSize: "70px", position: "absolute", zIndex: -1 }}>👨‍💼</div>
      </motion.div>

      {/* Badge */}
      <motion.div
        variants={itemVariants}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          borderRadius: "20px",
          border: `1px solid ${theme.borderColor}`,
          background: `${theme.primary}14`,
        }}
      >
        <motion.span
          animate={{ boxShadow: [`0 0 6px ${theme.primary}`, `0 0 12px ${theme.primary}`, `0 0 6px ${theme.primary}`] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: theme.primary,
          }}
        />
        <span
          style={{
            fontSize: "12px",
            color: theme.textMuted,
            fontFamily: "Fira Code, monospace",
            letterSpacing: "0.08em",
          }}
        >
          Available for Opportunities
        </span>
      </motion.div>

      {/* Intro Texts */}
      <div style={{ textAlign: "center" }}>
        <motion.div
          variants={itemVariants}
          style={{
            fontSize: "14px",
            color: theme.textMuted,
            marginBottom: "8px",
            fontFamily: "Fira Code,monospace",
            letterSpacing: "0.1em",
          }}
        >
          Hello, I'm
        </motion.div>
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(36px, 8vw, 54px)",
            fontWeight: "900",
            lineHeight: "1.1",
            marginBottom: "12px",
            fontFamily: "'Inter',sans-serif",
            color: theme.text,
            letterSpacing: "-0.02em",
          }}
        >
          Eshant Yadav
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: "clamp(18px, 4vw, 24px)",
            fontWeight: "700",
            marginBottom: "20px",
            fontFamily: "'Inter',sans-serif",
            minHeight: "40px",
          }}
        >
          <TypeWriter
            words={[
              "Java Full-Stack Developer",
              "Domain Driven Design (DDD) Architect",
            ]}
          />
        </motion.h2>
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "15px",
            color: theme.textMuted,
            maxWidth: "500px",
            margin: "0 auto 24px",
            lineHeight: "1.6",
          }}
        >
          Engineering intelligence into every layer of the stack — from Spring Boot microservices
          to Agentic AI pipelines at <span style={{ color: theme.primary, fontWeight: "600" }}>Capgemini, Pune</span>.
        </motion.p>
      </div>

      {/* Terminal */}
      <motion.div variants={itemVariants} style={{ width: "100%", padding: "0 10px" }}>
        <MockTerminal />
      </motion.div>

      {/* CTAs */}
      <motion.div
        variants={itemVariants}
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "12px",
        }}
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${theme.primary}40` }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px 28px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
            color: "#fff",
            textDecoration: "none",
            boxShadow: `0 4px 20px ${theme.primary}59`,
          }}
        >
          View My Work
        </motion.a>
        <motion.a
          href="/Eshant_Yadav_Resume.pdf"
          download="Eshant_Yadav_Resume.pdf"
          whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${theme.primary}50` }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px 28px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            background: "transparent",
            color: theme.primary,
            border: `2px solid ${theme.primary}`,
            textDecoration: "none",
            transition: "all 0.3s",
          }}
        >
          Download Resume 📄
        </motion.a>
        <motion.a
          href="mailto:eshant.yadav7017@gmail.com"
          whileHover={{ scale: 1.05, background: theme.primary, color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px 28px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            background: "transparent",
            color: theme.primary,
            textDecoration: "none",
            border: `2px solid ${theme.primary}`,
            transition: "all 0.3s",
          }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </div>
  ) : (
    // Desktop Two-Column Layout
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "60px",
        alignItems: "center",
        width: "100%",
        textAlign: "left",
      }}
    >
      {/* Left Column: Texts & CTAs */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "20px",
            border: `1px solid ${theme.borderColor}`,
            background: `${theme.primary}14`,
            marginBottom: "28px",
          }}
        >
          <motion.span
            animate={{ boxShadow: [`0 0 6px ${theme.primary}`, `0 0 12px ${theme.primary}`, `0 0 6px ${theme.primary}`] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: theme.primary,
            }}
          />
          <span
            style={{
              fontSize: "12px",
              color: theme.textMuted,
              fontFamily: "Fira Code, monospace",
              letterSpacing: "0.08em",
            }}
          >
            Available for Opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          style={{
            fontSize: "16px",
            color: theme.textMuted,
            marginBottom: "12px",
            fontFamily: "Fira Code,monospace",
            letterSpacing: "0.1em",
          }}
        >
          Hello, I'm
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(54px, 5.5vw, 76px)",
            fontWeight: "900",
            lineHeight: "1.05",
            marginBottom: "16px",
            fontFamily: "'Inter',sans-serif",
            color: theme.text,
            letterSpacing: "-0.02em",
          }}
        >
          Eshant Yadav
        </motion.h1>

        {/* TypeWriter Title */}
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: "clamp(24px, 2.5vw, 36px)",
            fontWeight: "700",
            marginBottom: "24px",
            fontFamily: "'Inter',sans-serif",
            minHeight: "44px",
          }}
        >
          <TypeWriter
            words={[
              "Java Full-Stack Developer",
              "Domain Driven Design (DDD) Architect",
            ]}
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "16px",
            color: theme.textMuted,
            maxWidth: "540px",
            marginBottom: "40px",
            lineHeight: "1.8",
          }}
        >
          Engineering intelligence into every layer of the stack — from Spring Boot microservices
          to Agentic AI pipelines at <span style={{ color: theme.primary, fontWeight: "600" }}>Capgemini, Pune</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${theme.primary}40` }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "14px 36px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
              color: "#fff",
              textDecoration: "none",
              boxShadow: `0 4px 20px ${theme.primary}59`,
            }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="/Eshant_Yadav_Resume.pdf"
            download="Eshant_Yadav_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${theme.primary}50` }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "14px 36px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              background: "transparent",
              color: theme.primary,
              border: `2px solid ${theme.primary}`,
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Download Resume 📄
          </motion.a>

          <motion.a
            href="mailto:eshant.yadav7017@gmail.com"
            whileHover={{ scale: 1.05, background: theme.primary, color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "14px 36px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              background: "transparent",
              color: theme.primary,
              textDecoration: "none",
              border: `2px solid ${theme.primary}`,
              transition: "all 0.3s",
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Right Column: Profile Picture & Terminal */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px", alignItems: "center", width: "100%" }}>
        {/* Profile Picture */}
        <motion.div
          variants={itemVariants}
          style={{
            position: "relative",
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            overflow: "hidden",
            border: `3px solid ${theme.primary}`,
            boxShadow: `0 0 35px ${theme.primary}40, inset 0 0 35px ${theme.primary}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: theme.cardBg,
          }}
        >
          <img
            src="./profile.jpg"
            alt="Eshant Yadav"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div style={{ fontSize: "75px", position: "absolute", zIndex: -1 }}>👨‍💼</div>
        </motion.div>

        {/* Mock Terminal Card */}
        <motion.div
          variants={itemVariants}
          style={{ width: "100%" }}
        >
          <MockTerminal />
        </motion.div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 60px",
        position: "relative",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: "1100px", width: "100%", display: "flex", justifyContent: "center" }}
      >
        {contentLayout}
      </motion.div>
    </section>
  );
}
