import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GiAxeInLog, GiGardeningShears, GiPineTree,
  GiStumpRegrowth, GiTrowel, GiGrass, GiBrickWall, GiPaintRoller,
} from 'react-icons/gi'
import { MdGrass as MdGrassIcon } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const SERVICES = [
  {
    icon: GiAxeInLog,
    title: 'Tree Felling',
    desc: 'Safe and efficient removal of trees of any size. We ensure minimal disruption to your property and surrounding landscape.',
    palette: { bg: 'bg-green-50', iconBg: 'bg-green-100', icon: 'text-green-700', border: 'hover:border-green-300' },
  },
  {
    icon: GiGardeningShears,
    title: 'Tree Trimming',
    desc: 'Expert pruning and shaping to promote healthy growth, improve appearance, and safely remove hazardous branches.',
    palette: { bg: 'bg-emerald-50', iconBg: 'bg-emerald-100', icon: 'text-emerald-700', border: 'hover:border-emerald-300' },
  },
  {
    icon: GiPineTree,
    title: 'Tree Topping',
    desc: 'Professional height reduction services to manage overgrown trees and reduce risk to structures and power lines.',
    palette: { bg: 'bg-teal-50', iconBg: 'bg-teal-100', icon: 'text-teal-700', border: 'hover:border-teal-300' },
  },
  {
    icon: GiStumpRegrowth,
    title: 'Stump Removal',
    desc: 'Complete stump grinding and removal. We eliminate unsightly stumps and prevent unwanted regrowth permanently.',
    palette: { bg: 'bg-lime-50', iconBg: 'bg-lime-100', icon: 'text-lime-700', border: 'hover:border-lime-300' },
  },
  {
    icon: GiTrowel,
    title: 'Gardening',
    desc: 'Comprehensive garden maintenance, planting, and design. We keep your outdoor spaces thriving year-round.',
    palette: { bg: 'bg-green-50', iconBg: 'bg-green-100', icon: 'text-green-700', border: 'hover:border-green-300' },
  },
  {
    icon: GiGrass,
    title: 'Grass Cutting',
    desc: 'Regular lawn mowing and precise edging services for well-kept, pristine lawns on any size property.',
    palette: { bg: 'bg-emerald-50', iconBg: 'bg-emerald-100', icon: 'text-emerald-700', border: 'hover:border-emerald-300' },
  },
  {
    icon: MdGrassIcon,
    title: 'Lawn Installation',
    desc: 'New lawn installation including site preparation, soil conditioning, and quality grass planting for instant curb appeal.',
    palette: { bg: 'bg-teal-50', iconBg: 'bg-teal-100', icon: 'text-teal-700', border: 'hover:border-teal-300' },
  },
  {
    icon: GiBrickWall,
    title: 'Paving',
    desc: 'Quality paving solutions for driveways, walkways, and patios. Durable, attractive finishes that enhance your property value.',
    palette: { bg: 'bg-stone-50', iconBg: 'bg-stone-100', icon: 'text-stone-700', border: 'hover:border-stone-300' },
  },
  {
    icon: GiPaintRoller,
    title: 'Painting',
    desc: 'Interior and exterior painting services that refresh, protect, and beautify your property with professional results.',
    palette: { bg: 'bg-amber-50', iconBg: 'bg-amber-100', icon: 'text-amber-700', border: 'hover:border-amber-300' },
  },
]

export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-green-600" />
            <span className="text-green-600 font-bold text-xs uppercase tracking-widest">Our Services</span>
            <div className="h-px w-8 bg-green-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 font-heading mb-4">
            Comprehensive Tree &amp;
            <span className="text-green-700"> Landscaping Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From tree felling to paving — a full range of professional services to transform and maintain your property.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc, palette }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className={`${palette.bg} ${palette.border} border border-transparent rounded-2xl p-6 cursor-default group transition-all duration-300 hover:shadow-xl`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 ${palette.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`${palette.icon} text-2xl`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
              <div className="pt-4 border-t border-black/5">
                <a
                  href="https://wa.me/27616807011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${palette.icon} text-sm font-semibold hover:opacity-70 transition-opacity inline-flex items-center gap-1`}
                >
                  Get a Quote
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-5">Not sure which service you need? We'll help you figure it out.</p>
          <a
            href="https://wa.me/27616807011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <FaWhatsapp className="text-xl" />
            Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
