import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50" aria-label="WhatsApp contact button">
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <motion.a
        href="https://wa.me/27616807011"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Allen Tree Cutting Services on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-xl hover:shadow-2xl transition-colors duration-300"
      >
        <FaWhatsapp className="text-3xl" aria-hidden="true" />
      </motion.a>
    </div>
  )
}
