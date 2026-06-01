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
        "Develop and maintain web applications using programming languages such as PHP (Laravel), JavaScript (Vue & jQuery), and MySQL DBMS. Collaborate with cross-functional teams to gather requirements, design software solutions, and implement new features.",
      achievements: [
        "Developed Android applications using Java, Flutter (Dart), XML, and SQLite",
        "Collaborated with cross-functional teams to gather requirements and design software solutions",
        "Conducted thorough testing and debugging to ensure functionality and resolve issues",
        "Integrated third-party APIs and services to enhance application capabilities",
        "Participated in code reviews and provided constructive feedback to team members",
        "Utilized version control systems such as Git to manage and track changes to codebase",
      ],
      technologies: ["PHP", "Laravel", "JavaScript", "Vue", "jQuery", "MySQL", "Java", "Flutter", "Dart"],
      icon: "laptop_mac",
      color: "from-blue-500 to-indigo-500",
      glowColor: "glow-card-blue",
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
      icon: "rocket_launch",
      color: "from-indigo-500 to-purple-500",
      glowColor: "glow-card-purple",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className="py-8 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Decorative timeline background glow */}
      <div className="absolute top-1/2 left-[-10%] w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Professional <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A chronological timeline of my career history, structural engineering milestones, and roles.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 opacity-20 dark:opacity-40"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } transition-all duration-750`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Node Point */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-gray-900 border-2 border-indigo-500/30 dark:border-indigo-500/50 shadow-md z-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="material-icons-outlined text-indigo-500 text-xl">
                    {exp.icon}
                  </span>
                </div>

                {/* Card Container */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-14" : "md:pl-14"
                  }`}>
                  <div className={`glass-panel rounded-3xl p-6.5 shadow-md border border-gray-200/50 dark:border-gray-800/80 transition-all duration-500 transform hover:-translate-y-1.5 ${exp.glowColor}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-150/40 dark:border-indigo-900/40 self-start sm:self-center">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1.5 mb-4">
                      <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </p>

                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="material-icons-outlined text-indigo-500 text-sm">emoji_events</span> Key Achievements
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2.5 group/item">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                            <span className="text-xs text-gray-750 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-lg text-xs font-semibold border border-gray-250/20 dark:border-gray-700/30"
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

