import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    {
      type: "work",
      title: "Software Engineer",
      organization: "Fyntune Solution Limited, Thurbhe",
      duration: "May 2024 - Present",
      description:
        "Working as a Software Engineer, contributing to various projects and applying full-stack development skills.",
    },
    {
      type: "education",
      title: "Bachelor of Science in Information Technology",
      organization: "SIES College of Commerce and Economics, Sion",
      duration: "2021 - 2024",
      description:
        "Completed BSc IT with an outstanding CGPA of 9.53, demonstrating strong academic performance and technical aptitude.",
    },
    {
      type: "education",
      title: "Higher Secondary Certificate (HSC)",
      organization: "Swami Vivekananda Junior College, Chembur",
      duration: "2019 - 2021",
      description:
        "Completed HSC in Commerce with an excellent score of 90.33%, laying a strong foundation for further studies.",
    },
    {
      type: "certification",
      title: "Fullstack Web Development Bootcamp",
      organization: "Udemy",
      duration: "Completed Apr 2024",
      description:
        "Comprehensive training in full-stack web development, covering modern technologies and best practices.",
    },
    {
      type: "certification",
      title: "Web Development Fundamentals",
      organization: "IBM",
      duration: "Completed May 2023",
      description:
        "Mastered core web development concepts and practices through IBM's professional certification program.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const getIcon = (type) => {
    switch (type) {
      case "education":
        return <GraduationCap size={20} />;
      case "work":
        return <Briefcase size={20} />;
      case "certification":
        return <Award size={20} />;
      default:
        return <GraduationCap size={20} />;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case "education":
        return "border-blue-500 dark:border-blue-600";
      case "work":
        return "border-green-500 dark:border-green-600";
      case "certification":
        return "border-yellow-400 dark:border-yellow-500";
      default:
        return "border-blue-500 dark:border-blue-600";
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "education":
        return "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400";
      case "work":
        return "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400";
      case "certification":
        return "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-500 dark:text-yellow-400";
      default:
        return "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400";
    }
  };

  return (
    <section id="education" className="py-14 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-white font-bold text-4xl">
          Education Experience & Certifications
        </h1>

        <div className="flex justify-center mt-8 mb-8">
          <div className="inline-flex rounded-full bg-green-100 dark:bg-green-900 p-1">
            <button className="px-4 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition">
              Timeline
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mt-12"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-300 dark:bg-green-700 rounded-full"></div>

          <div className="relative">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-12 flex items-center ${
                  index % 2 === 0
                    ? "justify-start md:justify-end"
                    : "justify-start"
                } relative ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
              >
                <div
                  className={`w-full md:w-[calc(50%-2rem)] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 ${getColor(
                    item.type
                  )}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 p-3 rounded-full ${getIconColor(
                        item.type
                      )}`}
                    >
                      {getIcon(item.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                        {item.organization}
                      </p>
                      <span className="inline-block text-sm bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full mb-3">
                        {item.duration}
                      </span>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`hidden md:block absolute z-10 w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-4 ${getColor(
                    item.type
                  )} left-1/2 transform -translate-x-1/2`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
