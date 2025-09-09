import React, { useState, useEffect, useRef } from "react";

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      title: "Software Developer",
      company: "Ertibat Technology",
      period: "March 2022 - Present",
      location: "Kabul, Afghanistan",
      description:
        "Develop and maintain web applications using programming languages such as PHP (Laravel), JavaScript (React & jQuery), and MySQL DBMS. Collaborate with cross-functional teams to gather requirements, design software solutions, and implement new features.",
      achievements: [
        "Developed Android applications using Java, Flutter (Dart), XML, and SQLite",
        "Collaborated with cross-functional teams to gather requirements and design software solutions",
        "Conducted thorough testing and debugging to ensure functionality and resolve issues",
        "Integrated third-party APIs and services to enhance application capabilities",
        "Participated in code reviews and provided constructive feedback to team members",
        "Utilized version control systems such as Git to manage and track changes to codebase",
      ],
      technologies: ["PHP", "Laravel", "JavaScript", "React", "jQuery", "MySQL", "Java", "Flutter", "Dart"],
      icon: "💻",
      color: "blue",
    },
    {
      title: "Software Developer Intern",
      company: "CodeZone ICT",
      period: "October 2018 - March 2019",
      location: "Kabul, Afghanistan",
      description:
        "Developed and maintained web applications using HTML, CSS, and JavaScript. Assisted in the full software development life cycle, including requirements gathering, design, coding, testing, and deployment.",
      achievements: [
        "Developed and maintained web applications using HTML, CSS, and JavaScript",
        "Assisted in the full software development life cycle from requirements to deployment",
        "Collaborated with the development team to design and implement new features",
        "Demonstrated strong problem-solving skills by identifying and resolving technical challenges",
        "Contributed to the development of internal tools and utilities to streamline workflows",
        "Documented software design, development processes, and user manuals for knowledge sharing",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      icon: "🚀",
      color: "green",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey through various roles and the impact I've made along the
            way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full opacity-30 dark:opacity-50"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } transition-all duration-700`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${
                    exp.color === "blue"
                      ? "from-blue-500 to-blue-600"
                      : exp.color === "purple"
                      ? "from-purple-500 to-purple-600"
                      : "from-green-500 to-green-600"
                  } rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 flex items-center justify-center text-white text-xl`}
                >
                  {exp.icon}
                </div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.color === "blue"
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                              : exp.color === "purple"
                              ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
                              : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          }`}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p
                        className={`font-semibold mb-1 ${
                          exp.color === "blue"
                            ? "text-blue-600 dark:text-blue-400"
                            : exp.color === "purple"
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-green-600 dark:text-green-400"
                        }`}
                      >
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {exp.location}
                      </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <span className="mr-2">🏆</span>
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start group">
                            <span
                              className={`mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                                exp.color === "blue"
                                  ? "bg-blue-500"
                                  : exp.color === "purple"
                                  ? "bg-purple-500"
                                  : "bg-green-500"
                              } group-hover:scale-125 transition-transform`}
                            ></span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                            exp.color === "blue"
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40"
                              : exp.color === "purple"
                              ? "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/40"
                              : "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
