import React from "react";

const AppFeatures = () => {
  const features = [
    {
      title: "Shop smarter with STYLEGENIUS",
      subtitle: "Personalized advice, insights and price tracking on your favorite sites.",
      image: "/placeholder.svg", // Replace with your Canva image
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Better CONFIDENCE Save MONEY",
      subtitle: "Look your BEST",
      image: "/placeholder.svg", // Replace with your Canva image
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Smart BEAUTY Smart SHOPPING Smart STYLING", 
      subtitle: "Your personalized makeup look, style advice & more",
      image: "/placeholder.svg", // Replace with your Canva image
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "SAVE MONEY WITH PRICE TRACKING",
      subtitle: "Save items from different shops & sites in one place",
      image: "/placeholder.svg", // Replace with your Canva image
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Makeup, Clothing, Colors",
      subtitle: "There's NO DUMB QUESTIONS",
      image: "/placeholder.svg", // Replace with your Canva image
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "Insights on products, tailored for you",
      subtitle: "Your personal Beauty, Shopping & Styling Assistant",
      image: "/placeholder.svg", // Replace with your Canva image
      gradient: "from-green-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to 
            <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}style smarter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered style advice to smart shopping tools - all in one powerful app
          </p>
        </div>

        {/* 3x2 Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gray-50 overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10`}
                />
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Try StyleGenius Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;