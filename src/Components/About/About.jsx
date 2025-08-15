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
            {/* UI Development */}
            <div className="flex items-start gap-4">
              <IoArrowForward size={30} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">UI Development</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  I build responsive and visually engaging user interfaces using ReactJS and Tailwind CSS.
                  My approach focuses on performance, accessibility, and cross-device compatibility.
                  I design pixel-perfect layouts while ensuring smooth animations and an intuitive user experience.
                </p>
              </div>
            </div>

            {/* API Integration & State Management */}
            <div className="flex items-start gap-4">
              <IoArrowForward size={30} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">API Integration & State Management</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Experienced in integrating RESTful APIs into frontend applications to deliver real-time and dynamic content.
                  I manage complex application state using React Hooks and the Context API, ensuring data flows seamlessly.
                  My work includes implementing lazy loading and code-splitting to boost performance.
                </p>
              </div>
            </div>

            {/* Experience & Optimization */}
            <div className="flex items-start gap-4">
              <IoArrowForward size={30} className="mt-1 text-yellow-400" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">Experience & Optimization</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  With hands-on experience building 5+ complex frontend modules for large-scale platforms,
                  I excel at delivering high-performance, scalable interfaces.
                  I continuously optimize load times, enhance usability, and create maintainable, reusable code structures.
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
