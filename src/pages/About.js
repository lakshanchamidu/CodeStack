import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaStar, FaGem, FaGlobeAmericas, FaBullseye, FaLinkedin } from 'react-icons/fa';

function About() {
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

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and technology."
    },
    {
      icon: <FaStar />,
      title: "Quality",
      description: "We deliver high-quality solutions with attention to detail and commitment to excellence."
    },
    {
      icon: <FaGem />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client service."
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Global Impact",
      description: "We aim to showcase Sri Lankan talent on the global stage and make a positive impact."
    }
  ];

  const goals = [
    {
      title: "Expand Our Software Solutions",
      description: "Develop more specialized software solutions for industries like healthcare, finance, and education, leveraging cutting-edge technologies to solve complex problems."
    },
    {
      title: "Grow Our Team",
      description: "Expand our team of talented developers and AI specialists to take on more ambitious projects and deliver even greater value to our clients."
    },
    {
      title: "Global Partnerships",
      description: "Form partnerships with international tech companies and clients to expand our service offerings and bring more innovative software solutions to market."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fadeInUp">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We're a tech startup in Sri Lanka delivering custom software solutions including websites, mobile apps, chatbots, and academic projects for clients worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" data-animate className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white transition-all duration-1000 ${isVisible['story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                Codexa was founded in 2023 with a vision to deliver cutting-edge software solutions to businesses worldwide from our base in Sri Lanka.
              </p>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                We recognized the growing demand for quality software solutions and saw an opportunity to showcase Sri Lankan talent on the global stage. Our team combines technical expertise with creative innovation to deliver exceptional results across multiple domains.
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                Today, Codexa specializes in developing professional websites, mobile applications, AI chatbots, and providing expert assistance with academic software projects for clients worldwide.
              </p>
            </div>
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team meeting" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" data-animate className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-blue-50 transition-all duration-1000 ${isVisible['mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-100 shadow-md">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-blue-600"><FaBullseye /></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                To deliver innovative software solutions that help businesses thrive in an increasingly digital world, while showcasing the talent and capabilities of Sri Lankan tech professionals.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-100 shadow-md">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-blue-600"><FaStar /></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                To be recognized globally as a leading software solutions provider from Sri Lanka, delivering world-class software that drives innovation and showcases the exceptional talent of our tech community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" data-animate className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white transition-all duration-1000 ${isVisible['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              These core principles guide everything we do at Codexa, from how we develop software to how we serve our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 shadow-md text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-blue-600 flex justify-center">{value.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section id="team" data-animate className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-1000 ${isVisible['team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Team</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Our diverse team of experts is passionate about technology and making a positive impact through innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-full rounded-2xl overflow-hidden border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300" style={{aspectRatio: '3/4', maxHeight: '320px'}}>
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/team-member-1.jpeg`}
                    alt="Team Member"
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Diyath Lakpura</h3>
                <p className="text-blue-600 text-base sm:text-lg font-semibold mb-3">Developer</p>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  Passionate developer specializing in modern web technologies and building scalable applications.
                </p>
                <div className="flex gap-4 justify-center">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl transform hover:scale-110 duration-200">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-full rounded-2xl overflow-hidden border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300" style={{aspectRatio: '3/4', maxHeight: '320px'}}>
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/team-member-2.jpeg`}
                    alt="Team Member"
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Chamidu Lakshan</h3>
                <p className="text-blue-600 text-base sm:text-lg font-semibold mb-3">Developer</p>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  Creative developer focused on creating elegant solutions and delivering exceptional user experiences.
                </p>
                <div className="flex gap-4 justify-center">
                  <a href="https://www.linkedin.com/in/chamidulakshan/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl transform hover:scale-110 duration-200">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-full rounded-2xl overflow-hidden border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300" style={{aspectRatio: '3/4', maxHeight: '320px'}}>
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/team-member-3.jpeg`}
                    alt="Team Member"
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Pasindu Randula</h3>
                <p className="text-blue-600 text-base sm:text-lg font-semibold mb-3">Developer</p>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  Skilled developer with expertise in innovative technologies and problem-solving approaches.
                </p>
                <div className="flex gap-4 justify-center">
                  <a href="https://www.linkedin.com/in/pasindu-randula-514693294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl transform hover:scale-110 duration-200">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sri Lanka */}
      <section id="srilanka" data-animate className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white transition-all duration-1000 ${isVisible['srilanka'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sri Lanka" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why <span className="text-blue-600">Sri Lanka</span>
              </h2>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                Sri Lanka has a rapidly growing tech ecosystem with talented professionals and a strong educational foundation. The country's strategic location and time zone make it ideal for serving global clients.
              </p>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                By operating from Sri Lanka, we can deliver world-class solutions while maintaining competitive pricing and providing exceptional value to our clients. Our team brings together local talent with global expertise.
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                We're proud to showcase Sri Lankan innovation on the global stage and contribute to the growth of the country's technology sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section id="goals" data-animate className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-blue-50 transition-all duration-1000 ${isVisible['goals'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Future <span className="text-blue-600">Goals</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              We have ambitious plans for the future of Codexa and our impact on the tech ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {goals.map((goal, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 shadow-md"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{goal.title}</h3>
                <p className="text-gray-700">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Work With <span className="text-blue-100">Us?</span>
          </h2>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Whether you're looking to hire us for your next project or want to join our growing team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
