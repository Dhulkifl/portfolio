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
  const [isVisible, setIsVisible] = useState(true) // Start with true for mobile compatibility
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
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
      id: 2,
      title: "Tailoring Management System",
      description: "Web-based tailoring shop management system for custom clothing orders and measurements",
      longDescription: "A comprehensive web application built with Laravel 10 for managing a tailoring business. The system handles customer management, custom clothing orders (coats, trousers, waistcoats), detailed measurements tracking, order processing, reporting, and handover management. Features include customer search, order tracking, measurement storage for different garment types, invoice generation, and comprehensive reporting. Built with modern web technologies including Bootstrap, and SweetAlert2 for enhanced user experience. Includes Persian/Jalali date support and toast notifications for better user feedback.",
      image: "./tailor-shop.PNG",
      technologies: ["PHP (Laravel)", "Chart.js", "SweetAlert", "jQuery", "MySQL" ],
      category: "Web",
      githubUrl: "https://github.com/johndeveloper/analytics",
      featured: false,
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
      id: 4,
      title: "E-CLOTHES - Laravel E-commerce Platform",
      description: "A Laravel-based e-commerce web application with Bootstrap frontend and Livewire components for interactive shopping experiences",
      longDescription: "A comprehensive e-commerce platform built with Laravel 9 framework, featuring a Bootstrap-based responsive frontend template called 'Ecomart'. The application includes modern web technologies like Livewire for dynamic components, Laravel Sanctum for API authentication, TailwindCSS for styling, and SweetAlert2 for enhanced user interactions. The platform supports multi-language and multi-currency functionality, product categories including electronics, fashion, home & garden, and beauty products. It includes standard e-commerce features like shopping cart, wishlist, user authentication, product search, and order management. The frontend template appears to be based on a premium Bootstrap e-commerce theme with features like product comparison, newsletter subscription, and responsive design optimized for both desktop and mobile devices",
      image: "./e-clothes.PNG",
      technologies: ["PHP (Laravel)", "Tailwind CSS", "MySQL", "jQuery"],
      category: "Web",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/johndeveloper/ecommerce",
      featured: true,
    },
    {
      id: 5,
      title: "Movie Discovery App",
      description: "React-based movie discovery application with search functionality and analytics tracking",
      longDescription: "A modern React web application built with Vite that allows users to discover and search for movies using The Movie Database (TMDb) API. Features include real-time movie search with debounced input, popular movie discovery, responsive design with Tailwind CSS, and search analytics tracking through Appwrite backend integration. The app displays movie cards with posters and tracks user search behavior for analytics purposes. The project uses React 19, Vite for build tooling, Tailwind CSS for styling, and integrates with both TMDb API for movie data and Appwrite for backend analytics tracking.",
      image: "./moovieflex.PNG",
      technologies: ["React", "REST API", "AppWrite", "Tailwind CSS"],
      category: "Web",
      githubUrl: "https://github.com/johndeveloper/social-app",
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
      longDescription: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, dark mode support, and optimized performance.",
      image: "./portfolio.PNG",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
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
    // Fallback timeout to ensure visibility on mobile devices
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    // Intersection Observer with mobile-friendly settings
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          clearTimeout(fallbackTimer)
        }
      },
      { 
        threshold: 0.1, // Lower threshold for mobile
        rootMargin: '50px' // Trigger earlier
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
    <section ref={sectionRef} id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg border border-gray-200 dark:border-gray-700">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group opacity-100 translate-y-0"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center group/btn"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <span className="mr-2">🛠️</span>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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