"use client"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const skills = [
  { name: "HTML", level: 100, color: "#e34c26" },
  { name: "CSS", level: 90, color: "#1572b6" },
  { name: "TypeScript", level: 80, color: "#3178c6" },
  { name: "Tailwind CSS", level: 100, color: "#06b6d4" },
  { name: "Next.js", level: 80, color: "#000000" },
  { name: "Python", level: 80, color: "#000000" },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
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
  }

  const glowVariants = {
    initial: {
      boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
    },
    hover: {
      boxShadow: "0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)",
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-purple-950 via-black to-black py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-purple-400/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            My
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 block sm:inline"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {" "}
              Technical Skills
            </motion.span>
          </motion.h1>
          <motion.div
            className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-7xl mx-auto"
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
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-purple-500/20 flex flex-col items-center justify-center"
              >
                {/* Skill circle */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28">
                  <CircularProgressbar
                    value={isVisible ? skill.level : 0}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: `url(#gradient-${index})`,
                      trailColor: "rgba(255, 255, 255, 0.1)",
                      textSize: "14px",
                      pathTransition: "stroke-dashoffset 2s ease-out",
                    })}
                  />

                  {/* SVG gradient definitions */}
                  <svg style={{ height: 0 }}>
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-purple-400/30"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  />
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${80}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Skill name - moved outside the card for better mobile visibility */}
              <motion.p
                className="mt-3 sm:mt-4 font-bold text-white text-center text-xs sm:text-sm lg:text-base xl:text-lg leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {skill.name}
              </motion.p>

              {/* Progress indicator */}
              <motion.div
                className="mt-2 w-16 sm:w-20 lg:w-24 xl:w-32 h-0.5 sm:h-1 bg-gray-700 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.5,
                    delay: 1.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="flex space-x-1 sm:space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
