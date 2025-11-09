import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import GameBazzarImg from "../../assets/gameBazzar.png";
import FoodAppImg from "../../assets/food_ordering.png";
import ToDoListImg from "../../assets/to_do_list.png";
import ServiceManagerImg from "../../assets/service_manager.png";

const Projects = () => {
  const projects = [
    {
      title: "Masla Move (Food Order Website)",
      desc: "An online food ordering platform with menu browsing, cart management, and a fully responsive design for seamless UX.",
      github: "https://github.com/Karanb2707/masala-move-food-order-app",
      liveurl: "https://masala-move-food-order.vercel.app/",
      image: FoodAppImg,
    },
    {
      title: "FocusPro (To-Do List Application)",
      desc: "A productivity app with task management, editing, and organizing features built on React with a responsive UI.",
      github: "https://github.com/Karanb2707/focuspro-to-do-list-app",
      liveurl: "https://focuspro-to-do-list.vercel.app/",
      image: ToDoListImg,
    },
    {
      title: "Game Bazzar",
      desc: "A modern gaming marketplace built with React and Tailwind CSS featuring responsive design and interactive components.",
      github: "https://github.com/Karanb2707/game-bazzar",
      liveurl: "https://karanb2707.github.io/game-bazzar/",
      image: GameBazzarImg,
    },
    {
      title: "Service Manager",
      desc: "A smart task management platform with efficient workflows, elegant design, and smooth performance.",
      github: "https://github.com/Karanb2707/service-manager",
      liveurl: "https://service-manager-psi.vercel.app/",
      image: ServiceManagerImg,
    },
  ];

  return (
    <section
      id="Projects"
      className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 py-12 px-10 mt-8 rounded-3xl text-white overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 p-2 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
