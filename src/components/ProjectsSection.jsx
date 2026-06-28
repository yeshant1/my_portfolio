import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useMobile } from "../hooks/useMobile";
import { PROJECTS } from "../data/portfolioData";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function ProjectsSection() {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const [expandedProject, setExpandedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? "80px 20px" : "120px 40px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "40px", textAlign: "center" }}
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
            Featured Personal Projects
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: theme.textMuted,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Production-grade systems I built to master microservices, distributed systems, and scalable architecture
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            width: "100%",
          }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={expandedProject === project.key ? {} : { y: -5 }}
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.borderColor}`,
                borderRadius: "16px",
                padding: isMobile ? "20px" : "32px",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
                width: "100%",
              }}
            >
              {/* Gradient Top Border */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg,${project.glow},transparent)`,
                }}
              />

              {/* Title & Emoji Header */}
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "space-between",
                  alignItems: isMobile ? "flex-start" : "flex-start",
                  gap: isMobile ? "12px" : "0",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: isMobile ? "32px" : "40px",
                      marginBottom: "8px",
                    }}
                  >
                    {project.emoji}
                  </div>
                  <h3
                    style={{
                      fontSize: isMobile ? "20px" : "24px",
                      fontWeight: "800",
                      color: theme.text,
                      marginBottom: "4px",
                      lineHeight: "1.3",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: project.glow,
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: theme.textMuted,
                    fontFamily: "Fira Code, monospace",
                    alignSelf: isMobile ? "flex-start" : "auto",
                  }}
                >
                  {project.period}
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "15px",
                  color: theme.textMuted,
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                {project.desc}
              </p>

              {/* Key Points (Full list from resume) */}
              <div
                style={{
                  marginBottom: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {project.points.map((point, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "14px",
                      color: theme.textMuted,
                      lineHeight: "1.6",
                    }}
                  >
                    <span style={{ color: project.glow, flexShrink: 0 }}>▸</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <motion.div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                  gap: isMobile ? "20px" : "16px",
                  marginBottom: "24px",
                  paddingTop: "24px",
                  borderTop: `1px solid ${theme.borderColor}`,
                  borderBottom: `1px solid ${theme.borderColor}`,
                  paddingBottom: "24px",
                }}
              >
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: project.glow,
                        marginBottom: "4px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {metric.v}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: theme.textMuted,
                        fontWeight: "600",
                      }}
                    >
                      {metric.l}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Tech Stack Tags (All tags) */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "28px",
                }}
              >
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    style={{
                      padding: "5px 12px",
                      background: `${project.glow}14`,
                      border: `1px solid ${project.glow}33`,
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: project.glow,
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "10px 20px",
                      background: `${project.glow}1f`,
                      border: `1px solid ${project.glow}80`,
                      borderRadius: "6px",
                      color: project.glow,
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    View Code →
                  </motion.a>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setExpandedProject(expandedProject === project.key ? null : project.key)}
                  style={{
                    padding: "10px 20px",
                    background: expandedProject === project.key ? project.glow : "transparent",
                    border: `1px solid ${project.glow}`,
                    borderRadius: "6px",
                    color: expandedProject === project.key ? "#fff" : project.glow,
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: expandedProject === project.key ? `0 0 15px ${project.glow}50` : "none",
                    transition: "all 0.3s",
                  }}
                >
                  {expandedProject === project.key ? "Hide System Architecture" : "View System Architecture"}
                </motion.button>
              </div>

              {/* Architecture Drawer */}
              <AnimatePresence>
                {expandedProject === project.key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden", width: "100%" }}
                  >
                    <ArchitectureDiagram projectKey={project.key} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
