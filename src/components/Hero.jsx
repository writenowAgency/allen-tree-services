import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaChevronDown } from 'react-icons/fa'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-emerald-800" />
      {/* Radial texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Tree silhouettes */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none select-none" aria-hidden="true">
        <svg viewBox="0 0 1440 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-auto opacity-20">
          {/* Far-back trees */}
          <polygon points="120,220 160,100 200,220" fill="#4ade80" />
          <polygon points="155,220 200,80 245,220" fill="#4ade80" />
          <polygon points="190,220 240,110 290,220" fill="#4ade80" />
          <polygon points="1200,220 1240,95 1280,220" fill="#4ade80" />
          <polygon points="1235,220 1280,75 1325,220" fill="#4ade80" />
          <polygon points="1270,220 1320,105 1370,220" fill="#4ade80" />
          {/* Mid trees */}
          <polygon points="50,220 100,60 150,220"  fill="#22c55e" />
          <polygon points="280,220 340,50 400,220" fill="#22c55e" />
          <polygon points="1050,220 1110,55 1170,220" fill="#22c55e" />
          <polygon points="1310,220 1370,60 1430,220" fill="#22c55e" />
          {/* Ground strip */}
          <rect x="0" y="210" width="1440" height="10" fill="#16a34a" opacity="0.4" />
        </svg>
      </div>
      {/* Bottom fade into white */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-400/8 rounded-full blur-3xl -translate-x-1/3" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">

        {/* Trust badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 px-5 py-2 rounded-full text-sm font-medium mb-7">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Professional Tree &amp; Landscaping Services
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white font-heading leading-[1.05] mb-5"
          style={{ textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
        >
          Allen Tree
          <span className="block text-green-400">Cutting Services</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl sm:text-2xl text-green-100 font-semibold mb-4 max-w-3xl mx-auto"
        >
          Professional Tree Felling, Landscaping &amp; Property Maintenance Services
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Reliable, affordable, and expert-quality services for residential and commercial properties.
          Your trusted local team for every tree and landscape need.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scroll('contact') }}
            className="group inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white px-9 py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg shadow-green-900/40 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-1 w-full sm:w-auto"
          >
            Get a Free Quote
            <FaChevronDown className="text-sm group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://wa.me/27616807011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a550] text-white px-9 py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Phone */}
        <motion.a
          href="tel:0616807011"
          {...fadeUp(0.5)}
          className="inline-flex items-center gap-3 text-white hover:text-green-300 transition-colors text-lg font-semibold"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-amber-500/25 rounded-xl">
            <FaPhone className="text-amber-400" />
          </span>
          061 680 7011
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 flex justify-center"
      >
        <motion.button
          onClick={() => scroll('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          aria-label="Scroll to About section"
          className="text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        >
          <FaChevronDown className="text-2xl" />
        </motion.button>
      </motion.div>
    </section>
  )
}
