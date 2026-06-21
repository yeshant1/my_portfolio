import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { SKILLS, TECH_BADGES } from "../data/portfolioData";

export function SkillsSection() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      style={{
        padding: "120px 40px",
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
          style={{ marginBottom: "80px", textAlign: "center" }}
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
            Technical Skills
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: theme.textMuted,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Expertise across full-stack development, cloud infrastructure, and AI/ML
          </p>
        </motion.div>

        {/* Skill Meters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            marginBottom: "80px",
          }}
        >
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              style={{
                padding: "28px",
                background: theme.cardBg,
                border: `1px solid ${theme.borderColor}`,
                borderRadius: "16px",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ scale: 1.05, borderColor: theme.primary }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg,${skill.color},transparent)`,
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>{skill.icon}</span>
                  <span
                    style={{
                      fontWeight: "600",
                      color: theme.text,
                      fontSize: "14px",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: skill.color,
                  }}
                >
                  {skill.level}%
                </span>
              </div>
              <motion.div
                style={{
                  height: "6px",
                  background: theme.borderColor,
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    height: "100%",
                    background: skill.color,
                    borderRadius: "3px",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Badges */}
        <div>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "40px",
              textAlign: "center",
              color: theme.text,
            }}
          >
            Technology Stack
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "grid",
              gap: "32px",
            }}
          >
            {TECH_BADGES.map((badgeRow, rowIdx) => (
              <motion.div
                key={rowIdx}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                }}
              >
                {badgeRow.map((badge) => (
                  <motion.div
                    key={badge}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 8px 20px ${theme.primary}40`,
                    }}
                    style={{
                      padding: "8px 16px",
                      background: theme.cardBg,
                      border: `1px solid ${theme.primary}33`,
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: theme.primary,
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    {badge}
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
