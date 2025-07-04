"use client";

import Image from "next/image";
import Education from "../component/edu-exp";

export default function About() {
  return (
    <div>
      <section
        className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#190d19] to-black
 flex items-center relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="space-y-6">
              <div className="text-5xl md:text-7xl font-extrabold leading-tight">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">
                  Hiba
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {" "}
                    M.Dawood
                  </span>
                </h1>
              </div>
              <h2 className="text-2xl md:text-3xl text-purple-400 font-light">
                Web Developer
              </h2>
              <p className="text-lg md:text-xl text-purple-50 leading-relaxed">
                I am Hiba Muhammad Dawood, a passionate web developer with
                expertise in Next.js, Python, Tailwind CSS, HTML, CSS, and
                TypeScript and I curruntly learning AI. I love building modern,
                responsive, and user-friendly web applications that bring ideas
                to life. With a strong eye for design and functionality, I focus
                on creating seamless digital experiences. Constantly learning
                and improving, I strive to stay updated with the latest web
                technologies to craft innovative solutions.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={"/picture/about.png"}
                  alt={"Hiba Dawood"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition duration-500 ease-in-out transform group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "256px",
            height: "256px",
            borderRadius: "50%",
            background: "#500724",
            filter: "blur(70px)",
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: "256px",
            height: "256px",
            borderRadius: "50%",
            background: "#500724",
            filter: "blur(70px)",
            animation: "float 6s ease-in-out infinite 3s",
          }}
        ></div>
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </section>
      <Education />
    </div>
  );
}
