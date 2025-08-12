import React, { useState, useEffect, useRef } from "react";

const CTASection = ({ onGetStarted }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" style={{background: 'linear-gradient(to bottom, #2D2525, #3B2F2F)'}}>
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(193,154,107,0.4) 0%, rgba(193,154,107,0.1) 50%, transparent 100%)',
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(193,154,107,0.3) 0%, rgba(193,154,107,0.05) 50%, transparent 100%)',
            right: `${(window.innerWidth - mousePosition.x) * 0.015}px`,
            bottom: `${(window.innerHeight - mousePosition.y) * 0.015}px`,
            animationDelay: '2s',
            transition: 'all 0.4s ease-out',
          }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-pulse" style={{backgroundColor: 'rgba(193,154,107,0.4)'}}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-5xl mx-auto mb-20">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-2xl backdrop-blur-sm mb-10" style={{background: 'linear-gradient(to right, rgba(193,154,107,0.1), rgba(193,154,107,0.15))', border: '1px solid rgba(193,154,107,0.3)'}}>
              <span className="w-3 h-3 rounded-full mr-4 animate-pulse" style={{backgroundColor: '#C19A6B'}}></span>
              <span className="text-sm font-semibold" style={{color: '#C19A6B'}}>🚀 Ready to Transform Your Library?</span>
            </div>

            {/* Headlines */}
            <h2 className="text-section-title font-bold mb-10 leading-tight font-heading">
              <span className="block" style={{color: '#FAF3E0'}}>
                Start Your
              </span>
              <span className="block" style={{color: '#C19A6B'}}>
                Free Trial
              </span>
              <span className="block text-3xl md:text-4xl font-medium mt-6 font-body" style={{color: '#FAF3E0'}}>
                No Setup Fees • Cancel Anytime
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-14 max-w-4xl mx-auto leading-relaxed font-body" style={{color: '#FAF3E0'}}>
              Join <span className="font-bold" style={{color: '#C19A6B'}}>2,500+</span> libraries worldwide that have revolutionized their operations. 
              <span className="block mt-2 font-semibold" style={{color: '#C19A6B'}}>
                Get up and running in less than 5 minutes.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
              <button
                onClick={onGetStarted}
                className="group relative px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-110 overflow-hidden min-w-[250px] font-heading" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', boxShadow: '0 25px 50px -12px rgba(193,154,107,0.4)', color: '#3B2F2F'}}
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>Start Free Trial</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              
              <button className="group px-12 py-6 border-2 rounded-2xl font-bold text-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-110 flex items-center space-x-4 min-w-[250px] justify-center font-heading" style={{borderColor: 'rgba(193,154,107,0.4)', color: '#FAF3E0'}}>
                <span className="w-14 h-14 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-5 border-l-orange-400 border-t-3 border-b-3 border-t-transparent border-b-transparent ml-1"></div>
                </span>
                <span className="text-gray-200">Watch Demo</span>
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: "⚡", title: "5-Min Setup", desc: "Get started instantly" },
                { icon: "🔒", title: "Enterprise Security", desc: "Bank-level encryption" },
                { icon: "🎯", title: "24/7 Support", desc: "Expert help anytime" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 font-body">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Contact Section */}
          <div className={`max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Newsletter Signup */}
            <div className="rounded-3xl border shadow-2xl overflow-hidden p-8" style={{background: 'linear-gradient(to bottom right, #2D2525, #3B2F2F)', borderColor: 'rgba(193,154,107,0.3)', boxShadow: '0 25px 50px -12px rgba(193,154,107,0.15)'}}>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 flex items-center font-heading" style={{color: '#FAF3E0'}}>
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)'}}>
                    📬
                  </span>
                  Stay Updated
                </h3>
                <p className="text-gray-300 mb-6 font-body">
                  Get weekly insights, feature updates, and library management tips delivered to your inbox.
                </p>
                
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 font-body"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed font-heading"
                  >
                    {isSubscribed ? "✅ Subscribed!" : "Subscribe Now"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-3xl border shadow-2xl overflow-hidden p-8" style={{background: 'linear-gradient(to bottom right, #2D2525, #3B2F2F)', borderColor: 'rgba(193,154,107,0.3)', boxShadow: '0 25px 50px -12px rgba(193,154,107,0.15)'}}>
              <h3 className="text-2xl font-bold mb-4 flex items-center font-heading" style={{color: '#FAF3E0'}}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)'}}>
                  💬
                </span>
                Need Help?
              </h3>
              <p className="text-gray-300 mb-6 font-body">
                Talk to our library experts about your specific needs and get a personalized demo.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold text-white font-heading">Schedule a Call</div>
                    <div className="text-sm text-gray-400 font-body">30-minute consultation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <span className="text-2xl">💬</span>
                  <div>
                    <div className="font-semibold text-white font-heading">Live Chat</div>
                    <div className="text-sm text-gray-400 font-body">Instant support available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust & Security */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-300 mb-4 font-heading">Enterprise-Grade Security & Trust</h3>
              <p className="text-gray-400 font-body">Your data is protected with industry-leading security standards</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-4xl mx-auto mb-16">
              {[
                { name: "SOC 2 Certified", icon: "🛡️", color: "from-green-600 to-green-700" },
                { name: "GDPR Compliant", icon: "🔒", color: "from-blue-600 to-blue-700" },
                { name: "99.9% Uptime", icon: "⚡", color: "from-orange-600 to-orange-700" },
                { name: "256-bit SSL", icon: "🔐", color: "from-purple-600 to-purple-700" },
                { name: "ISO 27001", icon: "📜", color: "from-red-600 to-red-700" }
              ].map((cert, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {cert.icon}
                  </div>
                  <span className="text-xs text-gray-400 font-medium text-center group-hover:text-gray-300 transition-colors duration-300 font-body">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl backdrop-blur-sm" style={{background: 'linear-gradient(to right, rgba(193,154,107,0.1), rgba(193,154,107,0.15))', border: '1px solid rgba(193,154,107,0.3)'}}>
              <span style={{color: '#C19A6B'}}>✨</span>
              <span className="font-medium font-body" style={{color: '#FAF3E0'}}>30-day free trial • No credit card required • Full feature access</span>
              <span style={{color: '#C19A6B'}}>✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;