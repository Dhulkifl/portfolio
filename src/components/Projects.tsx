import React, { useState, useEffect, useRef } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [

    {
      id: 8,
      title: "Gas Logistics & Financial ERP Portal",
      description: "Enterprise portal tracking cross-border gas logistics, driver settlements, multi-currency money exchanges (Sarafi), double-entry cashbox balances, and real-time owner equity statements.",
      longDescription: "An enterprise-scale logistics and financial ledger system built for international energy import and distribution networks. The platform automates end-to-end gas shipment dispatching, truck transport logs, transit inventory tracking, driver cash advances, expense declarations, and automated driver trip settlements. It features a complete custom Sarafi (money exchange) module tracking multi-currency balances, double-entry accounting models recording cashbox and safe vaults, automated monthly payroll calculations, and real-time owner equity reporting that calculates profit distribution percentages dynamically based on capital shares.",
      image: "./gas-erp-2.PNG",
      technologies: ["PHP (Laravel)", "MySQL", "Money Exchange API", "Financial Auditing"],
      category: "Web",
      featured: true,
    },
    {
      id: 2,
      title: "Tailoring & Apparel ERP System",
      description: "Enterprise apparel ERP managing customer design sheets, tailoring measurements, automated PDF invoice printing, multi-warehouse fabrics inventory, and GSM SMS order tracking.",
      longDescription: "A production-grade ERP system built to manage custom tailoring workflows and apparel retail stores. The application handles highly detailed customer measurement profile sheets for custom apparel (waistcoats, coats, trousers, shirts) and supports printing automated PDF design templates and invoice sheets. It includes real-time multi-warehouse inventory management with fabric roll length adjustments, inter-warehouse stock transfers, and a double-entry ledger tracking general accounting, cash flow, and supplier accounts. Furthermore, it incorporates an integrated GSM SMS gateway that automatically pushes status alerts to customers when garments transition from drafting to stitching and final pickup.",
      image: "./tailor-erp-3.PNG",
      technologies: ["PHP (Laravel)", "Tailwind CSS", "MySQL", "PDF Generator", "SMS API"],
      category: "Web",
      githubUrl: "https://github.com/johndeveloper/analytics",
      featured: false,
    },
    {
      id: 9,
      title: "Asset Management & Trading ERP",
      description: "Web-based asset ledger and multi-currency trading ERP built with Laravel, Vue 3, and Inertia.js supporting asset lifecycles, stock transfers, and real-time equity distribution.",
      longDescription: "A high-performance, single-page application (SPA) asset management and trading ERP built using Laravel, Vue.js 3, Inertia.js, and Tailwind CSS. The platform coordinates asset lifecycle tracking (acquisitions, transfers, depreciations, disposals), multi-currency trade transactions, purchasing pipelines, sales return processing, and automated inventory adjustments. It is built on top of a strict double-entry general ledger architecture with automated financial closing logs, profit/loss balance sheets, and capital account distribution tracking for multi-party business structures.",
      image: "./asset-erp.PNG",
      technologies: ["PHP (Laravel)", "Vue.js", "Inertia.js", "MySQL", "Tailwind CSS"],
      category: "Web",
      featured: true,
    },
    {
      id: 1,
      title: "Residential Building Management System",
      description: "Full-stack property management solution with automated billing and financial reporting",
      longDescription: "A custom-developed full-stack solution for residential building management, featuring multi-project and tenant management, automated fee collection for maintenance, electricity, power generators, and parking, PDF invoice generation, payment tracking, and multi-account financial management for income, assets, and expenses. Includes employee salary tracking, staff records, and comprehensive reporting tools for financial summaries, payment history, and account balance monitoring.",
      image: "./onyx.PNG",
      technologies: ["PHP (Laravel)", "MySQL", "Bootstrap 5", "jQuery"],
      category: "Web",
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/johndeveloper/taskapp",
      featured: true,
    },
    {
      id: 3,
      title: "Opioughts",
      description: "Platform to save opinions, ideas, and thoughts with text and audio recording capabilities",
      longDescription: "A Laravel 11 web application for capturing and organizing personal thoughts, opinions, and ideas. Features include text-based thought creation with rich content management, audio recording and playback capabilities, advanced tagging and categorization system, search and filtering functionality, and a comprehensive dashboard for tracking thought patterns. Built with Laravel 11, Tailwind CSS, Alpine.js, and MySQL, the app provides a modern, responsive interface for personal knowledge management with plans for AI-powered features like speech-to-text transcription, sentiment analysis, and mobile PWA capabilities.",
      image: "./opioughts.PNG",
      technologies: ["Alpine.js", "Laravel", "Tailwind CSS", "MySQL"],
      category: "Web",
      liveUrl: "https://weather-app-demo.com",
      githubUrl: "https://github.com/johndeveloper/weather",
      featured: false,
    },
    {
      id: 5,
      title: "Movie Discovery App",
      description: "Vue-based movie discovery application with search functionality and analytics tracking",
      longDescription: "A modern Vue web application built with Vite that allows users to discover and search for movies using The Movie Database (TMDb) API. Features include real-time movie search with debounced input, popular movie discovery, responsive design with Tailwind CSS, and search analytics tracking through Appwrite backend integration. The app displays movie cards with posters and tracks user search behavior for analytics purposes. The project uses Vue 3, Vite for build tooling, Tailwind CSS for styling, and integrates with both TMDb API for movie data and Appwrite for backend analytics tracking.",
      image: "./moovieflex.PNG",
      technologies: ["Vue", "REST API", "AppWrite", "Tailwind CSS"],
      category: "Web",
      githubUrl: "https://github.com/johndeveloper/social-app",
      featured: true,
    },
    {
      id: 10,
      title: "Tailors ERP's SMS Bridge",
      description: "Android background service and HTTP SMS gateway bridge exposing the device SIM card to ERP systems for automated customer notifications.",
      longDescription: "A specialized developer tool and utility application for Android that acts as a local HTTP SMS gateway. By hosting a custom lightweight HTTP Server inside a foreground Service on the mobile device (running on port 8080), it receives incoming POST requests from localized ERP systems (such as the Tailoring & Apparel ERP) and translates them into system SMS commands using Android's native SmsManager. The app features a live UI log of incoming and sent messages, foreground notification persistence to prevent OS-level process garbage collection, dynamic update broadcasts, and robust error-handling states.",
      image: "./android.png",
      technologies: ["Java (Android)", "HTTP Server (Sockets)", "JSON API", "Android Service"],
      category: "Mobile",
      featured: true,
    },
    {
      id: 6,
      title: "School Attendance Android API App",
      description: "Mobile app for student attendance tracking using QR code scanning",
      longDescription: "Developed an Android application to address challenges with biometric fingerprint recognition for younger students (ages 5–8) in a school management system. The app integrates with a server via API to fetch and store student information in a local database, updating for new students as needed. It features a QR code scanner to read student ID cards, marking attendance for the day, storing entry details, and sending automated SMS notifications to parents using phone numbers from student records. A sync feature allows all attendance data to be sent back to the server via API with a single button press, ensuring seamless integration with the school’s system.",
      image: "./android.png",
      technologies: ["Java (Android)", "XML", "SQLite"],
      category: "Mobile",
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/johndeveloper/portfolio",
      featured: false,
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design and animations",
      longDescription: "A modern, responsive portfolio website built with Vue and Tailwind CSS, featuring smooth animations, dark mode support, and optimized performance.",
      image: "./portfolio.PNG",
      technologies: ["Vue", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "Web",
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/johndeveloper/portfolio",
      featured: false,
    },
  ]

  const categories = ['All', 'Web', 'Mobile']
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          clearTimeout(fallbackTimer)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated showcase of applications built with high performance, scalability, and user-centric design in mind.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-1.5 shadow-inner border border-gray-200/50 dark:border-gray-800/80 flex gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${selectedCategory === category
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-800/30'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-800/50 glow-card-purple group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="relative overflow-hidden aspect-video cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between h-[260px]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-900/50 uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-lg text-xs font-medium border border-gray-200/30 dark:border-gray-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-lg text-xs font-bold border border-indigo-100/50 dark:border-indigo-900/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 group/btn"
                    >
                      Explore Project
                      <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          title="View Repository"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          title="View Live Demo"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-start justify-center p-4 pt-24 md:pt-28 z-[100] transition-all duration-300 overflow-y-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full shadow-2xl border border-gray-200 dark:border-gray-800/80 relative mb-8">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md text-white rounded-full p-2.5 shadow-lg hover:bg-white/20 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 backdrop-blur-md px-3 py-1 rounded-md border border-indigo-900/40 mb-3 inline-block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Project Description</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">{selectedProject.longDescription}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Tech Stack & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 px-3.5 py-1.5 rounded-xl text-sm font-semibold border border-indigo-100/50 dark:border-indigo-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
