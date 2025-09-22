import PropTypes from "prop-types";
import { FaGithub, FaRegEye } from "react-icons/fa";

const ProjectCard = ({ title, desc, github, liveurl, image }) => {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 w-full sm:w-[45%] md:w-[30%] shadow-md hover:shadow-xl hover:shadow-slate-800 
      transition duration-300 flex flex-col justify-between transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 object-cover h-40 w-full"
      />
      <div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 leading-snug text-sm">{desc}</p>
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center gap-2 bg-[#6c1fb4] hover:bg-[#a332ff] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
      >
        <FaGithub size={20} /> Github
      </a>
      {
        liveurl
          ?
          <a
            href={liveurl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-[#a30000] hover:bg-[#e12424] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <FaRegEye size={20} /> Visit
          </a>
          :
          <p className="mt-4 text-center font-semibold text-gray-200">Coming Soon</p>
      }
    </div>
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