import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar w-full h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 transition-all duration-300 ${
        isScrolled 
          ? 'max-w-5xl' 
          : 'max-w-7xl'
      }`}>
        <div className={`rounded-2xl border transition-all duration-300 px-6 py-3 flex justify-between items-center ${
          isScrolled 
            ? 'glass-panel shadow-lg border-gray-200/50 dark:border-gray-800/80' 
            : 'bg-transparent border-transparent'
        }`}>
          <div className="flex-shrink-0">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('hero')}>
              Mustafa Omar
            </h2>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><button onClick={() => scrollToSection('hero')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors duration-300 text-sm font-semibold cursor-pointer">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors duration-300 text-sm font-semibold cursor-pointer">About</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors duration-300 text-sm font-semibold cursor-pointer">Skills</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors duration-300 text-sm font-semibold cursor-pointer">Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors duration-300 text-sm font-semibold cursor-pointer">Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors duration-300 text-sm font-semibold cursor-pointer">Contact</button></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={() => toggleTheme()}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-750 transition-all duration-300 cursor-pointer"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            >
              {isDark ? (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 space-y-1.5 rounded-xl border border-gray-200/50 dark:border-gray-800/80 p-2 cursor-pointer bg-white/20 dark:bg-gray-900/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="p-4 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/85">
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors text-sm font-semibold py-1">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors text-sm font-semibold py-1">About</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors text-sm font-semibold py-1">Skills</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors text-sm font-semibold py-1">Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors text-sm font-semibold py-1">Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white transition-colors text-sm font-semibold py-1">Contact</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header