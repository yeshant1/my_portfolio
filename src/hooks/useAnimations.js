import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export function useFadeInOnView(delay = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return {
    ref,
    isInView,
    variants: {
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: "easeOut" },
      },
    },
  };
}

export function useStaggerContainer() {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
}

export function useStaggerItem() {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
}
