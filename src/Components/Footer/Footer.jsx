import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-[#0f172a] text-white pt-14 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-200 mb-6 text-lg">
            I’m open to collaborations, freelancing or just a friendly hello 👋
          </p>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-full">
                <MdOutlineEmail size={20} />
              </span>
              karanbolake57@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-full">
                <CiLinkedin size={20} />
              </span>
              <a
                href="https://www.linkedin.com/in/karan-bolake-29503034a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-400 transition"
              >
                Connect on LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-full">
                <FaGithub size={20} />
              </span>
              <a
                href="https://github.com/Karanb2707"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-purple-400 transition"
              >
                View my GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:items-center">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <nav className="flex flex-col space-y-4 text-gray-400 text-lg">
            <a
              href="#Home"
              className="flex items-center gap-2 hover:text-white transition"
            >
              {/* karan  */}
              <AiOutlineHome size={18} />
              Home
            </a>
            <a
              href="#About"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <AiOutlineUser size={18} />
              About
            </a>
            <a
              href="#Experience"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <AiOutlineProject size={18} />
              Experience
            </a>
            <a
              href="#Projects"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <AiOutlineMail size={18} />
              Projects
            </a>
          </nav>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-10 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Karan Bolake — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;