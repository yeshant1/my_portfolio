import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { NAV_LINKS } from "../data/portfolioData";

export function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isMobile ? "12px 20px" : "16px 40px",
        background: scrolled ? `${theme.cardBg}` : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${theme.borderColor}` : "none",
        transition: "all 0.4s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <motion.span
        whileHover={{ scale: 1.1 }}
        style={{
          fontFamily: "'Fira Code',monospace",
          fontSize: "20px",
          fontWeight: "700",
          background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          cursor: "pointer",
        }}
      >
        EY.
      </motion.span>

      <div
        style={{
          display: isMobile ? "none" : "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {NAV_LINKS.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.05em",
              color: active === link.toLowerCase() ? theme.primary : theme.textMuted,
              textDecoration: "none",
              transition: "color 0.2s, border 0.2s",
              borderBottom:
                active === link.toLowerCase() ? `2px solid ${theme.primary}` : "none",
              paddingBottom: "6px",
              minWidth: "70px",
              textAlign: "center",
            }}
          >
            {link}
          </motion.a>
        ))}
      </div>

      <div
        style={{
          display: isMobile ? "none" : "flex",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <motion.a
          href="/Eshant_Yadav_Resume.pdf"
          download="Eshant_Yadav_Resume.pdf"
          whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${theme.primary}50` }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "8px 20px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "600",
            background: "transparent",
            color: theme.primary,
            border: `2px solid ${theme.primary}`,
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
        >
          Resume 📄
        </motion.a>
        <motion.a
          href="mailto:eshant.yadav7017@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "8px 20px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "600",
            background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
            color: "#fff",
            textDecoration: "none",
            boxShadow: `0 4px 20px ${theme.primary}59`,
            border: "none",
            cursor: "pointer",
          }}
        >
          Hire Me
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: isMobile ? "block" : "none",
          background: "none",
          border: "none",
          color: theme.primary,
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        ☰
      </motion.button>

      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              background: theme.cardBg,
              backdropFilter: "blur(20px)",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              borderBottom: `1px solid ${theme.borderColor}`,
              zIndex: 99,
            }}
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                whileHover={{ x: 10 }}
                style={{
                  color: theme.textMuted,
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                {link}
              </motion.a>
            ))}
            <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
              <motion.a
                href="/Eshant_Yadav_Resume.pdf"
                download="Eshant_Yadav_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                  background: "transparent",
                  color: theme.primary,
                  border: `2px solid ${theme.primary}`,
                  textDecoration: "none",
                  textAlign: "center",
                  flex: 1,
                  cursor: "pointer",
                }}
              >
                Resume 📄
              </motion.a>
              <motion.a
                href="mailto:eshant.yadav7017@gmail.com"
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "600",
                  background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`,
                  color: "#fff",
                  textDecoration: "none",
                  textAlign: "center",
                  flex: 1,
                  cursor: "pointer",
                }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
