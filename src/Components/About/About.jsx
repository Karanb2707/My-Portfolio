import AboutImg from "../../assets/karan5.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 md:px-20 py-10 mt-8 rounded-3xl overflow-hidden mx-auto"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      <div className="flex flex-col md:flex-row items-center gap-12 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
            <img
              src={AboutImg}
              alt="About"
              className="h-72 w-72 mt-10 md:h-[430px] md:w-96 object-cover rounded-3xl shadow-xl transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md p-5 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">UI Development</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                I create responsive, elegant, and performance-driven UIs using ReactJS and Tailwind CSS.
                My focus lies in accessibility, visual balance, and smooth animations that elevate user engagement.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md p-5 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                API Integration & State Management
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Skilled in connecting RESTful APIs, managing data flow with Context API and Hooks,
                and optimizing rendering through lazy loading and efficient state updates.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md p-5 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Experience & Optimization</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                With 5+ high-impact frontend modules delivered, I specialize in crafting scalable,
                maintainable, and optimized code that enhances speed, usability, and design consistency.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
