import React, { useState, useEffect, useRef } from "react";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Backend",
      icon: "🔧",
      color: "blue",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 88 },
        { name: "Python", level: 75 },
        { name: "Java", level: 80 },
        { name: "C++", level: 70 },
      ],
    },
    {
      title: "Frontend",
      icon: "⚛️",
      color: "green",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React", level: 82 },
        { name: "Next.js", level: 70 },
        { name: "jQuery", level: 80 },
        { name: "TailwindCSS", level: 85 },
      ],
    },
    {
      title: "Mobile",
      icon: "📱",
      color: "purple",
      skills: [
        { name: "Android Studio", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Dart", level: 80 },
        { name: "Java (Android)", level: 88 },
        { name: "XML", level: 75 },
      ],
    },
    {
      title: "Database & Tools",
      icon: "🛠️",
      color: "orange",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "SQLite", level: 85 },
        { name: "Git", level: 80 },
        { name: "REST API", level: 75 },
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
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${
                          category.color === "blue"
                            ? "from-blue-500 to-blue-600"
                            : category.color === "green"
                            ? "from-green-500 to-green-600"
                            : category.color === "purple"
                            ? "from-purple-500 to-purple-600"
                            : "from-orange-500 to-orange-600"
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 150 + skillIndex * 100
                          }ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "PHP", color: "purple" },
              { name: "Laravel", color: "red" },
              { name: "JavaScript", color: "yellow" },
              { name: "React", color: "cyan" },
              { name: "Next.js", color: "gray" },
              { name: "jQuery", color: "blue" },
              { name: "Python", color: "blue" },
              { name: "Java", color: "orange" },
              { name: "C++", color: "blue" },
              { name: "TailwindCSS", color: "cyan" },
              { name: "Flutter", color: "blue" },
              { name: "Dart", color: "blue" },
              { name: "Android Studio", color: "green" },
              { name: "MySQL", color: "blue" },
              { name: "SQLite", color: "gray" },
              { name: "Git", color: "red" },
              { name: "REST APIs", color: "green" },
              { name: "XML", color: "orange" },
            ].map((tech, index) => (
              <span
                key={index}
                className={`bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-default transform hover:-translate-y-1 border border-gray-200 dark:border-gray-600 hover:border-${
                  tech.color
                }-400 dark:hover:border-${tech.color}-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
