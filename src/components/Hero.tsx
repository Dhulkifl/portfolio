import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const titles = ["Laravel Frameworks", "Vue Ecosystems", "Mobile Development", "Database Optimization"]
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let typingSpeed = isDeleting ? 40 : 80

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 2000 // Pause at full title
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTitleIndex((prev) => (prev + 1) % titles.length)
      return
    }

    const timeout = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentTitle.substring(0, charIndex - 1)
          : currentTitle.substring(0, charIndex + 1)
      )
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex])

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500 pt-24 pb-12">
      {/* Premium glowing mesh gradient background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] animate-pulse-glow delay-2000"></div>
        <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-pink-500/5 dark:bg-pink-600/10 rounded-full blur-[90px] animate-pulse-glow delay-1000"></div>
      </div>

      {/* Floating tech badges */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-[18%] left-[8%] md:left-[12%] animate-float bg-white/75 dark:bg-gray-900/60 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/80 hidden md:flex items-center gap-2 text-xs md:text-sm font-bold text-red-650 dark:text-red-400">
          <span className="material-icons-outlined text-red-500 text-base">api</span> Laravel
        </div>
        <div className="absolute top-[28%] right-[6%] md:right-[15%] animate-float-reverse bg-white/75 dark:bg-gray-900/60 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/80 hidden md:flex items-center gap-2 text-xs md:text-sm font-bold text-emerald-600 dark:text-emerald-450">
          <span className="material-icons-outlined text-emerald-500 text-base">code</span> Vue.js
        </div>
        <div className="absolute bottom-[35%] left-[2%] md:left-[6%] animate-float-reverse bg-white/75 dark:bg-gray-900/60 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/80 flex items-center gap-2 text-xs md:text-sm font-bold text-purple-650 dark:text-purple-400">
          <span className="material-icons-outlined text-purple-500 text-base">phone_android</span> Mobile Apps
        </div>
        <div className="absolute bottom-[22%] right-[8%] md:right-[12%] animate-float bg-white/75 dark:bg-gray-900/60 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/80 hidden md:flex items-center gap-2 text-xs md:text-sm font-bold text-green-605 dark:text-green-400">
          <span className="material-icons-outlined text-green-500 text-base">sync</span> API Sync
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100 dark:border-indigo-900/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Freelance
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Mustafa Omar
            </span>
          </h1>

          <div className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-semibold h-[40px] flex items-center justify-center">
            <span>Specializing in&nbsp;</span>
            <span className="text-indigo-600 dark:text-indigo-400 border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 animate-pulse">
              {typedText}
            </span>
          </div>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft responsive, high-performance web applications and mobile ecosystems. Turning complex logic into seamless, visual user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto group border border-gray-300 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-8 py-4 rounded-2xl font-bold bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              Get In Touch
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 dark:opacity-30">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-0.5">
          <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-300 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
