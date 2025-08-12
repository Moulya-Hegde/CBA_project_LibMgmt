import React, { useState, useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Chief Librarian",
      institution: "Stanford University Libraries",
      location: "California, USA",
      avatar: "👩‍🎓",
      institutionLogo: "🎓",
      rating: 5,
      content: "LibraryHub transformed our 500,000+ book collection management. The AI-powered cataloging system reduced our processing time by 75%, and patron satisfaction scores increased dramatically.",
      metrics: {
        improvement: "75%",
        timeframe: "6 months",
        satisfaction: "4.9/5"
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Library System Director",
      institution: "Chicago Public Library",
      location: "Illinois, USA",
      avatar: "👨‍💼",
      institutionLogo: "🏛️",
      rating: 5,
      content: "Managing 81 branch locations became seamless with LibraryHub. Real-time inventory tracking across all branches and centralized analytics have revolutionized our operations.",
      metrics: {
        branches: "81",
        efficiency: "+89%",
        costSaving: "$2.4M"
      }
    },
    {
      id: 3,
      name: "Prof. Emily Watson",
      role: "Information Systems Manager",
      institution: "MIT Libraries",
      location: "Massachusetts, USA", 
      avatar: "👩‍💻",
      institutionLogo: "🔬",
      rating: 5,
      content: "The integration capabilities are outstanding. LibraryHub seamlessly connected with our existing research databases and student information systems. Implementation was flawless.",
      metrics: {
        integration: "15 systems",
        uptime: "99.98%",
        users: "45K+"
      }
    }
  ];

  const companyLogos = [
    { name: "Harvard", logo: "🎓", color: "from-red-600 to-red-700" },
    { name: "Yale", logo: "📚", color: "from-blue-600 to-blue-700" },
    { name: "Princeton", logo: "🦁", color: "from-orange-600 to-orange-700" },
    { name: "Columbia", logo: "👑", color: "from-blue-500 to-cyan-600" },
    { name: "Cornell", logo: "🌾", color: "from-red-500 to-red-600" },
    { name: "Penn", logo: "🛡️", color: "from-blue-700 to-blue-800" }
  ];

  const stats = [
    { number: "2,500+", label: "Libraries Worldwide", icon: "🌍", color: "from-orange-400 to-orange-500" },
    { number: "50M+", label: "Books Managed", icon: "📚", color: "from-orange-500 to-orange-600" },
    { number: "99.9%", label: "Uptime SLA", icon: "⚡", color: "from-orange-600 to-orange-700" },
    { number: "4.9/5", label: "Customer Rating", icon: "⭐", color: "from-orange-400 to-orange-600" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const TestimonialCard = ({ testimonial, isActive }) => (
    <div className={`relative transition-all duration-700 transform ${
      isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
    }`}>
      <div className="rounded-3xl border shadow-2xl overflow-hidden" style={{background: 'linear-gradient(to bottom right, #2D2525, #3B2F2F)', borderColor: 'rgba(193,154,107,0.3)', boxShadow: '0 25px 50px -12px rgba(193,154,107,0.15)'}}>
        {/* Header */}
        <div className="relative p-8 pb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ring-2" style={{background: 'linear-gradient(to bottom right, #2D2525, #3B2F2F)', ringColor: 'rgba(193,154,107,0.3)'}}>
                  {testimonial.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', color: '#3B2F2F'}}>
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading" style={{color: '#FAF3E0'}}>{testimonial.name}</h3>
                <p className="font-medium font-body" style={{color: '#C19A6B'}}>{testimonial.role}</p>
                <p className="text-sm font-body" style={{color: '#FAF3E0'}}>{testimonial.institution}</p>
                <p className="text-xs font-body" style={{color: '#FAF3E0'}}>{testimonial.location}</p>
              </div>
            </div>
            <div className="text-4xl opacity-50">{testimonial.institutionLogo}</div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg" style={{color: '#C19A6B'}}>★</span>
              ))}
            </div>
            <span className="text-sm font-medium font-body" style={{color: '#FAF3E0'}}>Verified Review</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-6">
          <blockquote className="text-lg leading-relaxed mb-6 italic font-body" style={{color: '#FAF3E0'}}>
            "{testimonial.content}"
          </blockquote>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(testimonial.metrics).map(([key, value]) => (
              <div key={key} className="text-center p-3 rounded-xl border" style={{background: 'linear-gradient(to bottom right, rgba(45,37,37,0.6), rgba(59,47,47,0.6))', borderColor: 'rgba(193,154,107,0.2)'}}>
                <div className="text-lg font-bold font-heading" style={{color: '#C19A6B'}}>{value}</div>
                <div className="text-xs capitalize font-body" style={{color: '#FAF3E0'}}>{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 relative overflow-hidden" style={{background: 'linear-gradient(to bottom, #3B2F2F, #2D2525)'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{background: 'radial-gradient(circle, rgba(193,154,107,0.15) 0%, rgba(193,154,107,0.05) 100%)'}} />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{background: 'radial-gradient(circle, rgba(193,154,107,0.12) 0%, rgba(193,154,107,0.03) 100%)', animationDelay: '3s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-2xl backdrop-blur-sm mb-8" style={{background: 'linear-gradient(to right, rgba(193,154,107,0.1), rgba(193,154,107,0.15))', border: '1px solid rgba(193,154,107,0.3)'}}>
            <span className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{backgroundColor: '#C19A6B'}}></span>
            <span className="text-sm font-semibold" style={{color: '#C19A6B'}}>💫 Success Stories</span>
          </div>
          
          <h2 className="text-section-title font-bold mb-8 leading-tight font-heading">
            <span className="block" style={{color: '#FAF3E0'}}>
              Trusted by Leading
            </span>
            <span className="block" style={{color: '#C19A6B'}}>
              Institutions
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-body" style={{color: '#FAF3E0'}}>
            Discover how top universities and libraries worldwide have transformed their operations with LibraryHub.
          </p>
        </div>

        {/* Main Testimonial Showcase */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-[600px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeTestimonial === index ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} isActive={activeTestimonial === index} />
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
                className="w-12 h-12 border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{background: 'linear-gradient(to right, #2D2525, #3B2F2F)', borderColor: 'rgba(193,154,107,0.3)', color: '#C19A6B'}}
              >
                ←
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={activeTestimonial === index ? 
                      {width: '2rem', background: 'linear-gradient(to right, #C19A6B, #D4B17A)'} : 
                      {width: '0.5rem', backgroundColor: '#6B8E23'}}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
                className="w-12 h-12 border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{background: 'linear-gradient(to right, #2D2525, #3B2F2F)', borderColor: 'rgba(193,154,107,0.3)', color: '#C19A6B'}}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Trusted By Logos */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 font-heading" style={{color: '#FAF3E0'}}>Trusted by Leading Institutions</h3>
            <p className="font-body" style={{color: '#FAF3E0'}}>Join the network of world-class universities and libraries</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center max-w-4xl mx-auto">
            {companyLogos.map((company, index) => (
              <div
                key={company.name}
                className="group flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${company.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  {company.logo}
                </div>
                <span className="text-xs font-medium font-body" style={{color: '#FAF3E0'}}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105" style={{background: 'linear-gradient(to bottom right, rgba(45,37,37,0.4), rgba(59,47,47,0.4))', borderColor: 'rgba(107,142,35,0.4)'}}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)'}}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 transition-colors duration-300 font-heading" style={{color: '#FAF3E0'}}>
                  {stat.number}
                </div>
                <div className="transition-colors duration-300 font-medium font-body" style={{color: '#FAF3E0'}}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;