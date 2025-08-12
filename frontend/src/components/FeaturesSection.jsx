import React, { useState, useEffect, useRef } from "react";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const mainFeatures = [
    {
      id: "catalog",
      title: "Digital Catalog Management",
      subtitle: "Advanced Search & Organization",
      description: "Transform your physical library into a powerful digital ecosystem with AI-powered cataloging, smart search, and automated organization.",
      icon: "🔍",
      gradient: "from-orange-400 to-orange-600",
      features: [
        "AI-Powered Auto-Cataloging",
        "Advanced Search Filters", 
        "Smart Recommendations",
        "Bulk Import/Export"
      ],
      preview: {
        type: "dashboard",
        stats: { books: "25,847", categories: "127", searches: "1,293/day" }
      }
    },
    {
      id: "automation",
      title: "Intelligent Automation",
      subtitle: "Streamlined Operations",
      description: "Automate repetitive tasks with smart workflows, automated notifications, and seamless integration with existing systems.",
      icon: "⚡",
      gradient: "from-orange-500 to-orange-700",
      features: [
        "Automated Check-in/out",
        "Smart Due Date Reminders",
        "Inventory Tracking",
        "Report Generation"
      ],
      preview: {
        type: "workflow",
        stats: { automated: "89%", time_saved: "15hrs/week", accuracy: "99.7%" }
      }
    },
    {
      id: "analytics",
      title: "Advanced Analytics",
      subtitle: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics, usage patterns, and predictive insights that help optimize your library operations.",
      icon: "📊",
      gradient: "from-orange-600 to-orange-800",
      features: [
        "Real-time Dashboards",
        "Usage Analytics",
        "Predictive Trends",
        "Custom Reports"
      ],
      preview: {
        type: "analytics",
        stats: { growth: "+23%", satisfaction: "4.8/5", efficiency: "+45%" }
      }
    }
  ];

  const supportFeatures = [
    {
      title: "Multi-Branch Support",
      description: "Centralized management across multiple locations",
      icon: "🏢",
      color: "orange-500"
    },
    {
      title: "Mobile App",
      description: "Full-featured mobile experience for users",
      icon: "📱", 
      color: "orange-600"
    },
    {
      title: "Cloud Security",
      description: "Enterprise-grade security and compliance",
      icon: "🛡️",
      color: "orange-400"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      icon: "🎧",
      color: "orange-700"
    },
    {
      title: "API Integration",
      description: "Seamless integration with existing systems",
      icon: "🔗",
      color: "orange-500"
    },
    {
      title: "Custom Branding",
      description: "White-label solutions for your organization",
      icon: "🎨",
      color: "orange-600"
    }
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

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [mainFeatures.length]);

  const FeaturePreview = ({ feature }) => (
    <div className="relative h-80 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-orange-500/20 shadow-2xl shadow-orange-500/10 overflow-hidden">
      {/* Preview Header */}
      <div className="h-16 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-orange-500/20 flex items-center justify-between px-6">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{feature.icon}</span>
          <div>
            <div className="text-white font-semibold font-heading">{feature.title}</div>
            <div className="text-xs text-gray-400 font-body">{feature.subtitle}</div>
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
      
      {/* Preview Content */}
      <div className="p-6">
        {feature.preview.type === "dashboard" && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(feature.preview.stats).map(([key, value]) => (
                <div key={key} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-3 border border-orange-500/10">
                  <div className="text-lg font-bold text-orange-400 font-heading">{value}</div>
                  <div className="text-xs capitalize font-body" style={{color: '#FAF3E0'}}>{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-gray-800/30 to-transparent rounded-lg p-4">
              <div className="flex items-end justify-between h-16 space-x-2">
                {[0.4, 0.7, 0.3, 0.8, 0.5, 0.9, 0.6].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-orange-500 to-orange-400 rounded-sm flex-1"
                    style={{ height: `${height * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        
        {feature.preview.type === "workflow" && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(feature.preview.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-xl font-bold font-heading" style={{color: '#C19A6B'}}>{value}</div>
                  <div className="text-xs capitalize font-body" style={{color: '#FAF3E0'}}>{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {["Book Check-in", "Due Date Alert", "Inventory Update", "Report Generation"].map((step, i) => (
                <div key={i} className="flex items-center space-x-3 p-2 bg-gradient-to-r from-gray-800/30 to-transparent rounded-lg">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', color: '#3B2F2F'}}>
                    {i + 1}
                  </div>
                  <div className="flex-1 h-2 rounded-full" style={{backgroundColor: '#2D2525'}}>
                    <div 
                      className="h-full rounded-full" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)'}}
                      style={{ width: `${85 - (i * 10)}%` }}
                    />
                  </div>
                  <span className="text-xs font-body" style={{color: '#FAF3E0'}}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {feature.preview.type === "analytics" && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(feature.preview.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-xl font-bold font-heading" style={{color: '#C19A6B'}}>{value}</div>
                  <div className="text-xs capitalize font-body" style={{color: '#FAF3E0'}}>{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>
            <div className="relative h-24 rounded-lg overflow-hidden" style={{background: 'linear-gradient(to right, rgba(45,37,37,0.4), transparent)'}}>
              <div className="absolute inset-0 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 300 100">
                  <path
                    d="M0,80 Q75,20 150,40 T300,30"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C19A6B" />
                      <stop offset="100%" stopColor="#D4B17A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-orange-600/10 to-orange-700/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-semibold text-orange-300">⚡ Powerful Features</span>
          </div>
          
          <h2 className="text-section-title font-bold mb-8 leading-tight font-heading">
            <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Built for Modern
            </span>
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Libraries
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
            Discover the comprehensive suite of tools designed to revolutionize how you manage your library operations in the digital age.
          </p>
        </div>

        {/* Main Features Showcase */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Content */}
            <div className="space-y-8">
              {/* Feature Tabs */}
              <div className="flex flex-col space-y-2">
                {mainFeatures.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className="group relative p-6 text-left rounded-2xl border transition-all duration-300"
                    style={activeFeature === index ? 
                      {background: 'linear-gradient(to right, rgba(193,154,107,0.1), rgba(193,154,107,0.05))', borderColor: 'rgba(193,154,107,0.4)'} : 
                      {background: 'rgba(45,37,37,0.4)', borderColor: 'rgba(107,142,35,0.3)'}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                           style={activeFeature === index ? 
                             {background: 'linear-gradient(to right, #C19A6B, #D4B17A)'} : 
                             {background: '#2D2525'}}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 font-heading"
                            style={{color: activeFeature === index ? '#FAF3E0' : '#C19A6B'}}>
                          {feature.title}
                        </h3>
                        <p className="text-sm mb-3 font-body" style={{color: '#FAF3E0'}}>{feature.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {feature.features.map((feat, i) => (
                            <div key={i} className="flex items-center space-x-2 text-xs">
                              <div className="w-1.5 h-1.5 rounded-full"
                                 style={{backgroundColor: activeFeature === index ? '#C19A6B' : '#6B8E23'}} />
                              <span className="font-body" style={{color: '#FAF3E0'}}>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Preview */}
            <div className="relative">
              <FeaturePreview feature={mainFeatures[activeFeature]} />
              
              {/* Progress Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {mainFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className="h-1 rounded-full transition-all duration-300"
                    style={activeFeature === index ? 
                      {width: '2rem', background: 'linear-gradient(to right, #C19A6B, #D4B17A)'} : 
                      {width: '1rem', backgroundColor: '#6B8E23'}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Features Grid */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-heading" style={{color: '#FAF3E0'}}>Plus Everything Else You Need</h3>
            <p className="font-body" style={{color: '#FAF3E0'}}>Additional features that make LibraryHub the complete solution</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1" style={{background: 'linear-gradient(to bottom right, rgba(45,37,37,0.4), rgba(59,47,47,0.4))', borderColor: 'rgba(107,142,35,0.4)'}}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300" style={{background: 'rgba(193,154,107,0.2)', border: '1px solid rgba(193,154,107,0.4)'}}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 transition-colors duration-300 font-heading" style={{color: '#FAF3E0'}}>
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-relaxed font-body" style={{color: '#FAF3E0'}}>
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{background: 'linear-gradient(to right, rgba(193,154,107,0.05), transparent)'}} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-6 px-8 py-6 rounded-2xl backdrop-blur-sm" style={{background: 'linear-gradient(to right, rgba(193,154,107,0.1), rgba(193,154,107,0.15))', border: '1px solid rgba(193,154,107,0.3)'}}>
            <div className="text-left">
              <div className="text-lg font-semibold font-heading" style={{color: '#FAF3E0'}}>Ready to transform your library?</div>
              <div className="text-sm font-body" style={{color: '#FAF3E0'}}>Start your free 30-day trial today</div>
            </div>
            <button className="btn-md rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg font-heading" style={{background: 'linear-gradient(to right, #C19A6B, #D4B17A)', boxShadow: '0 10px 25px -5px rgba(193,154,107,0.3)', color: '#3B2F2F'}}>
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;