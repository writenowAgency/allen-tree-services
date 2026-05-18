import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

const SERVICES = [
  'Tree Felling', 'Tree Trimming', 'Tree Topping',
  'Stump Removal', 'Gardening', 'Grass Cutting',
  'Lawn Installation', 'Paving', 'Painting',
]

const NAV_LINKS = [
  { label: 'Home',        href: '#home'     },
  { label: 'About Us',    href: '#about'    },
  { label: 'Services',    href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact',     href: '#contact'  },
]

function scrollTo(href) {
  document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300" aria-label="Site footer">

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="inline-flex items-center mb-4"
              aria-label="Allen Tree Cutting Services — back to top"
            >
              <img
                src="/Allen Tree Cutting Services-organic-nature.png"
                alt="Allen Tree Cutting Services logo"
                className="h-20 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional tree felling, landscaping, and property maintenance services.
              Serving residential and commercial clients with quality and care.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: FaFacebook,  href: '#',                             label: 'Facebook',  hover: 'hover:bg-blue-600' },
                { icon: FaInstagram, href: '#',                             label: 'Instagram', hover: 'hover:bg-pink-600' },
                { icon: FaWhatsapp,  href: 'https://wa.me/27616807011',     label: 'WhatsApp',  hover: 'hover:bg-[#25D366]', external: true },
              ].map(({ icon: Icon, href, label, hover, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={label}
                  className={`w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 ${hover}`}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-5 text-sm uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-5 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-5 text-sm uppercase tracking-wide">Contact</h4>
            <div className="space-y-4 mb-5">
              <a href="tel:0616807011" className="flex items-center gap-3 group text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-green-700/30 group-hover:bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <FaPhone className="text-green-400 text-xs" aria-hidden="true" />
                </div>
                <span className="text-sm">061 680 7011</span>
              </a>
              <a
                href="https://wa.me/27616807011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-green-700/30 group-hover:bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <FaWhatsapp className="text-green-400" aria-hidden="true" />
                </div>
                <span className="text-sm">WhatsApp Us</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-amber-400 text-xs" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm">144 Majola Street</div>
                  <div className="text-xs text-gray-500">Cape Town</div>
                </div>
              </div>
            </div>
            <div className="bg-green-700/20 border border-green-700/30 rounded-xl p-4">
              <p className="text-green-400 text-xs font-bold mb-1 uppercase tracking-wide">Free Quotes</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Call or WhatsApp for a fast, no-obligation quote on any service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Allen Tree Cutting Services. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Professional Tree Felling &amp; Landscaping Services
          </p>
        </div>
      </div>
    </footer>
  )
}
