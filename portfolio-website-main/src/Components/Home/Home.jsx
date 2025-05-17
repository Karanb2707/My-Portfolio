import avatarImg from "../../assets/karan3.png";
import cvFile from "../../assets/Karan_Bolake_Resume.pdf"; // update the path if needed

const Home = () => {
  return (
    <section
      id="Home"
      className="w-full bg-slate-900 text-white px-6 md:px-20 py-14 flex flex-col-reverse md:flex-row rounded-b-xl items-center justify-between gap-10"
    >
      {/* Left Content */}
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight leading-snug mb-2">
          Karan Bolake
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold text-[#4c8ef7] mb-4">
          Software Engineer
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          I specialize in building beautiful and fast frontend interfaces using{" "}
          <span className="text-white font-medium">React</span>. I focus on creating
          reusable components, managing state with hooks and context, and delivering
          responsive, performant UIs using tools like React Router and lazy loading.
          On the backend, I work with <span className="text-white font-medium">Laravel</span> to
          craft scalable APIs. I use <span className="text-white font-medium">MySQL</span> to
          design efficient databases that ensure data reliability and
          performance.
        </p>
        <a
          href={cvFile}
          download="Karan_Bolake_CV.pdf"
          className="inline-block mt-6 bg-[#465697] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 hover:bg-opacity-90 transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={avatarImg}
          alt="Karan"
          className="w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Home;