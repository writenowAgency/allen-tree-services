import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'

const SERVICES_LIST = [
  'Tree Felling', 'Tree Trimming', 'Tree Topping',
  'Stump Removal', 'Gardening', 'Grass Cutting',
  'Lawn Installation', 'Paving', 'Painting',
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent]  = useState(false)

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hello Allen Tree Cutting Services!\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\n` +
      (form.service ? `Service: ${form.service}\n` : '') +
      (form.message ? `Message: ${form.message}` : '')
    )
    window.open(`https://wa.me/27616807011?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', phone: '', service: '', message: '' })
    }, 6000)
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 ' +
    'focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm'

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" aria-label="Contact us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-green-600" />
            <span className="text-green-600 font-bold text-xs uppercase tracking-widest">Contact Us</span>
            <div className="h-px w-8 bg-green-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 font-heading mb-4">
            Call or WhatsApp
            <span className="text-green-700"> Us Today</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Get a free quote or ask us anything — we respond fast and love helping!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact card */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-5">Get In Touch</h3>

              <a href="tel:0616807011" className="flex items-center gap-4 mb-4 group">
                <div className="w-12 h-12 bg-green-700 group-hover:bg-green-600 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors">
                  <FaPhone className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold mb-0.5">Call Us</div>
                  <div className="text-gray-900 font-bold text-lg">061 680 7011</div>
                </div>
              </a>

              <a
                href="https://wa.me/27616807011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-4 group"
              >
                <div className="w-12 h-12 bg-[#25D366] group-hover:bg-[#1ebe5d] rounded-xl flex-shrink-0 flex items-center justify-center transition-colors">
                  <FaWhatsapp className="text-white text-xl" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold mb-0.5">WhatsApp</div>
                  <div className="text-gray-900 font-bold">+27 61 680 7011</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold mb-0.5">Address</div>
                  <div className="text-gray-900 font-bold">144 Majola Street</div>
                  <div className="text-gray-600 text-sm">Cape Town</div>
                </div>
              </div>
            </div>

            {/* Services quick list */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-gray-700 font-heading mb-4">Services We Offer</h3>
              <ul className="space-y-2">
                {SERVICES_LIST.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 flex-shrink-0 text-xs" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-44 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative border border-green-200">
              <div className="text-center z-10">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FaMapMarkerAlt className="text-green-700 text-3xl mx-auto mb-2" aria-hidden="true" />
                </motion.div>
                <p className="text-gray-700 text-sm font-semibold">144 Majola Street</p>
                <p className="text-gray-500 text-xs mt-0.5">Cape Town</p>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">Request a Free Quote</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <FaCheckCircle className="text-green-600 text-3xl" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Message Opened in WhatsApp!</h4>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Your message is pre-filled in WhatsApp. Just tap Send — we'll respond as soon as possible!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={set('name')}
                        className={inputBase}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="061 234 5678"
                        value={form.phone}
                        onChange={set('phone')}
                        className={inputBase}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service Required
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={set('service')}
                      className={inputBase}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project — location, size, any special requirements…"
                      value={form.message}
                      onChange={set('message')}
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 active:bg-green-800 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-green-900/15"
                    >
                      <MdSend className="text-lg" />
                      Send via WhatsApp
                    </button>
                    <a
                      href="tel:0616807011"
                      className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <FaPhone className="text-sm" />
                      Call Us Now
                    </a>
                  </div>

                  <p className="text-xs text-gray-400 pt-1">
                    Submitting this form will open WhatsApp with your details pre-filled.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
