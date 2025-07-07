"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";
import { FloatingPaper } from "./floating-paper";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
          >
            <Image
              src="/picture/pro.jpg"
              alt="John Doe"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hi, I am
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {" "}
                  Hiba M.Dawood
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-xl mb-8"
            >
              A dedicated full-stack developer transforming ideas into dynamic
              and innovative web experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <a
                href="/picture/Hiba-resume.pdf"
                download="/Hiba's-resume.pdf"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 flex items-center py-2 rounded"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download CV
              </a>
              <a
                href="/Contact"
                className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-8 flex items-center py-2 rounded"
              >
                <span className="mr-3 h-5 w-5 text-2xl">
                  <MdOutlinePermContactCalendar />{" "}
                </span>
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
