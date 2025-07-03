
const AppShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            StyleGenius in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how StyleGenius transforms your styling experience across mobile app and browser extension
          </p>
        </div>
        
        {/* Mobile App Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                📱 Mobile App
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Upload Your Wardrobe</h4>
                    <p className="text-gray-600">Take photos of your clothes and let StyleGenius learn your style</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get Personalized Outfits</h4>
                    <p className="text-gray-600">Receive outfit suggestions tailored to your style and colors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Chat with Your Genius</h4>
                    <p className="text-gray-600">Ask questions and get expert styling advice anytime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
              <div className="w-64 h-96 mx-auto bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500 text-lg">📱 App Screenshot</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Browser Extension Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
                <div className="w-full h-64 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500 text-lg">🌐 Browser Extension</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                🌐 Browser Extension
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analyze While Shopping</h4>
                    <p className="text-gray-600">Get instant analysis of items while browsing any shopping site</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Build Outfits Online</h4>
                    <p className="text-gray-600">Create outfits with items you want to buy before purchasing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Save & Track</h4>
                    <p className="text-gray-600">Save items across all sites and track price changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
