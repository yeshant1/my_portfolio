import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export function FloatingBlobs() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.primary}22 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.secondary}1a 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 25, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          top: "40%",
          left: "40%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.accent}12 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

export function SideNav({ active }) {
  const { theme } = useTheme();
  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {navItems.map((link, idx) => (
        <motion.a
          key={link}
          href={`#${link.toLowerCase()}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          title={link}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            display: "block",
            background:
              active === link.toLowerCase()
                ? `linear-gradient(135deg,${theme.primary},${theme.secondary})`
                : "rgba(255,255,255,0.2)",
            border: active === link.toLowerCase() ? "none" : "1px solid rgba(255,255,255,0.15)",
            boxShadow:
              active === link.toLowerCase() ? `0 0 10px ${theme.primary}99` : "none",
          }}
        />
      ))}
    </div>
  );
}
