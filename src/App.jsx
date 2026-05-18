import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Services     from './components/Services'
import WhyChooseUs  from './components/WhyChooseUs'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import WhatsAppBtn  from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  )
}
