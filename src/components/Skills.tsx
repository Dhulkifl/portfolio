import React, { useState, useEffect, useRef } from "react";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Backend Core",
      icon: "construction",
      color: "from-blue-500 to-indigo-500",
      glowColor: "glow-card-blue",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 88 },
        { name: "Python", level: 75 },
        { name: "Java", level: 80 },
        { name: "C++", level: 70 },
      ],
    },
    {
      title: "Frontend Engineering",
      icon: "code",
      color: "from-indigo-500 to-purple-500",
      glowColor: "glow-card-purple",
      skills: [
        { name: "JavaScript (ES6)", level: 85 },
        { name: "Vue", level: 82 },
        { name: "jQuery", level: 80 },
        { name: "TailwindCSS", level: 85 },
      ],
    },
    {
      title: "Mobile Architecture",
      icon: "phone_android",
      color: "from-purple-500 to-pink-500",
      glowColor: "glow-card-pink",
      skills: [
        { name: "Android SDK (Java)", level: 88 },
        { name: "Flutter", level: 80 },
        { name: "Dart", level: 80 },
        { name: "Android Studio", level: 85 },
        { name: "XML Layouts", level: 75 },
      ],
    },
    {
      title: "Databases & DevOps",
      icon: "settings",
      color: "from-blue-500 to-teal-500",
      glowColor: "glow-card-blue",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "SQLite", level: 85 },
        { name: "Git & Versioning", level: 80 },
        { name: "REST API Integration", level: 75 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Decorative layout background glows */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my core domains and professional software engineering competencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass-panel rounded-lg p-6 shadow-md border border-gray-200/50 dark:border-gray-800/80 transition-all duration-500 transform hover:-translate-y-1.5 ${category.glowColor} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center shadow-sm">
                  <span className="material-icons-outlined text-indigo-500 text-xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4.5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200/50 dark:bg-gray-800/60 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full transition-all duration-1200 ease-out bg-gradient-to-r ${category.color}`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 100 + skillIndex * 80}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Tech tags */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
            Complete Technology Inventory
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              "PHP", "Laravel", "JavaScript", "Vue", "jQuery",
              "Python", "Java", "C++", "TailwindCSS", "Flutter", "Dart",
              "Android Studio", "MySQL", "SQLite", "Git", "REST APIs", "XML Layouts"
            ].map((techName, index) => (
              <span
                key={index}
                className={`bg-white dark:bg-gray-900 px-4 py-2 rounded-2xl text-xs font-bold text-gray-700 dark:text-gray-300 shadow-sm border border-gray-250/40 dark:border-gray-800/80 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 cursor-default hover:text-indigo-600 dark:hover:text-indigo-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {techName}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

