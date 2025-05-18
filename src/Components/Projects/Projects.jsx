import ProjectCard from "./ProjectCard";
import ChatAppImage from "../../assets/chatApp.png";
import GameShopAppImage from "../../assets/gameShop.png";
import TourAppImage from "../../assets/tourApp.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-18 mb-10 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <ProjectCard
          title="Chat Application"
          desc="A real-time messaging app with private/group chats, emoji and media support, built using WebSockets and a modern React interface."
          github="https://github.com/yourusername/chat-application"
          image={ChatAppImage}
        />
        <ProjectCard
          title="Game Shop Application"
          desc="A digital game store featuring product listings, reviews, cart, order tracking, and secure payments. Built for performance and responsiveness."
          github="https://github.com/yourusername/game-shop"
          image={GameShopAppImage}
        />
        <ProjectCard
          title="Tour Application"
          desc="A travel booking platform with detailed tour pages, search and filters, responsive UI, and admin tools for managing packages and bookings."
          github="https://github.com/yourusername/tour"
          image={TourAppImage}
        />
      </div>
    </div>
  );
};

export default Projects;
