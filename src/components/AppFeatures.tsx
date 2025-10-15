import React from "react";
import { trackDownloadClick } from "../utils/analytics";

const AppFeatures = () => {
  const features = [
    {
      title: "Smart Shopping",
      subtitle: "Save money with price tracking on your favorite sites - buy only what suits you perfectly",
      image: "/shopsmarter.png",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Smart Beauty", 
      subtitle: "Get personalized help with makeup, colors both while shopping and getting ready",
      image: "/confidentgirl.png",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Smart Styling",
      subtitle: "Get outfit help, styling tips, your best colors and someone to always talk to",
      image: "/savemoney.png",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See what{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              StyleGenius
            </span>
            {" "}can do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your personal beauty, style and shopping expert in action
          </p>
        </div>

        {/* 1x3 Row of Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              {/* Image Container - Preserving organic shapes */}
              <div className="relative mb-8 flex justify-center">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="max-w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: '300px' }}
                />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {index === 0 && (
                    <>
                      <span style={{ color: '#FF70D9' }}>Smart</span> Shopping
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span style={{ color: '#6EC1E4' }}>Smart</span> Beauty
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Smart</span> Styling
                    </>
                  )}
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {index === 0 ? (
                    <>
                      Save money with price tracking on{" "}
                      <span className="font-bold" style={{ color: '#FF70D9' }}>
                        your favorite sites
                      </span>
                      {" "}- buy only what suits you perfectly
                    </>
                  ) : index === 1 ? (
                    <>
                      Get personalized help with makeup, colors{" "}
                      <span className="font-bold" style={{ color: '#6EC1E4' }}>
                        while shopping and getting ready
                      </span>
                    </>
                  ) : (
                    <>
                      Get outfit help, styling tips, your best colors and{" "}
                      <span className="font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                        always someone to talk to that knows you and what looks best
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer" onClick={() => trackDownloadClick('app_features_section')}>
            <button
              className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
              }}
            >
              Try StyleGenius Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;