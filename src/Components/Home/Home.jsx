import { useState, useEffect } from 'react';
import avatarImg from "../../assets/karan3.png";
import cvFile from "../../assets/Karan_Resume_2025.pdf";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="Home"
      className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 md:px-20 py-14 flex flex-col-reverse md:flex-row rounded-b-3xl items-center justify-between gap-12 md:gap-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`md:w-1/2 z-10 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
        <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
          👋 Welcome to my portfolio
        </div>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-3 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Karan Bolake
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Frontend Developer
        </h2>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
          I specialize in building beautiful and fast frontend interfaces using{" "}
          <span className="text-blue-300 font-semibold">React</span>. I focus on creating
          reusable components, managing state with hooks and context, and delivering
          responsive, performant UIs using tools like React Router, Tailwind CSS, and
          lazy loading. I prioritize clean, maintainable code and seamless user
          experiences across devices and browsers.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={cvFile}
            download="Karan_Bolake_CV.pdf"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-md hover:shadow-blue-400 hover:scale-105"
          >
            <span>Download Resume</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-blue-400/50 text-blue-400 font-semibold px-8 py-4 rounded-full hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

      </div>

      <div className={`md:w-1/2 flex justify-center z-10 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

          <div className="relative p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 rounded-3xl">
            <img
              src={avatarImg}
              alt="Karan Bolake - Frontend Developer"
              className="relative w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full shadow-xl font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            Available for Work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;