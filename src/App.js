import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBars, FaTimes} from 'react-icons/fa';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import BookConsultation from './pages/BookConsultation';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
              <img src={`${process.env.PUBLIC_URL}/images/logo.jpeg`} alt="Codexa Logo" className="h-14 w-20 sm:h-16 sm:w-24 rounded-lg object-cover" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
            </div>
            
            {/* Desktop Button */}
            <Link to="/book-consultation" className="hidden md:block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                Book Service
              </button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-800 text-2xl p-2 hover:text-blue-600 transition-colors"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-blue-200 shadow-lg">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b border-blue-100" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b border-blue-100" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b border-blue-100" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b border-blue-100" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Link to="/book-consultation" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                    Book Service
                  </button>
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white border-t border-blue-200 py-8 sm:py-12 px-4 sm:px-6 shadow-inner">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-4">
                  <img src={`${process.env.PUBLIC_URL}/images/logo.jpeg`} alt="Codexa Logo" className="h-16 w-24 rounded-lg object-cover" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Building tomorrow's software solutions today.</p>
                <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                  <a href="https://www.linkedin.com/company/katisatech/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-xl sm:text-2xl">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-xl sm:text-2xl">
                    <FaTwitter />
                  </a>
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-xl sm:text-2xl">
                    <FaFacebook />
                  </a>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-gray-800 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                  <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">→ Home</Link>
                  <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">→ Services</Link>
                  <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">→ About Us</Link>
                  <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">→ Contact</Link>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-gray-800 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Our Services</h4>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                  <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">→ Academic Project Development</Link>
                  <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">→ Smart AI Chatbot Solutions</Link>
                  <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">→ Professional Business Websites</Link>
                  <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">→ Mobile App Development</Link>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-gray-800 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h4>
                <div className="flex flex-col gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    Colombo, Sri Lanka
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-blue-600" />
                    +94 76 945 2840
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-600" />
                    technologiescodexa@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-blue-200 pt-6 sm:pt-8 text-center text-gray-600 text-xs sm:text-sm">
              © 2026 Codexa. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
