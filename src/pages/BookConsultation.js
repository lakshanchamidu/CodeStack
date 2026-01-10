import React, { useState } from 'react';
import { FaPhone, FaLightbulb, FaRocket, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

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
      service: formData.service,
      date: formData.date,
      time: formData.time,
      message: formData.message,
      to_email: 'technologiescodexa@gmail.com'
    };

    emailjs.send(
      'service_143xk7d',      
      'template_7ewygkh',     
      templateParams,
      'ZqCyiG0JlbBELnXre'       
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Thank you! Your service booking has been received. We will contact you soon at ' + formData.email);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      alert('Sorry, something went wrong. Please email us directly at technologiescodexa@gmail.com or call +94 76 945 2840');
    });
  };

  const services = [
    "Academic Project Development",
    "Smart AI Chatbot Solutions",
    "Professional Business Websites",
    "Mobile App Development",
    "Custom Software Development",
    "Other"
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fadeInUp">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Service</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Schedule a service booking with our experts to discuss your project and how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-2 border-blue-100 shadow-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Schedule Your Session</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2 font-medium" htmlFor="name">
                    Full Name *
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
                  <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2 font-medium" htmlFor="email">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2 font-medium" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+94 71 234 5678"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2 font-medium" htmlFor="company">
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
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2 font-medium" htmlFor="service">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2 font-medium" htmlFor="date">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2 font-medium" htmlFor="time">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-700 mb-1.5 sm:mb-2 font-medium" htmlFor="message">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-blue-200 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your project or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Book Service
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16">
            What to <span className="text-blue-600">Expect</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-blue-100 shadow-md text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-blue-600 flex justify-center"><FaPhone /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">1. Initial Call</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We'll discuss your project requirements, goals, and timeline in detail.
              </p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-blue-100 shadow-md text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-blue-600 flex justify-center"><FaLightbulb /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">2. Solution Design</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our experts will propose tailored solutions that fit your needs and budget.
              </p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-blue-100 shadow-md text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-blue-600 flex justify-center"><FaRocket /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">3. Next Steps</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We'll outline the project roadmap and help you get started immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12">
            Why Book Your <span className="text-blue-600">Service?</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
              <FaCheck className="text-2xl sm:text-3xl text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Free Expert Advice</h3>
                <p className="text-sm sm:text-base text-gray-700">Get professional insights and recommendations at no cost.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
              <FaCheck className="text-2xl sm:text-3xl text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Tailored Solutions</h3>
                <p className="text-sm sm:text-base text-gray-700">Receive customized recommendations based on your specific needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
              <FaCheck className="text-2xl sm:text-3xl text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">No Obligation</h3>
                <p className="text-sm sm:text-base text-gray-700">Learn about our services without any commitment required.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
              <FaCheck className="text-2xl sm:text-3xl text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Fast Response</h3>
                <p className="text-sm sm:text-base text-gray-700">We'll confirm your booking within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookConsultation;
