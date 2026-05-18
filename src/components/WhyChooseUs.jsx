import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAward, FaDollarSign, FaBolt, FaStar, FaHandshake, FaSmile, FaPhone } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

const FEATURES = [
  {
    icon: FaAward,
    title: 'Experienced Team',
    desc: 'Over 10 years of proven expertise in tree care and landscaping. Skilled, safety-conscious professionals on every job.',
  },
  {
    icon: FaDollarSign,
    title: 'Affordable Prices',
    desc: 'Competitive, transparent pricing without compromising on quality. We provide honest quotes with no hidden fees.',
  },
  {
    icon: FaBolt,
    title: 'Fast Response',
    desc: 'We understand urgency. Quick response to calls and messages — including emergency tree removal services.',
  },
  {
    icon: FaStar,
    title: 'Quality Workmanship',
    desc: 'Exceptional results on every project. We don\'t leave until the job is done right and you\'re fully satisfied.',
  },
  {
    icon: FaHandshake,
    title: 'Reliable Service',
    desc: 'Punctual, professional, and dependable. We show up on time, communicate clearly, and deliver on our promises.',
  },
  {
    icon: FaSmile,
    title: 'Customer Satisfaction',
    desc: '500+ satisfied clients and growing. Our repeat customers and referrals speak to the quality of our work.',
  },
]

export default function WhyChooseUs() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-green-950 text-white relative overflow-hidden"
      aria-label="Why choose us"
    >
      {/* Dot-grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-green-400" />
            <span className="text-green-400 font-bold text-xs uppercase tracking-widest">Why Choose Us</span>
            <div className="h-px w-8 bg-green-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-heading mb-4">
            The Allen Tree Cutting
            <span className="block text-green-400">Services Difference</span>
          </h2>
          <p className="text-green-100/60 text-lg max-w-2xl mx-auto">
            We're not just another landscaping company — we're your dedicated local partners, committed to transforming and protecting your outdoor spaces.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-green-400/30 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 group-hover:bg-green-500/35 rounded-xl mb-4 transition-colors">
                <Icon className="text-green-400 text-xl" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{title}</h3>
              <p className="text-green-100/55 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-600 rounded-3xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold font-heading mb-3">
            Ready to Transform Your Property?
          </h3>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free, no-obligation quote. Fast response, professional service, results you'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0616807011"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <FaPhone />
              Call 061 680 7011
            </a>
            <a
              href="https://wa.me/27616807011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
