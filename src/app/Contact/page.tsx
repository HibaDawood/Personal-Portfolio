"use client"

import { useState, useEffect } from "react"
import { Mail, Star, Sparkles, Linkedin, Github, Heading, X } from "lucide-react"

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hibam.dawood25@gmail.com",
      link: "",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Hiba M.Dawood",
      link: "https://www.linkedin.com/in/hiba-m-dawood/",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: X,
      title: "X",
      value: "HibaXOfficial",
      link: "https://x.com/HibaXOfficial",
      color: "from-gray-900 to-gray-950",
    },
    {
      icon: Heading,
      title: "HackerRank",
      value: "Hiba Dawood",
      link: "https://www.hackerrank.com/profile/Hibam_dawood25",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "https://github.com/HibaDawood",
      link: "HibaDawood",
      color: "from-gray-600 to-gray-700",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black
          "></div>

        <div
          className="absolute inset-0 opacity-40 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(168, 85, 247, 0.4) 0%, 
              rgba(236, 72, 153, 0.3) 25%, 
              rgba(59, 130, 246, 0.2) 50%, 
              transparent 70%)`,
          }}
        ></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/35 to-cyan-500/35 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/40 to-rose-500/40 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(168, 85, 247, ${Math.random() * 0.8 + 0.2})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin" />
              <span className="text-purple-300 font-medium">Available for Projects</span>
              <Star className="w-5 h-5 text-pink-400 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-8 tracking-tight leading-none">
              GET IN TOUCH
            </h1>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Choose your preferred way to connect with me and let's create something amazing together.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  className="relative group block"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-500 h-full">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-300 text-lg font-medium break-all">{method.value}</p>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Response Time */}
          <div className="mt-20 max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mb-6">
                <span className="text-white font-black text-2xl">24h</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Quick Response</h3>
              <p className="text-gray-300 text-lg">I'll get back to you within 24 hours!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
