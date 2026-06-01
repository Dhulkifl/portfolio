import React, { useState, useEffect, useRef } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Address",
      value: "mustafaomar222@gmail.com",
      glowColor: "glow-card-blue",
      iconColor: "text-blue-500"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone & Mobile",
      value: "(+93) 780660062",
      glowColor: "glow-card-purple",
      iconColor: "text-purple-500"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Current Location",
      value: "Kabul, Afghanistan",
      glowColor: "glow-card-pink",
      iconColor: "text-pink-500"
    }
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative background mesh */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Get In <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to design or code your next initiative? Let's align on how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <div className={`lg:col-span-5 flex flex-col justify-between gap-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'} transition-all duration-750`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
                <span className="material-icons-outlined text-indigo-500 text-3xl">chat</span> Let's Connect
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether you have an upcoming project, technical inquiries, or want to discuss full-time integrations, I am here to help. Drop me a line!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`glass-panel p-4.5 rounded-2xl border border-gray-250/50 dark:border-gray-800/80 flex items-center gap-4 transition-all duration-500 transform hover:-translate-y-1 ${info.glowColor}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className={`p-3 rounded-xl bg-gray-150/50 dark:bg-gray-800/50 border border-gray-200/30 dark:border-gray-700/30 ${info.iconColor}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{info.title}</h4>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className={`lg:col-span-7 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'} transition-all duration-750`}>
            <div className="glass-panel rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/80">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
                  <span className="material-icons-outlined text-indigo-500 text-2xl">email</span> Send a Message
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Please provide your details below and I will respond promptly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200/60 dark:border-gray-800/80 rounded-xl focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300 bg-white/55 dark:bg-gray-900/50 text-sm text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                      placeholder="Mustafa Omar"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200/60 dark:border-gray-800/80 rounded-xl focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300 bg-white/55 dark:bg-gray-900/50 text-sm text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                      placeholder="mustafa@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200/60 dark:border-gray-800/80 rounded-xl focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300 bg-white/55 dark:bg-gray-900/50 text-sm text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                    placeholder="Project Consultation / Hiring"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200/60 dark:border-gray-800/80 rounded-xl focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300 resize-none bg-white/55 dark:bg-gray-900/50 text-sm text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                    placeholder="Explain your goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-250/30 dark:border-emerald-900/35 rounded-xl p-3.5 mt-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-450">Thank you! Your message was sent successfully.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-250/30 dark:border-rose-900/35 rounded-xl p-3.5 mt-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4.5 h-4.5 text-rose-600 dark:text-rose-450" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-xs font-semibold text-rose-800 dark:text-rose-450">Error sending your message. Please try again.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
