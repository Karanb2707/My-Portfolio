import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostman,
  SiGithub,
  SiMicrosoft,
} from "react-icons/si";

const tools = [
  { icon: <FaHtml5 color="#E34F26" size={40} />, name: "HTML5", percent: 82 },
  { icon: <FaCss3 color="#1572B6" size={40} />, name: "CSS3", percent: 81 },
  { icon: <FaJs color="#F7DF1E" size={40} />, name: "JavaScript", percent: 78 },
  { icon: <FaReact color="#61DAFB" size={40} />, name: "React", percent: 78 },
  { icon: <SiTailwindcss color="#38BDF8" size={40} />, name: "Tailwind CSS", percent: 81 },
  { icon: <SiPostman color="#FF6C37" size={40} />, name: "Postman", percent: 85 },
  { icon: <SiGithub color="#F05032" size={40} />, name: "Git", percent: 87 },
  { icon: <SiMicrosoft color="#D83B01" size={40} />, name: "MS Office", percent: 85 },
];

const Skills = () => {
  return (
    <div id="Skills" className="p-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-4 rounded-xl text-center shadow-md transform transition duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-2">{tool.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{tool.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
              <div
                className="bg-[#4c8ef7] h-2.5 rounded-full"
                style={{ width: `${tool.percent}%` }}
              ></div>
            </div>
            <p className="text-sm">{tool.percent}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
