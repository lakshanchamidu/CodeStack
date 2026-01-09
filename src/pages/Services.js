import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaRocket, FaBolt, FaUsers, FaCheck } from 'react-icons/fa';

function Services() {
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

  const services = [
    {
      icon: <FaRobot />,
      title: "AI Chatbot Development",
      description: "Custom AI chatbots to enhance customer engagement and automate support.",
      features: [
        "Natural language processing capabilities",
        "Integration with existing platforms",
        "Custom training for your business domain",
        "Analytics dashboard for performance tracking",
        "24/7 customer support automation"
      ],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaRocket />,
      title: "MVP Websites & Apps",
      description: "Rapid development of minimum viable products to validate your business ideas.",
      features: [
        "Rapid prototyping and development",
        "User-centric design approach",
        "Essential features implementation",
        "Scalable architecture",
        "Post-launch support and iterations"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80"
    },
    {
      icon: <FaBolt />,
      title: "Automation & AI Tools",
      description: "Streamline your business processes with custom automation solutions.",
      features: [
        "Workflow automation",
        "Data processing and analysis",
        "Custom AI algorithms",
        "Integration with existing systems",
        "Performance monitoring and optimization"
      ],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaUsers />,
      title: "Intern-Led Product Prototypes",
      description: "Innovative prototypes developed by our talented interns under expert guidance.",
      features: [
        "Fresh perspectives and innovative ideas",
        "Cost-effective development",
        "Supervised by experienced mentors",
        "Regular progress updates",
        "Option to hire interns post-project"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fadeInUp">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            We deliver AI-powered solutions that help businesses innovate and grow. Our services combine cutting-edge technology with practical implementation.
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              Get a Free Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 sm:py-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16 px-4">
            What We <span className="text-blue-600">Offer</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 shadow-md text-center"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-blue-600 flex justify-center">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{service.description}</p>
                <button className="text-sm sm:text-base text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section 
          key={index}
          id={`service-${index}`}
          data-animate
          className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'} transition-all duration-1000 ${isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  {service.description}
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3 sm:mb-4">Key Features:</h3>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                      <FaCheck className="text-blue-600 text-base sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto">
                    Request This Service
                  </button>
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 blur-3xl"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to Transform Your <span className="text-blue-100">Business?</span>
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 px-4">
            Contact us today to discuss how our AI-powered services can help your business grow. We offer free consultations to understand your needs.
          </p>
          <Link to="/contact">
            <button className="bg-white hover:bg-blue-50 text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
