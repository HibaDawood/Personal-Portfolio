"use client"

import Link from "next/link"
import { ArrowRight, Code, Palette, Rocket } from "lucide-react"

export default function ProjectsSection() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Unique Animated Background */}
      <div className="absolute inset-0">
        {/* Moving Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "moveGrid 20s linear infinite",
            }}
          ></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-500/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 border-2 border-pink-500/30 rotate-12 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rotate-45 animate-float"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-glow-green"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-glow-purple"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-glow-pink"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 mb-4 animate-gradient-text">
             From Ideas to Interfaces
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">Creating Digital Experiences</p>
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500">
                <Code className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Frontend</div>
              <div className="text-pink-200 text-sm">React, Next.js, TypeScript</div>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500">
                <Palette className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Design</div>
              <div className="text-pink-200 text-sm">UI/UX, Figma, Creative</div>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500">
                <Rocket className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Backend</div>
              <div className="text-pink-200 text-sm"> APIs</div>
            </div>
          </div>

          {/* Main CTA Button */}
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-600
             via-cyan-600 to-purple-600 text-white px-8 py-5 rounded-full text-2xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-110 transform overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-600
             opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">View My Work</span>
            <ArrowRight className="relative z-10 w-8 h-8 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500" />
          </Link>

          {/* Subtitle */}
          <p className="text-pink-200 text-lg mt-8 max-w-2xl mx-auto animate-fade-in-up">
            Passionate about building modern web applications with clean code and beautiful design
          </p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-30px) rotate(45deg); }
        }
        
        @keyframes glow-green {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.2); }
        }
        
        @keyframes glow-purple {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          33% { opacity: 0.15; transform: scale(1.1); }
          66% { opacity: 0.2; transform: scale(1.3); }
        }
        
        @keyframes glow-pink {
          0%, 100% { opacity: 0.05; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.1; transform: scale(1.1) rotate(180deg); }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 0.5; }
        }
        
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow-green { animation: glow-green 8s ease-in-out infinite; }
        .animate-glow-purple { animation: glow-purple 10s ease-in-out infinite; }
        .animate-glow-pink { animation: glow-pink 12s ease-in-out infinite; }
        .animate-gradient-text { 
          animation: gradient-text 3s ease-in-out infinite;
          background-size: 200% 200%;
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.5s both; }
        .animate-float-random { animation: float-random 7s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
