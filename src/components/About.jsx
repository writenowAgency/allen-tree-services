import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaBolt, FaDollarSign, FaSmile } from 'react-icons/fa'
import { GiPineTree } from 'react-icons/gi'

const STATS = [
  { icon: FaUsers,       label: 'Professional Team',    value: '10+',  sub: 'Skilled experts'    },
  { icon: FaBolt,        label: 'Fast Service',          value: '24hr', sub: 'Quick turnaround'   },
  { icon: FaDollarSign,  label: 'Affordable Pricing',    value: '100%', sub: 'Value for money'    },
  { icon: FaSmile,       label: 'Customer Satisfaction', value: '500+', sub: 'Happy clients'      },
]

const slideIn = (dir, delay = 0) => ({
  initial:    { opacity: 0, x: dir === 'left' ? -50 : 50 },
  animate:    { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function About() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" aria-label="About us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <motion.div
            {...slideIn('left')}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80"
                alt="Professional landscaping team working on a beautiful garden"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Experience badge */}
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl px-5 py-4 shadow-xl text-center">
                <div className="text-3xl font-black text-green-700 font-heading leading-none">10+</div>
                <div className="text-xs text-gray-500 font-semibold mt-0.5">Years Experience</div>
              </div>
            </div>
            {/* Decorative shapes */}
            <div className="absolute -bottom-5 -left-5 w-44 h-44 bg-green-100 rounded-3xl -z-10" />
            <div className="absolute -top-5 -right-5 w-28 h-28 bg-amber-100 rounded-3xl -z-10" />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-green-600" />
              <span className="text-green-600 font-bold text-xs uppercase tracking-widest">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 font-heading leading-tight mb-6">
              Your Trusted Local
              <span className="block text-green-700">Tree &amp; Landscaping Experts</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Allen Tree Cutting Services is a professional, locally owned and operated tree care and
              landscaping company. With over 10 years of hands-on experience, we deliver comprehensive
              services for both residential and commercial properties.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We pride ourselves on reliability, affordability, and quality workmanship. Our experienced
              team uses the latest tools and techniques to handle any job — from routine tree trimming to
              complete property transformations. We're fully committed to leaving your property looking
              beautiful and well-maintained.
            </p>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-green-900/20"
            >
              <GiPineTree className="text-lg" />
              Get Your Free Quote
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {STATS.map(({ icon: Icon, label, value, sub }) => (
            <div
              key={label}
              className="bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-md group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-xl mb-3 transition-colors">
                <Icon className="text-green-700 text-xl" />
              </div>
              <div className="text-2xl font-black text-gray-900 font-heading">{value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-0.5">{label}</div>
              <div className="text-xs text-gray-400">{sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
