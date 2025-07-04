"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { BsFillChatLeftHeartFill } from "react-icons/bs"
import { useState } from "react"

const projects = [
  {
    title: "China Travel Website",
    description:
      "An engaging and visually captivating website showcasing the beauty and culture of China for travelers.🌏✨",
    image: "/picture/china.png",
    live: "https://china-travel-website.netlify.app/",
    category: "HTML/CSS",
  },
  {
    title: "Dynamic Resume Builder",
    description: "A smart and interactive tool for creating personalized, professional resumes effortlessly. 📝🚀",
    image: "/picture/resume-show.png",
    live: "https://dynamic-resume-builder-dun-iota.vercel.app/",
    category: "HTML/CSS/TS",
  },
  {
    title: "Smart Agro Farm Website",
    description:
      "A modern web solution for smart farming, integrating technology to enhance agricultural efficiency. 🌱🚜",
    image: "/picture/farm.png",
    live: "https://farm-website-5ko2.vercel.app/",
    category: "React/Next.js",
  },
  {
    title: "Personal Portfolio",
    description:
      "A creative and professional showcase of my skills, projects, and expertise as a developer and designer.🎨",
    image: "/picture/portfolio.png",
    live: "https://portfolio-2p35.vercel.app/",
    category: "React/Next.js",
  },
  {
    title: "Dynamic Blog website",
    description: "A dynamic blog website where I have written and published my own blogs on various topics. 📝",
    image: "/picture/blog.png",
    live: "https://dynamic-blog-website-three.vercel.app/",
    category: "React/Next.js",
  },
  {
    title: "E-Commerce Website",
    description:
      "A feature-rich e-commerce website offering a seamless shopping experience with secure transactions. 🛍️🚀",
    image: "/picture/e-commerce.png",
    live: "https://e-commerce-web-eight-blush.vercel.app/",
    category: "React/Next.js",
  },
  {
    title: "Figma Template E-Commerce",
    description: "A website built by replicating a Figma template with precision and attention to detail. 🎨✨",
    image: "/picture/figma-tem.png",
    live: "https://e-commerce-website-vfys.vercel.app/",
    category: "React/Next.js",
  },
  {
    title: "Static Resume",
    description:
      "A basic static resume created purely for practice, learning, and experimentation, not for professional use. 📝",
    image: "/picture/static-resume.png",
    live: "https://hiba-dawood-static-resume.netlify.app/",
    category: "HTML/CSS",
  },
  {
    title: "Professional Unit Converter",
    description: "Professional Unit Converter: Effortlessly convert measurements with precision and speed.",
    image: "/picture/unit converter.png",
    live: "https://unit-converter-h05.streamlit.app/",
    category: "Python",
  },
  {
    title: "Secure Data Encryption System",
    description: "Protecting sensitive information with advanced encryption for maximum security.",
    image: "/picture/secure data app.png",
    live: "https://q3-assignment-5-securedataapp.streamlit.app/",
    category: "Python",
  },
  {
    title: "Moodify",
    description: "Moodify – Track, understand, and elevate your mood every day.",
    image: "/picture/moodify.png",
    live: "https://mood-tracker-web-app.streamlit.app/",
    category: "Python",
  },
  {
    title: "BMI Calculator",
    description: "Instantly measure your body mass index and stay on top of your health.",
    image: "/picture/bmi calculator.png",
    live: "https://bmi-calculator-06.streamlit.app/",
    category: "Python",
  },

  {
    title: "Password Strength Meter",
    description: "Shows how secure and strong your password is while typing.",
    image: "/picture/password strength meter.png",
    live: "https://password-strength-meter-h05.streamlit.app/",
    category: "Python",
  },
  {
    title: "Data Sweeper",
    description: "Cleans and removes unwanted or sensitive data efficiently.",
    image: "/picture/data sweeper.png",
    live: "https://growth-mindset-challenge-web-app-with-app-hb.streamlit.app/",
    category: "Python",
  },
]

const categories = ["React/Next.js", "HTML/CSS/TS", "Python", "HTML/CSS"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("React/Next.js")

  const filteredProjects = projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12"
        >
          <span className="text-white">My </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Latest Projects
          </span>
        </motion.h2>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-lg transform scale-105"
                  : "bg-white bg-opacity-10 text-white hover:bg-opacity-20 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden group">
                <Image
                  width={500}
                  height={500}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-pink-200">{project.title}</h3>
                  <span className="text-xs bg-gradient-to-r from-purple-700 to-pink-600 text-white px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <button className="text-xl text-pink-500 hover:text-pink-400 transition-colors duration-300">
                    <BsFillChatLeftHeartFill />
                  </button>
                  <span className="text-sm text-purple-100 font-medium">Click image for demo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-white text-xl">No projects found in this category yet.</p>
            <p className="text-gray-300 mt-2">Check back soon for updates!</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
