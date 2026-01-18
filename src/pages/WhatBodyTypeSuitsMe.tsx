import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const WhatBodyTypeSuitsMe = () => {
  const bodyTypeGuides = [
    {
      name: "Pear Shape (A-Shape)",
      description: "If you have a pear shape, your hips are wider than your shoulders and bust. This is a beautiful, feminine silhouette that many women have.",
      tips: [
        "Highlight your upper body with statement tops, bright colors, and interesting necklines",
        "Create balance by adding volume to your shoulders with structured blazers or tops",
        "A-line and fit-and-flare dresses are your best friends",
        "Bootcut and straight-leg jeans help balance your proportions",
        "Avoid tight-fitting bottoms that emphasize hip width"
      ],
      whatToLookFor: "The goal is to balance your silhouette by drawing attention upward and creating visual width in your shoulders.",
      placeholder: "/pear-body-type-outfit-styling-tips.jpg"
    },
    {
      name: "Apple Shape (O-Shape)",
      description: "Apple shapes carry weight around their midsection, with fuller bust and narrower hips. You likely have great legs and arms to show off!",
      tips: [
        "Empire waistlines and A-line cuts create a flattering silhouette",
        "V-necks and scoop necks draw attention to your décolletage",
        "Show off your legs with shorter hemlines and fitted bottoms",
        "Wrap dresses and tops create a defined waistline",
        "Avoid tight clothing around your midsection and horizontal stripes across the torso"
      ],
      whatToLookFor: "Focus on creating a defined waistline while highlighting your best assets - your legs and décolletage.",
      placeholder: "/apple-body-type-outfit-styling-tips.jpg"
    },
    {
      name: "Hourglass Shape",
      description: "The hourglass figure has balanced shoulders and hips with a defined waist. This is considered the 'ideal' shape, but every body type is beautiful!",
      tips: [
        "Fitted clothing that follows your natural curves looks amazing on you",
        "Wrap dresses and belted styles emphasize your waistline perfectly",
        "High-waisted bottoms showcase your proportions beautifully",
        "Avoid boxy or oversized clothing that hides your natural shape",
        "Bodycon dresses and fitted blazers are made for your silhouette"
      ],
      whatToLookFor: "Your goal is to maintain your natural proportions and show off your defined waistline.",
      placeholder: "/hourglass-body-type-outfit-styling-tips.jpg"
    },
    {
      name: "Rectangle Shape (H-Shape)",
      description: "Rectangle shapes have similar measurements for bust, waist, and hips with less defined curves. You can create amazing silhouettes with the right styling!",
      tips: [
        "Create curves with peplum tops, fit-and-flare dresses, and belted styles",
        "Layer clothing to add dimension and visual interest",
        "Ruffles, prints, and textures help create the illusion of curves",
        "High-waisted bottoms with tucked-in tops define your waistline",
        "Avoid straight, boxy cuts that emphasize your natural straight lines"
      ],
      whatToLookFor: "Focus on creating the illusion of curves and defining a waistline through strategic styling choices.",
      placeholder: "/rectangle-body-type-outfit-styling-tips.jpg"
    },
    {
      name: "Inverted Triangle Shape",
      description: "Inverted triangles have broader shoulders and bust with narrower hips. You have an athletic, strong silhouette that's perfect for power dressing!",
      tips: [
        "Add volume to your lower half with wide-leg pants and A-line skirts",
        "Choose bottoms in light colors and tops in darker shades",
        "Straight-leg and bootcut jeans balance your proportions",
        "Avoid shoulder pads and heavily structured tops",
        "Scoop necks and V-necks are more flattering than boat necks"
      ],
      whatToLookFor: "Balance your broader shoulders by adding visual weight to your lower body and softening your shoulder line.",
      placeholder: "/inverted-triangle-body-type-outfit-styling-tips.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="What Clothes Suit My Body Type? Complete Guide 2026"
        description="Find out which clothes flatter your body type. Our comprehensive guide helps you dress for pear, apple, hourglass, rectangle, and inverted triangle shapes."
        keywords="what clothes suit my body, body type fashion, dress for your body shape, pear body clothes, hourglass outfits, body shape guide"
        canonicalUrl="/what-body-type-suits-me"
        ogImage="/what-body-type-suits-me-hero.png"
        ogType="article"
        article={{
          publishedTime: "2024-10-05",
          modifiedTime: "2026-01-06",
          section: "Body Type",
          tags: ["body type", "fashion guide", "style tips", "body shape"]
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "What Body Type Suits Me", url: "/what-body-type-suits-me" }
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                What Clothes{" "}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Suit My Body?
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                The complete guide to dressing for your body type and feeling confident in every outfit ✨
              </p>
            </div>
            <div className="relative">
              <img 
                src="/body-type-style-guide-different-shapes.jpg" 
                alt="Body type style guide for different shapes"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Have you ever wondered why certain clothes make you look amazing while others just don't work? 
              The secret isn't about having the "perfect" body - it's about understanding your unique body type and 
              choosing clothes that enhance your natural beauty. This comprehensive guide will teach you everything 
              you need to know about dressing for your body shape.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every body type is beautiful, and with the right styling knowledge, you can feel confident and look 
              incredible in any outfit. It's not about hiding or changing your body - it's about celebrating what 
              makes you uniquely beautiful.
            </p>
          </div>

          {/* Understanding Body Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Your Body Shape</h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Foundation of Great Style</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your body type is determined by the relationship between your bust, waist, and hip measurements. 
                Understanding these proportions helps you choose clothing that creates a balanced, flattering silhouette 
                that makes you feel confident and beautiful.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Remember: Every Body is Beautiful</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                There is no "ideal" body type. Each shape has its own unique beauty and advantages. The goal of understanding 
                your body type isn't to conform to any standard - it's to learn how to dress in a way that makes YOU feel 
                amazing and confident.
              </p>
              <p className="text-gray-600">
                These are guidelines, not rules. Fashion should be fun, and confidence is always your best accessory!
              </p>
            </div>
          </section>

          {/* Body Type Analysis Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Determine Your Body Type</h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Simple Body Type Assessment</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">📏 Take Your Measurements</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Using a soft measuring tape, measure your bust, waist, and hips. Be honest and measure over undergarments:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Bust:</strong> Around the fullest part of your chest</li>
                    <li>• <strong>Waist:</strong> At your natural waistline (narrowest point)</li>
                    <li>• <strong>Hips:</strong> Around the widest part of your hips</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">🪞 The Mirror Test</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Stand in front of a full-length mirror in form-fitting clothing and honestly assess your silhouette:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Where do you carry most of your weight?</li>
                    <li>• What's your widest point?</li>
                    <li>• How defined is your waistline?</li>
                    <li>• What are your favorite features to highlight?</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Body Type Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Complete Body Type Style Guide
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover styling tips and outfit ideas tailored specifically for your unique body shape.
            </p>
          </div>

          {/* Body Type Guides */}
          <div className="space-y-12">
            {bodyTypeGuides.map((guide, index) => (
              <div key={guide.name} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={guide.placeholder} 
                      alt={`${guide.name} - styling tips and outfit ideas`}
                      className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{guide.name}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{guide.description}</p>
                    
                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 What to Remember:</h4>
                      <p className="text-gray-700 font-medium">{guide.whatToLookFor}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">Key Styling Tips:</h4>
                      <ul className="space-y-2">
                        {guide.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-gray-600 leading-relaxed flex items-start">
                            <span className="text-pink-500 mr-2 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styling & Shopping Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Universal Styling & Shopping Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🛍️ Smart Shopping</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">✓</span>
                  <span>Always try clothes on - sizes vary between brands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">✓</span>
                  <span>Focus on fit over size labels - a well-fitted larger size looks better than a tight smaller one</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">✓</span>
                  <span>Invest in good undergarments - they're the foundation of every great outfit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">✓</span>
                  <span>Don't be afraid to tailor clothes for the perfect fit</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✨ Styling Secrets</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Confidence is your best accessory - own your style choices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Create focal points with accessories, colors, or interesting details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Balance is key - if you're loose on top, try fitted on bottom (and vice versa)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span>Experiment and have fun - fashion rules are meant to be broken!</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-red-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">❌ Common Styling Mistakes to Avoid</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">The Size Obsession</h4>
                <p className="text-gray-700">
                  Getting hung up on size labels instead of focusing on fit. A size that fits well will always 
                  look better than one that's too small, regardless of the number on the tag.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Following Every Trend</h4>
                <p className="text-gray-700">
                  Wearing trends that don't suit your body type or personal style. Choose trends that work 
                  for YOU, not ones that look good on influencers with different body types.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tips Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Pro Tips for Every Body Type
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Embrace Your Shape</h3>
                <p className="text-gray-600">
                  Your body type isn't something to fix or hide - it's something to celebrate! 
                  Learn to dress in a way that makes YOU feel amazing and confident.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Focus on Fit</h3>
                <p className="text-gray-600">
                  The most important factor in looking great isn't your body type or the trends - 
                  it's wearing clothes that fit you properly and make you feel comfortable.
                </p>
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Helpful Shopping Tools
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Apps to help you find clothes that flatter your body type.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <a href="https://wontsy.com" target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Wontsy</h4>
                  <p className="text-sm text-gray-600 mb-2">Save flattering pieces from any store, build outfit looks, and track prices.</p>
                  <span className="text-pink-500 text-sm font-medium">Free · iOS, Android, Chrome, Safari</span>
                </a>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Pinterest</h4>
                  <p className="text-sm text-gray-600 mb-2">Find outfit inspiration for your body type. Create style boards.</p>
                  <span className="text-pink-500 text-sm font-medium">Free · iOS, Android, Web</span>
                </a>
                <a href="https://www.cladwell.com" target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Cladwell</h4>
                  <p className="text-sm text-gray-600 mb-2">Get daily outfit suggestions from your existing wardrobe.</p>
                  <span className="text-pink-500 text-sm font-medium">Subscription · iOS, Android</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatBodyTypeSuitsMe;