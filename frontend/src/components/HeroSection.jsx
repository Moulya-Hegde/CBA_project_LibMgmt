import React, { useEffect, useState, useRef } from "react";

const HeroSection = ({ onGetStarted }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3D Book Icons Component
  const BookIcon3D = ({ size = "w-16 h-20", delay = "0s", rotation = "0deg" }) => (
    <div 
      className={`${size} relative transform-gpu transition-all duration-1000 hover:scale-110 hover:-rotate-6`}
      style={{ 
        animationDelay: delay,
        transform: `rotate(${rotation}) perspective(1000px) rotateY(-15deg)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg shadow-2xl shadow-amber-600/25" style={{backgroundColor: '#C19A6B'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
        <div className="absolute top-2 left-2 right-2 h-1 bg-white/30 rounded-full"></div>
        <div className="absolute top-4 left-2 right-2 h-0.5 bg-white/20 rounded-full"></div>
        <div className="absolute top-6 left-2 right-2 h-0.5 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute -right-1 top-1 bottom-1 w-2 bg-gradient-to-b from-amber-700 to-amber-800 rounded-r-lg" style={{background: 'linear-gradient(to bottom, #A0845C, #8B7355)'}}></div>
    </div>
  );

  // Dashboard Preview Component
  const DashboardPreview = () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-orange-500/20 shadow-2xl shadow-orange-500/10 overflow-hidden transform-gpu perspective-1000 hover:scale-105 transition-all duration-700">
      {/* Dashboard Header */}
      <div className="h-10 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-orange-500/20 flex items-center px-3 space-x-2">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex-1 bg-gray-700 rounded-full h-1.5 ml-3"></div>
      </div>
      
      {/* Dashboard Content */}
      <div className="p-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { value: "2,847", label: "Total Books", color: "from-orange-400 to-orange-500" },
            { value: "1,293", label: "Active Users", color: "from-orange-500 to-orange-600" },
            { value: "847", label: "Issued", color: "from-orange-600 to-orange-700" },
            { value: "98.2%", label: "Uptime", color: "from-orange-400 to-orange-600" },
          ].map((stat, i) => (
            <div key={i} className="rounded-lg p-2 border" style={{background: 'linear-gradient(to bottom right, rgba(45, 37, 37, 0.6), rgba(59, 47, 47, 0.6))', borderColor: 'rgba(193, 154, 107, 0.2)'}}>
              <div className="text-sm font-bold font-heading" style={{color: '#C19A6B'}}>
                {stat.value}
              </div>
              <div className="text-xs font-body" style={{color: '#FAF3E0'}}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Chart Area */}
        <div className="rounded-lg p-3 border mb-3" style={{background: 'linear-gradient(to bottom right, rgba(45, 37, 37, 0.4), rgba(59, 47, 47, 0.4))', borderColor: 'rgba(193, 154, 107, 0.2)'}}>
          <div className="flex items-end justify-between h-16 space-x-1">
            {[0.3, 0.7, 0.4, 0.8, 0.6, 0.9, 0.5, 0.7, 0.8, 0.4, 0.6, 0.9].map((height, i) => (
              <div
                key={i}
                className="rounded-sm flex-1 opacity-80" style={{background: 'linear-gradient(to top, #C19A6B, #D4B17A)'}}
                style={{ height: `${height * 100}%` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="space-y-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-2 rounded-lg p-1.5 border" style={{background: 'linear-gradient(to right, rgba(45, 37, 37, 0.4), transparent)', borderColor: 'rgba(193, 154, 107, 0.1)'}}>
              <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#C19A6B'}}></div>
              <div className="flex-1 h-1.5 rounded-full" style={{backgroundColor: '#2D2525'}}></div>
              <div className="w-6 h-1.5 rounded-full" style={{backgroundColor: '#3B2F2F'}}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden" style={{backgroundColor: '#3B2F2F'}}>
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Main Gradient Background */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom right, #2D2525, #3B2F2F, #2D2525)'}}></div>
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(193,154,107,0.3) 0%, rgba(193,154,107,0.1) 50%, transparent 100%)',
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(193,154,107,0.2) 0%, rgba(193,154,107,0.05) 50%, transparent 100%)',
            right: `${(window.innerWidth - mousePosition.x) * 0.03}px`,
            bottom: `${(window.innerHeight - mousePosition.y) * 0.03}px`,
            animationDelay: '1.5s',
            transition: 'all 0.4s ease-out',
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(193,154,107,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(193,154,107,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-xl backdrop-blur-sm" style={{background: 'linear-gradient(to right, rgba(193,154,107,0.1), rgba(193,154,107,0.15))', border: '1px solid rgba(193,154,107,0.3)'}}>
              <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{backgroundColor: '#C19A6B'}}></span>
              <span className="text-xs font-semibold font-body" style={{color: '#C19A6B'}}>
                🚀 Next Generation Library Platform
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2">
              <h1 className="text-hero font-heading font-bold leading-tight">
                <span className="block" style={{color: '#FAF3E0'}}>
                  Smart Library
                </span>
                <span className="block" style={{color: '#C19A6B'}}>
                  Management
                </span>
                <span className="block text-lg md:text-xl font-medium mt-2 font-body" style={{color: '#FAF3E0'}}>
                  Reimagined for the Digital Age
                </span>
              </h1>
            </div>

            <p className="text-base md:text-lg leading-relaxed max-w-xl font-body" style={{color: '#FAF3E0'}}>
              Transform your library operations with our cutting-edge platform. 
              <span className="font-semibold" style={{color: '#C19A6B'}}> Streamline workflows, enhance user experience, and unlock powerful insights </span>
              that drive better outcomes for your community.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "⚡", text: "Lightning Fast Search" },
                { icon: "🔒", text: "Enterprise Security" },
                { icon: "📊", text: "Real-time Analytics" },
                { icon: "🌐", text: "Multi-location Support" },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 p-2 rounded-lg border transition-all duration-300" style={{background: 'linear-gradient(to right, rgba(45,37,37,0.4), transparent)', borderColor: 'rgba(193,154,107,0.2)', ':hover': {borderColor: 'rgba(193,154,107,0.4)'}}}
                >
                  <span className="text-lg">{feature.icon}</span>
                  <span className="font-medium text-sm font-body" style={{color: '#FAF3E0'}}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="group relative btn-lg rounded-xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden font-heading" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', boxShadow: '0 25px 50px -12px rgba(193,154,107,0.4)', color: '#3B2F2F'}}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group btn-lg border-2 rounded-xl font-bold backdrop-blur-sm hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 font-heading" style={{borderColor: 'rgba(193,154,107,0.4)', color: '#FAF3E0'}}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center border" style={{background: 'linear-gradient(to right, rgba(193,154,107,0.2), rgba(193,154,107,0.3))', borderColor: 'rgba(193,154,107,0.4)'}}>
                  <div className="w-0 h-0 border-l-3 border-t-2 border-b-2 border-t-transparent border-b-transparent ml-0.5" style={{borderLeftColor: '#C19A6B'}}></div>
                </span>
                <span style={{color: '#FAF3E0'}}>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 pt-4 border-t border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm" style={{color: '#C19A6B'}}>★</span>
                  ))}
                </div>
                <span className="font-medium text-sm font-body" style={{color: '#FAF3E0'}}>5.0 rating</span>
              </div>
              <div className="text-xs font-body" style={{color: '#FAF3E0'}}>
                Trusted by <span className="font-semibold" style={{color: '#C19A6B'}}>500+</span> libraries worldwide
              </div>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Floating 3D Books */}
            <div className="absolute -top-8 -left-8 animate-float">
              <BookIcon3D size="w-8 h-12" delay="0s" rotation="15deg" />
            </div>
            <div className="absolute -top-4 right-16 animate-float">
              <BookIcon3D size="w-6 h-10" delay="0.5s" rotation="-20deg" />
            </div>
            <div className="absolute bottom-16 -left-4 animate-float">
              <BookIcon3D size="w-10 h-14" delay="1s" rotation="25deg" />
            </div>
            <div className="absolute bottom-8 right-8 animate-float">
              <BookIcon3D size="w-6 h-9" delay="1.5s" rotation="-15deg" />
            </div>

            {/* Main Dashboard Preview */}
            <div className="relative">
              <DashboardPreview />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 rounded-xl p-3 shadow-2xl border" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', boxShadow: '0 25px 50px -12px rgba(193,154,107,0.3)', borderColor: 'rgba(193,154,107,0.3)'}}>
                <div className="text-lg font-bold font-heading" style={{color: '#3B2F2F'}}>847</div>
                <div className="text-xs font-body" style={{color: '#3B2F2F'}}>Books Issued Today</div>
              </div>
              
              <div className="absolute -top-4 -right-4 rounded-xl p-3 shadow-2xl border" style={{background: 'linear-gradient(to right, #2D2525, #3B2F2F)', boxShadow: '0 25px 50px -12px rgba(45,37,37,0.4)', borderColor: 'rgba(193,154,107,0.3)'}}>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#6B8E23'}}></div>
                  <span className="text-xs font-body" style={{color: '#FAF3E0'}}>Live Updates</span>
                </div>
                <div className="text-lg font-bold font-heading" style={{color: '#FAF3E0'}}>99.9%</div>
                <div className="text-xs font-body" style={{color: '#FAF3E0'}}>System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 rounded-full flex justify-center" style={{borderColor: 'rgba(193,154,107,0.4)'}}>
          <div className="w-0.5 h-2 rounded-full mt-1.5 animate-pulse" style={{backgroundColor: 'rgba(193,154,107,0.7)'}} />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float:nth-child(2) {
          animation-delay: -2s;
        }
        .animate-float:nth-child(3) {
          animation-delay: -4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;