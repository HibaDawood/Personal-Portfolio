"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { BiPalette } from "react-icons/bi";
import { GrDiamond } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";

const features = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "I specialize in building responsive and interactive websites using HTML, CSS, TypeScript, Tailwind CSS, and Next.js.✨",
  },
  {
    icon: <BiPalette />,
    title: "Python & Automation",
    description:
      "I use Python for scripting and smart solutions, making tasks efficient and elegant.⚙️🐍",
  },
  {
    icon: <GrDiamond />,
    title: "Creative Design",
    description:
      "From bold visuals to brand vibes — I turn ideas into eye-catching designs.🎨🔥",
  },
  {
    icon: <MdDesignServices />,
    title: "Design-to-Code Conversion",
    description:
      "I convert Figma/Adobe XD designs into fully functional web pages with precision. 💻",
  },
];

export default function SkillSection() {
  return (
    <div className="bg-gradient-to-r from-black to-[#180226] pt-20 pb-20">
      <h1 className="mb-16 text-4xl text-center md:text-5xl lg:text-6xl font-bold text-white">
        Tech
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {" "}
          & Creative Skills
        </span>
      </h1>
      <div className="flex items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#212121] text-white p-6 rounded-xl border border-transparent 
            hover:border-purple-500 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute top-0 left-0 w-full h-full border border-purple-500 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-4 text-purple-400 text-4xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
