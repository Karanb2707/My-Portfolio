import ProjectCard from "./ProjectCard";
import GameBazzarImg from "../../assets/gameBazzar.png";
import FoodAppImg from "../../assets/food_ordering.png";
import ToDoListImg from "../../assets/to_do_list.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-18 mb-10 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">

        <ProjectCard
          title="Food Ordering Application"
          desc="An online food ordering platform with menu browsing, cart management, order summary, and a fully responsive design for a smooth user experience."
          github="https://github.com/Karanb2707/masala-move-food-order-app"
          liveurl=''
          image={FoodAppImg}
        />
        <ProjectCard
          title="FocusPro (To-Do List Application)"
          desc="A task management application with features for adding, editing, and organizing tasks, built with a clean, responsive UI for productivity on any device."
          github="https://github.com/Karanb2707/focuspro-to-do-list-app"
          liveurl=''
          image={ToDoListImg}
        />
        <ProjectCard
          title="Game Bazzar"
          desc="Game Bazzar – A modern gaming marketplace built with React and Tailwind CSS, showcasing responsive design, smooth UI, and interactive components."
          github="https://github.com/Karanb2707/game-bazzar"
          liveurl='https://karanb2707.github.io/game-bazzar/'
          image={GameBazzarImg}
        />
      </div>
    </div>
  );
};

export default Projects;
