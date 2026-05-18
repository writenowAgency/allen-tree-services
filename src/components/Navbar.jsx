import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaPhone } from 'react-icons/fa'

const NAV_LINKS = [
  { label: 'Home',       href: '#home'     },
  { label: 'About',      href: '#about'    },
  { label: 'Services',   href: '#services' },
  { label: 'Why Us',     href: '#why-us'   },
  { label: 'Contact',    href: '#contact'  },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open,    setOpen]    = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,  setActive]  = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = ['home', 'about', 'services', 'why-us', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    // Wait for mobile menu close animation (220ms) before scrolling so the
    // collapsing height doesn't shift the scroll target position.
    setTimeout(() => scrollTo(href.replace('#', '')), 250)
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center group">
            <img
              src="/Allen Tree Cutting Services-organic-nature.png"
              alt="Allen Tree Cutting Services logo"
              className="h-36 lg:h-48 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-green-700 text-white'
                      : scrolled
                      ? 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                      : 'text-white/90 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              )
            })}
            <a
              href="tel:0616807011"
              className="ml-3 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-md"
            >
              <FaPhone className="text-xs" />
              061 680 7011
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/15'
            }`}
          >
            {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '')
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active === id
                        ? 'bg-green-700 text-white'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                    }`}
                  >
                    {label}
                  </a>
                )
              })}
              <a
                href="tel:0616807011"
                className="flex items-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-xl text-sm font-semibold mt-2 transition-colors"
              >
                <FaPhone className="text-xs" />
                061 680 7011
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
