import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { EXPERIENCE, ACHIEVEMENTS } from "../data/portfolioData";

export function ExperienceSection() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      style={{
        padding: "120px 40px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
            Professional Experience
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: theme.textMuted,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Journey through innovative projects and impactful roles
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            marginBottom: "80px",
          }}
        >
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              style={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "200px 1fr" },
                gap: "40px",
                paddingBottom: "40px",
                marginBottom: "40px",
                borderBottom: idx !== EXPERIENCE.length - 1 ? `1px solid ${theme.borderColor}` : "none",
              }}
            >
              {/* Date */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <motion.span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: theme.primary,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  {exp.period}
                </motion.span>
                <span
                  style={{
                    fontSize: "12px",
                    color: theme.textMuted,
                  }}
                >
                  {exp.location}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: theme.text,
                    marginBottom: "4px",
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: theme.primary,
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  {exp.company}
                </p>

                {/* Bullet Points */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "16px",
                  }}
                >
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "10px",
                        fontSize: "14px",
                        color: theme.textMuted,
                        lineHeight: "1.6",
                      }}
                    >
                      <span
                        style={{
                          color: theme.primary,
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {exp.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        padding: "4px 10px",
                        background: `${theme.primary}22`,
                        border: `1px solid ${theme.primary}44`,
                        borderRadius: "4px",
                        fontSize: "11px",
                        fontWeight: "600",
                        color: theme.primary,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "800",
              color: theme.text,
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Achievements & Certifications
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {ACHIEVEMENTS.map((ach) => (
              <motion.div
                key={ach.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${theme.primary}40` }}
                style={{
                  padding: "24px",
                  background: theme.cardBg,
                  border: `1px solid ${theme.borderColor}`,
                  borderRadius: "12px",
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    marginBottom: "12px",
                  }}
                >
                  {ach.icon}
                </div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: theme.text,
                    marginBottom: "6px",
                  }}
                >
                  {ach.title}
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    color: theme.textMuted,
                  }}
                >
                  {ach.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
