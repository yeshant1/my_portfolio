import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useMobile } from "../hooks/useMobile";

export function AboutSection() {
  const { theme } = useTheme();
  const isMobile = useMobile();

  const education = [
    { degree: "Master of Computer Applications (MCA)", inst: "Lovely Professional University, Punjab", period: "Aug 2023 – June 2025", grade: "CGPA: 8.0/10" },
    { degree: "Bachelor of Science (Computer Science)", inst: "Paliwal P.G. College, Shikohabad", period: "Aug 2020 – May 2023", grade: "" },
    { degree: "12th with PCM (Science & Math)", inst: "Young Scholars Academy, Shikohabad", period: "2018 – 2019", grade: "" },
  ];

  const stats = [
    { label: "Years Experience", value: "1+ Years" },
    { label: "Enterprise Projects", value: "2 Large Scale" },
    { label: "Dependency Cut", value: "~35%" },
    { label: "HackerRank SQL", value: "5 Star" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "80px 20px" : "120px 40px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "60px", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(32px,5vw,56px)",
              fontWeight: "900",
              marginBottom: "16px",
              background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: `linear-gradient(90deg,${theme.primary},${theme.secondary})`,
              borderRadius: "2px",
              margin: "0 auto",
            }}
          />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
            gap: isMobile ? "30px" : "50px",
            alignItems: "start",
          }}
          className="two-col"
        >
          {/* Column 1: Image & Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              alignItems: "center",
            }}
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                width: isMobile ? "200px" : "260px",
                height: isMobile ? "200px" : "260px",
                borderRadius: "50%",
                overflow: "hidden",
                border: `3px solid ${theme.primary}`,
                boxShadow: `0 0 40px ${theme.primary}50, inset 0 0 40px ${theme.primary}30`,
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
              <div
                style={{
                  fontSize: isMobile ? "75px" : "100px",
                  position: "absolute",
                  zIndex: -1,
                }}
              >
                👨‍💼
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: isMobile ? "12px" : "16px",
                width: "100%",
              }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: isMobile ? "16px 8px" : "20px 12px",
                    background: theme.cardBg,
                    border: `1px solid ${theme.borderColor}`,
                    borderRadius: "12px",
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "18px" : "24px",
                      fontWeight: "900",
                      color: theme.primary,
                      marginBottom: "6px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "11px" : "12px",
                      color: theme.textMuted,
                      fontWeight: "600",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Bio & Education */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "36px",
            }}
          >
            {/* Biography */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  fontSize: isMobile ? "14px" : "16px",
                  color: theme.textMuted,
                  lineHeight: "1.8",
                }}
              >
                I am a passionate <span style={{ color: theme.primary, fontWeight: "600" }}>Java Full-Stack Developer</span> based in Pune, working at <span style={{ color: theme.secondary, fontWeight: "600" }}>Capgemini</span>. I specialize in building robust enterprise solutions, microservices, and backend APIs while engineering intelligent workflows with <span style={{ color: theme.accent, fontWeight: "600" }}>Agentic AI & LLM integration</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                style={{
                  fontSize: isMobile ? "14px" : "16px",
                  color: theme.textMuted,
                  lineHeight: "1.8",
                }}
              >
                My technical journey involves modernizing monolithic architectures using <span style={{ color: theme.primary, fontWeight: "600" }}>Domain-Driven Design (DDD)</span> to simplify code dependency and maximize system availability. Simultaneously, I construct autonomous agents using Spring AI and LangChain, enabling them to safely invoke enterprise utilities via Model Context Protocol (MCP) and monitor response quality with LangFuse.
              </motion.p>
            </div>

            {/* Education Timeline */}
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "850",
                  color: theme.text,
                  marginBottom: "20px",
                  fontFamily: "Inter, sans-serif",
                  borderLeft: `3px solid ${theme.primary}`,
                  paddingLeft: "12px",
                }}
              >
                Education History
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      padding: isMobile ? "12px 16px" : "16px 20px",
                      background: theme.cardBg,
                      border: `1px solid ${theme.borderColor}`,
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "15px",
                          fontWeight: "700",
                          color: theme.text,
                        }}
                      >
                        {edu.degree}
                      </h4>
                      <span
                        style={{
                          fontSize: "12px",
                          color: theme.primary,
                          fontFamily: "Fira Code, monospace",
                          fontWeight: "600",
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                        color: theme.textMuted,
                      }}
                    >
                      <span>{edu.inst}</span>
                      {edu.grade && (
                        <span style={{ color: theme.secondary, fontWeight: "600" }}>
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { theme } = useTheme();
  const isMobile = useMobile();

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? "80px 20px" : "120px 40px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "60px" }}
        >
          <h2
            style={{
              fontSize: "clamp(32px,5vw,56px)",
              fontWeight: "900",
              marginBottom: "16px",
              background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Connect
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: theme.textMuted,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          <motion.a
            href="mailto:eshant.yadav7017@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${theme.primary}40` }}
            style={{
              padding: "32px",
              background: theme.cardBg,
              border: `1px solid ${theme.borderColor}`,
              borderRadius: "12px",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>📧</div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: theme.text,
                marginBottom: "8px",
              }}
            >
              Email
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: theme.primary,
                wordBreak: "break-all",
              }}
            >
              eshant.yadav7017@gmail.com
            </p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/eshant-yadav/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${theme.primary}40` }}
            style={{
              padding: "32px",
              background: theme.cardBg,
              border: `1px solid ${theme.borderColor}`,
              borderRadius: "12px",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>💼</div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: theme.text,
                marginBottom: "8px",
              }}
            >
              LinkedIn
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: theme.textMuted,
              }}
            >
              Connect with me
            </p>
          </motion.a>

          <motion.a
            href="https://github.com/yeshant1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${theme.primary}40` }}
            style={{
              padding: "32px",
              background: theme.cardBg,
              border: `1px solid ${theme.borderColor}`,
              borderRadius: "12px",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🐙</div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: theme.text,
                marginBottom: "8px",
              }}
            >
              GitHub
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: theme.textMuted,
              }}
            >
              Check my code
            </p>
          </motion.a>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:eshant.yadav7017@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: `0 15px 40px ${theme.primary}60` }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              padding: "16px 40px",
              background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              boxShadow: `0 4px 20px ${theme.primary}59`,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: "80px",
            paddingTop: "40px",
            borderTop: `1px solid ${theme.borderColor}`,
            textAlign: "center",
            color: theme.textMuted,
            fontSize: "13px",
          }}
        >
          <p>
            Designed & Built by <span style={{ color: theme.primary }}>Eshant Yadav</span> |
            {" "}
            <span style={{ color: theme.secondary }}>© 2026</span>
          </p>
          <p style={{ marginTop: "8px" }}>
            <span style={{ color: theme.primary }}>★</span> Built with React, Framer Motion &
            Modern CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
