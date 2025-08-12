import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{background: 'rgba(59,47,47,0.9)', borderBottomColor: 'rgba(193,154,107,0.3)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', boxShadow: '0 10px 25px -5px rgba(193,154,107,0.4)'}}>
                  <div className="font-bold text-xl" style={{color: '#3B2F2F'}}>📚</div>
                </div>
                <div className="absolute -inset-1 rounded-xl blur opacity-25 animate-pulse" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)'}}></div>
              </div>
              <div>
                <span className="text-2xl font-bold" style={{color: '#C19A6B'}}>
                  LibraryHub
                </span>
                <div className="text-xs font-medium" style={{color: '#FAF3E0'}}>PREMIUM</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex items-center space-x-8">
                {[
                  { name: "Features", href: "#features" },
                  { name: "Solutions", href: "#solutions" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Pricing", href: "#pricing" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative font-medium group transition-all duration-300" style={{color: '#FAF3E0'}}
                  >
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)'}}></div>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="font-medium transition-colors duration-300" style={{color: '#FAF3E0'}}>
                  Log In
                </button>
                <button
                  onClick={handleGetStarted}
                  className="relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', boxShadow: '0 10px 25px -5px rgba(193,154,107,0.4)', color: '#3B2F2F'}}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg border transition-colors duration-300" style={{background: 'rgba(193,154,107,0.1)', borderColor: 'rgba(193,154,107,0.3)', color: '#C19A6B'}}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                  <div className={`h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-4 py-6 border-t" style={{background: 'rgba(59,47,47,0.95)', borderTopColor: 'rgba(193,154,107,0.3)'}}>
            <div className="flex flex-col space-y-6">
              {[
                { name: "Features", href: "#features" },
                { name: "Solutions", href: "#solutions" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Pricing", href: "#pricing" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium transition-colors duration-300" style={{color: '#FAF3E0'}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleGetStarted}
                className="w-full px-6 py-3 rounded-xl font-semibold text-center" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', color: '#3B2F2F'}}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection onGetStarted={handleGetStarted} />

      {/* Premium Footer */}
      <footer className="border-t py-16" style={{backgroundColor: '#2D2525', borderTopColor: 'rgba(193,154,107,0.3)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <span className="text-white font-bold text-xl">📚</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-25"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    LibraryHub
                  </span>
                  <div className="text-xs text-gray-400 font-medium">PREMIUM</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming library operations with cutting-edge technology, intuitive design, and powerful analytics.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "📧", label: "Email", bg: "hover:bg-amber-500/20" },
                  { icon: "🐦", label: "Twitter", bg: "hover:bg-blue-500/20" },
                  { icon: "💼", label: "LinkedIn", bg: "hover:bg-blue-600/20" },
                  { icon: "📘", label: "Facebook", bg: "hover:bg-blue-700/20" }
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1" style={{backgroundColor: '#3B2F2F', borderColor: 'rgba(107,142,35,0.4)'}}
                    title={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 relative" style={{color: '#FAF3E0'}}>
                Products
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  "Library Management",
                  "Digital Catalog",
                  "User Analytics",
                  "Mobile App",
                  "API Integration"
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 relative" style={{color: '#FAF3E0'}}>
                Support
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  "Documentation",
                  "Help Center",
                  "Community",
                  "Contact Support",
                  "System Status"
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 relative" style={{color: '#FAF3E0'}}>
                Stay Updated
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </h4>
              <p className="text-gray-400 mb-4">
                Get the latest updates and insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                />
                <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-500/20">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-sm" style={{color: '#FAF3E0'}}>
                  &copy; 2025 LibraryHub. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 text-xs" style={{color: '#FAF3E0'}}>
                  <a href="#" className="transition-colors duration-300" style={{color: '#FAF3E0'}}>Privacy Policy</a>
                  <a href="#" className="transition-colors duration-300" style={{color: '#FAF3E0'}}>Terms of Service</a>
                  <a href="#" className="transition-colors duration-300" style={{color: '#FAF3E0'}}>Cookie Policy</a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs" style={{color: '#FAF3E0'}}>
                <span>Built with</span>
                <span style={{color: '#C19A6B'}}>♥</span>
                <span>for libraries worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;