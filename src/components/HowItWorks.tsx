import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "🎨",
      title: "Choose your skin tone",
      description: "Pick from examples or take a selfie",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: "💫",
      title: "Tell us about you", 
      description: "Personality, height, body type - just a few questions",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: "✨",
      title: "Ready to go!",
      description: "Start shopping smarter, boost your beauty & get styling tips",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              How It{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Works
              </span>
            </h2>
            <img 
              src="/mainavatar.png" 
              alt="StyleGenius Avatar" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(255, 112, 217, 0.3))'
              }}
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in under 2 minutes
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="flex flex-col items-center justify-center mb-4 md:mb-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg mb-3`}>
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                <span className="mr-2">{step.icon}</span>
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connection Line - except for last step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-8 -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
            <button 
              className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
              }}
            >
              Get Started Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;