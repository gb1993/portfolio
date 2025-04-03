"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { delays } from "@/utils/consts";

const PageTransition = () => {
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      document.body.style.overflow = originalStyle;
    }, 2160);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="bg-transparent h-dvh absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden z-20">
      {delays.map((delay, index) => (
        <motion.div
          key={index}
          className="bg-primary"
          style={{ position: "relative", height: "15%" }}
          initial={{ width: "0%", right: "0%" }}
          animate={{
            width: ["0%", "100%", "100%"],
            right: ["0%", "0%", "-100%"],
          }}
          transition={{
            delay,
            duration: 1.08,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
      ))}
    </div>
  );
};

export default PageTransition;
