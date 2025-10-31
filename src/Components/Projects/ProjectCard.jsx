import PropTypes from "prop-types";
import { FaGithub, FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, github, liveurl, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 border border-zinc-700/50 rounded-2xl shadow-lg 
      overflow-hidden group flex flex-col justify-between w-[90vw] sm:w-[330px] md:w-[340px] lg:w-[380px] p-4 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-yellow-400/10 to-pink-500/10 opacity-0 
      group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

      <div className="relative z-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl mb-5 object-cover h-48 w-full transition-transform duration-500 "
        />
        <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">{desc.length > 100 ? desc.slice(0, 100) + "..." : desc}</p>

        <div className="flex flex-col gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 
            text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaGithub size={18} /> GitHub
          </a>

          <a
            href={liveurl || "#"}
            target={liveurl ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 font-semibold py-2 rounded-lg transition-all duration-300 shadow-md 
              ${liveurl
                ? "bg-gradient-to-r from-rose-600 to-red-500 hover:from-rose-500 hover:to-red-400 text-white hover:shadow-lg"
                : "bg-gray-600 text-gray-300 cursor-not-allowed opacity-70"}`}
          >
            <FaRegEye size={18} /> {liveurl ? "Visit" : "Coming Soon"}
          </a>

        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  liveurl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
