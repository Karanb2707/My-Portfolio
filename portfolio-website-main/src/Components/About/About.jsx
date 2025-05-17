import AboutImg from "../../assets/karan5.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="bg-black bg-opacity-70 text-white px-6 md:px-20 rounded-xl py-12 mt-8 shadow-2xl max-w-full mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src={AboutImg}
            alt="About"
            className="h-72 w-72 md:h-[430px] md:w-96 object-cover rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl text-center font-bold mb-6">About Me</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <IoArrowForward size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">Frontend</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  I build responsive and engaging interfaces using React and Tailwind CSS.  
                  I focus on performance, accessibility, and smooth user experience.  
                  My React work includes reusable components, state management with hooks and Context API, and performance optimizations like lazy loading.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IoArrowForward size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">Backend</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  I develop robust APIs with Laravel, ensuring scalable and secure solutions.  
                  My work involves writing clean, maintainable code and designing efficient system architectures.  
                  I integrate backend services seamlessly with frontend applications.
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <IoArrowForward size={24} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">Database</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Skilled in designing optimized database schemas using MySQL and MongoDB.  
                  I ensure data consistency, speed, and security in all projects.  
                  Database performance tuning and query optimization are part of my expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;