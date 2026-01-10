import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaRocket, FaBolt } from 'react-icons/fa';

function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp drop-shadow-sm"
              style={{
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              Building Tomorrow's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                AI Solutions Today
              </span>
            </h1>
            <p 
              className="text-xl text-gray-700 mb-8 animate-fadeInUp"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both',
              }}
            >
              We build AI-powered software solutions that help businesses innovate and grow in Sri Lanka and beyond.
            </p>
            <div 
              className="flex gap-4 justify-center animate-fadeInUp"
              style={{
                animation: 'fadeInUp 1s ease-out 0.4s both',
              }}
            >
              <Link to="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Get Started →
                </button>
              </Link>
              <Link to="/services">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Services
                </button>
              </Link>
            </div>
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-3xl rounded-full"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-white shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-gray-700 font-medium">Years of Excellence</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">100+</div>
                    <div className="text-gray-700 font-medium">Projects Delivered</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-gray-700 font-medium">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className={`py-24 px-6 bg-white transition-all duration-1000 ${isVisible['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase bg-blue-50 px-4 py-2 rounded-full">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Code Stack</span>
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Code Stack is a tech startup based in Sri Lanka, specializing in AI-powered software development. 
                We combine cutting-edge technology with local talent to deliver innovative solutions to businesses worldwide.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Our mission is to help businesses leverage the power of artificial intelligence to improve their operations, 
                enhance customer experiences, and drive growth.
              </p>
              <Link to="/about">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Learn More About Us →
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 blur-3xl rounded-3xl"></div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-animate className={`py-24 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 transition-all duration-1000 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase bg-white px-4 py-2 rounded-full shadow-sm">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transform Your Business with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We offer a range of AI-powered services to help businesses innovate and grow. 
              Our solutions are built with cutting-edge technology and a focus on delivering value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRobot />,
                title: "AI Chatbot Development",
                description: "Custom AI chatbots to enhance customer engagement and automate support."
              },
              {
                icon: <FaRocket />,
                title: "MVP Websites & Apps",
                description: "Rapid development of minimum viable products to validate your business ideas."
              },
              {
                icon: <FaBolt />,
                title: "Automation & AI Tools",
                description: "Streamline your business processes with custom automation solutions."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border-2 border-white hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-3 shadow-lg hover:shadow-2xl group relative overflow-hidden"
                style={{
                  animation: isVisible['services'] ? `fadeInUp 0.6s ease-out ${index * 0.2}s both` : 'none'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-6xl mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-blue-600">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link to="/services">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/services">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                View All Services →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" data-animate className={`py-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 transition-all duration-1000 relative overflow-hidden ${isVisible['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Innovate with <span className="text-blue-100">AI?</span>
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's discuss how we can help transform your business with AI-powered solutions. 
            Get in touch with us today to start your project.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <button className="bg-white hover:bg-blue-50 text-blue-600 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                Get in Touch →
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
