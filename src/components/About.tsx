import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-8 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            About <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A software engineer building clean, reliable backend architectures and engaging frontends.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Building Web & Mobile Systems
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a software developer working at{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                Ertibat Technology
              </span>{" "}
              in Kabul, Afghanistan. What started as pure curiosity about how computers and operating systems run has grown into a career crafting user-centric products.
            </p>

            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">Laravel (PHP)</span>,{" "}
              <span className="font-semibold text-gray-900 dark:text-white">Vue.js</span>, and mobile application frameworks like{" "}
              <span className="font-semibold text-gray-900 dark:text-white">Java & Flutter</span>. I prioritize maintainability, clean code structure, and modern design standards.
            </p>

            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              From design drafts and API specifications to production deployment, I focus on delivering optimal performance and robust codebase hygiene.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { label: "Laravel Apps", val: "10+" },
                { label: "Mobile Apps", val: "5+" },
                { label: "API Integrations", val: "5+" },
              ].map((stat, i) => (
                <div key={i} className="glass-panel p-4 rounded-2xl text-center border border-gray-200 dark:border-gray-800">
                  <div className="text-2xl md:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">{stat.val}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-8 shadow-xl border border-indigo-100/50 dark:border-indigo-900/30 glow-card-indigo group transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5">
                <span className="material-icons-outlined text-indigo-500 text-2xl">computer</span>
                Tech Domains
              </h3>

              <div className="space-y-5">
                {[
                  {
                    title: "Backend Development",
                    desc: "Laravel Framework, Laravel Sanctum, MySQL, SQLite Database structures.",
                    icon: "construction",
                  },
                  {
                    title: "Frontend Engineering",
                    desc: "Vue, Nuxt.js, jQuery, Tailwind CSS responsive styling.",
                    icon: "code",
                  },
                  {
                    title: "Mobile Development",
                    desc: "Native Java (Android Studio SDK), Flutter framework & Dart API clients.",
                    icon: "phone_android",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group/item">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center text-lg shadow-sm group-hover/item:scale-105 transition-transform duration-300">
                      <span className="material-icons-outlined text-indigo-500 text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white group-hover/item:text-indigo-500 dark:group-hover/item:text-indigo-450 transition-colors duration-300 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

