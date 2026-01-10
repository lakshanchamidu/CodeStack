import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Toast from '../components/Toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000); // 5 seconds passe auto close
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS walata yana parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      to_email: 'technologiescodexa@gmail.com',
      service: 'General Inquiry',  // Contact form ekata
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    };

    // EmailJS configuration
    emailjs.send(
      'service_143xk7d',      
      'template_ntx6a7m',  
      templateParams,
      'ZqCyiG0JlbBELnXre'       
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      showToast(`Thank you ${formData.name}! We have received your message and will get back to you soon at ${formData.email}`, 'success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      showToast('Sorry, something went wrong. Please email us directly at technologiescodexa@gmail.com or call +94 76 945 2840', 'error');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fadeInUp">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Let's discuss how we can help transform your business with innovative software solutions. We're here to answer your questions and start your project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-100 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2" htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+94 71 234 5678"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2" htmlFor="message">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-100 shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0"><FaMapMarkerAlt /></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Location</h3>
                      <p className="text-sm sm:text-base text-gray-700">Colombo, Sri Lanka</p>
                      <a 
                        href="https://maps.app.goo.gl/5Pj3XuAYiydTurCA9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-blue-600 hover:text-blue-700 transition-colors inline-block mt-1"
                      >
                        View Map →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0"><FaPhone /></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Phone</h3>
                      <a 
                        href="tel:+94769452840" 
                        className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        +94 76 945 2840
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0"><FaEnvelope /></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Email</h3>
                      <a 
                        href="mailto:technologiescodexa@gmail.com" 
                        className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors break-all"
                      >
                        technologiescodexa@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-100 shadow-md">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Business Hours</h3>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <div className="flex justify-between items-start gap-2">
                    <span className="flex-shrink-0">Monday - Friday</span>
                    <span className="text-blue-600 font-semibold text-right">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="flex-shrink-0">Saturday</span>
                    <span className="text-blue-600 font-semibold text-right">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="flex-shrink-0">Sunday</span>
                    <span className="text-gray-500 text-right">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-100 shadow-md">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex gap-3 sm:gap-4">
                  <a 
                    href="https://www.linkedin.com/company/codexatechnologies/about/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-50 text-blue-600 p-3 sm:p-4 rounded-lg text-xl sm:text-2xl hover:bg-blue-100 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/profile.php?id=61586597090877" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-50 text-blue-600 p-3 sm:p-4 rounded-lg text-xl sm:text-2xl hover:bg-blue-100 transition-colors"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
