import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a software developer currently working at{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Ertibat Technology
                </span>{" "}
                in Kabul, Afghanistan. My journey started with a curiosity about
                how devices such as computers and phones work, and it has
                evolved into a passion for creating scalable, user-friendly
                applications that solve real-world problems.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in{" "}
                <span className="font-semibold text-red-600 dark:text-red-400">
                  PHP (Laravel)
                </span>
                ,{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  JavaScript (React & jQuery)
                </span>
                , and mobile development using{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Java, Flutter (Dart), and Android Studio
                </span>
                . I believe in writing clean, maintainable code and following
                best practices to deliver high-quality software.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My experience includes participating in the full software
                development lifecycle, from requirements gathering and design to
                coding, testing, and deployment. I enjoy solving technical
                challenges and implementing innovative solutions to optimize
                software performance and enhance user experience.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3">💻</span>
                  What I Do
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      text: "Backend Development (PHP(Laravel), MySQL, SQLite)",
                      icon: "🔧",
                    },
                    {
                      text: "Frontend Development (React, Next.js, Tailwind)",
                      icon: "⚛️",
                    },
                    {
                      text: "Android Development (Java, XML, Flutter)",
                      icon: "📱",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
