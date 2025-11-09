import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiGithub, SiRedux, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const tools = [
  { icon: <FaHtml5 color="#E34F26" size={44} />, name: "HTML5", percent: 90 },
  { icon: <FaCss3 color="#ff00dd" size={44} />, name: "CSS3", percent: 88 },
  { icon: <FaJs color="#F7DF1E" size={44} />, name: "JavaScript", percent: 85 },
  { icon: <FaReact color="#61DAFB" size={44} />, name: "React", percent: 84 },
  { icon: <SiTailwindcss color="#38BDF8" size={44} />, name: "Tailwind CSS", percent: 87 },
  { icon: <SiTypescript color="#487df7" size={44} />, name: "TypeScript", percent: 86 },
  { icon: <SiGithub color="#ba00b1" size={44} />, name: "Git", percent: 89 },
  { icon: <SiRedux color="#da69fc" size={44} />, name: "Redux", percent: 83 },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-10 px-6 md:px-16 mt-8 rounded-3xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
      >
        Skills & Tools
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center transition-all duration-300 border border-white/10 hover:border-blue-400/40"
          >
            <div className="flex justify-center mb-3">{tool.icon}</div>
            <h3 className="font-semibold text-lg mb-3 tracking-wide">{tool.name}</h3>
            <div className="w-full bg-gray-700/60 rounded-full h-2.5 overflow-hidden mb-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${tool.percent}%` }}
                transition={{ duration: 1 }}
                className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
              ></motion.div>
            </div>
            <p className="text-sm text-gray-300">{tool.percent}%</p>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-cyan-400/10 opacity-0 hover:opacity-40 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-12 text-gray-400 text-sm"
      >
        <p>
          Continuously improving and exploring new technologies to stay ahead in the
          modern web ecosystem.
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
