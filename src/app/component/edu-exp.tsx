"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Star,
  Award,
  Building,
} from "lucide-react";


// Custom Components
const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;

const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
  >
    {children}
  </div>
);

export default function Education() {
  const [activeTab, setActiveTab] = useState("education");
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      degree: "Matriculation – Science Group",
      institution: "Church Mission Higher Secondary Campus School/College",
      year: "2018-2020",
      gpa: "2.8 / 4.0",
      achievements: ["High Scorer", "Certificate of Excellence", "Class Representative"],
      color: "from-blue-600 to-purple-600",
      delay: "delay-100",
    },
    {
      degree: "Higher Secondary School Certificate (HSSC) – Commerce Group",
      institution: "Church Mission Higher Secondary Campus School/College",
      year: "2020-2022",
      gpa: "2.8 / 4.0",
      achievements: ["Assisted Classmates in Study Groups", "Certificate of Excellence"],
      color: "from-pink-600 to-rose-600",
      delay: "delay-200",
    },
    {
      degree: [
        "Panaverse Certified Agentic & Robotic AI Engineer",
        "Governor's Initiative for Artificial Intelligence & Computing (GIAIC)",
      ],
      institution: "Governor House, Karachi, Pakistan",
      year: "2024 – Present",
      achievements: [
        "Learned TypeScript, Next.js, and Python",
        "Currently specializing in Agentic & Robotic AI development",
        "Trained through hands-on projects and real-world scenarios",
      ],
      color: "from-blue-600 to-purple-600",
      delay: "delay-200",
    },
  ];

  const experience = [
    {
      title: "Personal Projects",
      description:
        "Built dynamic websites using Next.js & Tailwind CSS, including an e-commerce store and portfolio. Converted Figma designs into responsive, production-ready web apps.",
      skills: ["React", "Next.js", "Taiwind CSS", "TypeScript"],
      highlights: [
        "🚀 Boosted site speed by 60%",
        "🎨 Figma designs to web",
        "🛍️ Built e-commerce with Next.js",
        "🌐 Deployed responsive websites",
      ],
      color: "from-purple-500 to-rose-500",
      delay: "delay-100",
    },
    {
      title: "Freelance / Practice Work",
      description: "Built small websites for friends or college events (non-paid/freelance).",
      skills: ["HTML", "CSS", "Tailwind CSS", "Next.JS", "TypeScript/JavaScript", "Python"],
      highlights: ["💼 Freelance & free projects", "👨‍💻 Practical coding work."],
      color: "from-purple-500 to-rose-500",
      delay: "delay-200",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/picture/p2.jpg')] bg-center relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 bg-clip-text text-transparent mb-4 animate-gradient">
            My Journey
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-pink-300/80 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-purple-600">
            <div className="flex gap-2">
              {[
                { id: "education", label: "Education", icon: GraduationCap },
                { id: "experience", label: "Experience", icon: Briefcase },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-pink-700 to-purple-600 text-white shadow-lg"
                      : "text-slate-700 hover:bg-white/50"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        {activeTab === "education" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`group bg-purple-600/20 backdrop-blur-lg border-0 shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${edu.delay}`}
              >
                <CardContent className="p-4 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-br ${edu.color} rounded-2xl shadow-lg`}>
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <div
                        className={`px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full text-purple-100 font-semibold text-sm shadow-lg`}
                      >
                        {edu.year}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-purple-100 mb-3">
                      {Array.isArray(edu.degree) ? edu.degree.join(" - ") : edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-purple-100">
                      <Building className="h-5 w-5" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                    <div className="mb-4">
                      <Star className="inline h-5 w-5 text-yellow-500 mr-1 animate-pulse" />
                      <span className="font-bold text-pink-400">GPA: {edu.gpa}</span>
                    </div>
                    <h4 className="font-bold text-pink-400 flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      Achievements
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} style={{ animationDelay: `${i * 100}ms` }}>
                          <Badge
                            className={`bg-gradient-to-r ${edu.color} text-purple-200 border-0 shadow-lg hover:scale-105 transition-transform duration-200 animate-fade-in`}
                          >
                            <span className="p-1 text-base">{achievement}</span>
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className={`bg-rose-200 shadow-2xl ${exp.delay}`}>
                <CardContent>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <p className="text-slate-700 mb-4">{exp.description}</p>

                  <h4 className="font-bold text-slate-900 mb-2">Key Highlights</h4>
                  <ul className="space-y-1 list-disc pl-5 text-purple-900">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>

                  <h4 className="font-bold text-slate-900 mt-4 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, i) => (
                      <div key={i} style={{ animationDelay: `${i * 100}ms` }}>
                        <Badge
                          className={`bg-gradient-to-r ${exp.color} text-white border-0 shadow-lg hover:scale-110 transition-all duration-200 animate-bounce-in`}
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
