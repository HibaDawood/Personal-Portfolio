"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "HTML", level: 100, color: "#e34c26" },
  { name: "CSS", level: 90, color: "#1572b6" },
  { name: "TypeScript", level: 80, color: "#3178c6" },
  { name: "Tailwind CSS", level: 100, color: "#06b6d4" },
  { name: "Next.js", level: 80, color: "#000000" },
  { name: "Python", level: 80, color: "#000000" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateY: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const glowVariants: Variants = {
  initial: {
    boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
  },
  hover: {
    boxShadow:
      "0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)",
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-purple-950 via-black to-black py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            My{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Technical Skills
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Skill Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group flex flex-col items-center"
              whileHover="hover"
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                className="w-28 h-28 bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20 flex items-center justify-center"
              >
                {/* Skill circle */}
                <div className="relative w-20 h-20">
                  <CircularProgressbar
                    value={isVisible ? skill.level : 0}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: `url(#gradient-${index})`,
                      trailColor: "rgba(255,255,255,0.1)",
                      textSize: "14px",
                      pathTransition: "stroke-dashoffset 2s ease-out",
                    })}
                  />
                  <svg style={{ height: 0 }}>
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>

              {/* Skill name */}
              <motion.p
                className="mt-3 font-bold text-white text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
