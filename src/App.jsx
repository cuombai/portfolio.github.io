import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ServicesOffered from './components/ServicesOffered';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Live from './components/Live';

function App() {
  useEffect(() => {
    const footer = document.querySelector('.footer');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const atBottom = scrollY + windowHeight >= documentHeight - 10;

      if (footer) {
        if (atBottom) {
          footer.classList.remove('hidden');
        } else {
          footer.classList.add('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/portfolio.github.io"
          element={
            <>
              <div style={{ height: '80px' }} />
              <div className="main-content">
                <section id="home">
                  <Hero />
                </section>
                <Pricing />
                <section id="services">
                  <ServicesOffered />
                </section>
                <section>
                  <Live/>
                </section>
                <section id="clients">
                  <AboutUs />
                  <Testimonials />
                </section>
                <section id="contact">
                  <ContactForm />
                </section>
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
