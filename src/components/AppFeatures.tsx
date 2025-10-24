import React from "react";
import { trackDownloadClick } from "../utils/analytics";

const AppFeatures = () => {
  return (
    <>
      {/* Section 1: Look Your Best, Always */}
      <section className="relative w-full overflow-x-hidden bg-gray-100">
        {/* Desktop layout */}
        <div className="hidden lg:block">
          {/* Top divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>

          {/* Collage layout */}
          <div className="relative min-h-[850px] max-w-[1500px] mx-auto px-12 py-20">
            {/* Text content - Left side */}
            <div className="absolute left-12 top-28 z-20 max-w-lg">
              <h2 className="text-6xl font-bold mb-8 leading-tight" style={{ color: '#1a1f36' }}>
                Look Your Best,{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Always
                </span>
              </h2>
              <div className="mt-12 space-y-4 mb-8">
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Discover which colors suit your skin tone and face
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Get outfit ideas and styling advice for your body type
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Personalized makeup looks that match your features
                  </p>
                </div>
              </div>
              <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer" onClick={() => trackDownloadClick('look_your_best_section')}>
                <button
                  className="px-10 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                  }}
                >
                  Try StyleGenius Now
                </button>
              </a>
            </div>

            {/* Model - CENTER (main focus) */}
            <div className="absolute left-1/2 top-20 -translate-x-1/2 z-10">
              <img
                src="/happy-woman-fashion-styling-app.png"
                alt="Happy Woman Using Fashion Styling App"
                className="w-auto h-[620px] drop-shadow-2xl"
              />
            </div>

            {/* Phone mockup - RIGHT of model, LOWER */}
            <div className="absolute right-[280px] top-[200px] z-20 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/ai-stylist-chat-outfit-advice-mockup.png"
                alt="AI Stylist Chat Outfit Advice"
                className="w-auto h-[480px] drop-shadow-2xl"
              />
            </div>

            {/* Floating card 1 - Skin Tone Match (upper position) */}
            <div className="absolute right-[280px] top-[40px] z-25 transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/skin-tone-match-ai.png"
                alt="Skin Tone Match AI"
                className="w-auto h-[120px] drop-shadow-lg rounded-xl"
              />
            </div>

            {/* Floating card 2 - Color Analysis (lower position) */}
            <div className="absolute right-32 top-[380px] z-25 transform rotate-[5deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/ai-color-analysis-personal-palette.png"
                alt="AI Color Analysis Personal Palette"
                className="w-auto h-[270px] drop-shadow-xl rounded-2xl"
              />
            </div>

            {/* Floating card 3 - Body Type Match (RIGHT side now) */}
            <div className="absolute right-[420px] top-[120px] z-25 transform rotate-[-6deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/body-type-match-ai.png"
                alt="Body Type Match AI"
                className="w-auto h-[120px] drop-shadow-lg rounded-xl"
              />
            </div>

          </div>

          {/* Bottom divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          {/* Top divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>

          {/* Heading */}
          <div className="py-10 px-6 text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1f36' }}>
              Look Your Best,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Always
              </span>
            </h2>
          </div>

          {/* Mobile collage */}
          <div className="relative min-h-[580px] px-2 pb-8">
            {/* Text boxes floating over images */}
            {/* Discover your best colors - ovanför color palette bilden (top right) */}
            <div className="absolute right-0 top-[-12px] z-30 max-w-[120px] transform rotate-[3deg]">
              <div className="bg-white rounded-lg p-3 border-2 border-pink-200 drop-shadow-lg">
                <p className="text-xs text-gray-700 font-semibold leading-tight">
                  Discover&nbsp;your<br/>best&nbsp;colors
                </p>
              </div>
            </div>
            {/* Get styling advice - under mobilen (phone) */}
            <div className="absolute left-4 top-[480px] z-30 max-w-[180px]">
              <div className="bg-white rounded-lg p-3 border-2 border-pink-200 drop-shadow-lg">
                <p className="text-xs text-gray-700 font-semibold leading-tight">
                  Get advice when styling outfits and getting ready
                </p>
              </div>
            </div>
            {/* Model - left side, BIGGER */}
            <div className="absolute left-0 top-0 z-10">
              <img
                src="/happy-woman-fashion-styling-app.png"
                alt="Happy Woman Using Fashion Styling App"
                className="w-auto h-[420px] drop-shadow-xl"
              />
            </div>

            {/* Phone mockup - lower left, more towards center */}
            <div className="absolute left-[80px] top-[200px] z-10">
              <img
                src="/ai-stylist-chat-outfit-advice-mockup.png"
                alt="AI Stylist Chat Outfit Advice"
                className="w-auto h-[280px] drop-shadow-2xl"
              />
            </div>

            {/* Floating card 1 - Color (top right, BIGGER and HIGHER) */}
            <div className="absolute right-0 top-[-12px] z-20 transform rotate-[5deg]">
              <img
                src="/ai-color-analysis-personal-palette.png"
                alt="AI Color Analysis"
                className="w-auto h-[180px] drop-shadow-lg rounded-xl"
              />
            </div>

            {/* Floating card 2 - Skin match (top left, higher) */}
            <div className="absolute left-0 top-0 z-20 transform rotate-[-5deg]">
              <img
                src="/skin-tone-match-ai.png"
                alt="Skin Tone Match"
                className="w-auto h-[75px] drop-shadow-lg rounded-lg"
              />
            </div>

            {/* Floating card 3 - Body match (left, higher up) */}
            <div className="absolute left-2 top-[120px] z-20 transform rotate-[4deg]">
              <img
                src="/body-type-match-ai.png"
                alt="Body Type Match"
                className="w-auto h-[75px] drop-shadow-lg rounded-lg"
              />
            </div>

            {/* Floating card 4 - Makeup look (right, below Your Colors) */}
            <div className="absolute right-2 top-[150px] z-20 transform rotate-[-3deg]">
              <img
                src="/personalized-makeup-look.png"
                alt="Personalized Makeup Look"
                className="w-auto h-[75px] drop-shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center pb-12 px-6">
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer" onClick={() => trackDownloadClick('look_your_best_mobile')}>
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                Try StyleGenius Now
              </button>
            </a>
          </div>

          {/* Bottom divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>
        </div>
      </section>

      {/* Section 2: Shop Items That Suit You */}
      <section className="relative w-full overflow-x-hidden bg-gray-100">
        {/* Desktop layout */}
        <div className="hidden lg:block">
          {/* Top divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>

          {/* Collage layout */}
          <div className="relative min-h-[850px] max-w-[1500px] mx-auto px-12 py-20">
            {/* Text content - RIGHT side */}
            <div className="absolute right-12 top-40 z-20 max-w-lg">
              <h2 className="text-6xl font-bold mb-8 leading-tight" style={{ color: '#1a1f36' }}>
                Shop Items That Suit{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  You
                </span>
              </h2>
              <div className="mt-12 space-y-4">
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Analyze items before you buy
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Save items from different stores in one place and compare them
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Get instant feedback on what suits your style, colors, and body type
                  </p>
                </div>
              </div>
            </div>

            {/* Model - CENTER (MAIN FOCUS - HUGE LIKE LOOK YOUR BEST) */}
            <div className="absolute left-1/2 top-20 -translate-x-1/2 z-10">
              <img
                src="/woman-shopping-online-fashion-app.png"
                alt="Woman Shopping Online Fashion App"
                className="w-auto h-[620px] drop-shadow-2xl"
              />
            </div>

            {/* Laptop - LEFT side - STÖRRE och NER */}
            <div className="absolute left-12 top-[180px] z-20">
              <img
                src="/ai-stylist-browser.png"
                alt="AI Stylist Browser Extension"
                className="w-auto h-[420px] drop-shadow-xl"
              />
            </div>

            {/* Phone mockup - LEFT of model, lower */}
            <div className="absolute left-[350px] top-[240px] z-20 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/stylegenius-shopping-store-mockup.png"
                alt="StyleGenius Shopping Store"
                className="w-auto h-[480px] drop-shadow-2xl"
              />
            </div>

            {/* Product analysis modal - floating LEFT */}
            <div className="absolute left-[200px] top-[40px] z-25 transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/ai-product-analysis-shopping-assistant.png"
                alt="AI Product Analysis Shopping Assistant"
                className="w-auto h-[270px] drop-shadow-xl rounded-2xl"
              />
            </div>

            {/* Color Match card - OVANFÖR GALGEN */}
            <div className="absolute left-[480px] top-[60px] z-30 transform rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/color-match-avoid-recommendation.png"
                alt="Color Match Avoid Recommendation"
                className="w-auto h-[140px] drop-shadow-lg rounded-xl"
              />
            </div>
          </div>

          {/* Bottom divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          {/* Top divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>

          {/* Heading */}
          <div className="py-10 px-6 text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1f36' }}>
              Shop Items That Suit{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                You
              </span>
            </h2>
          </div>

          {/* Mobile collage */}
          <div className="relative min-h-[680px] px-2 pb-8">
            {/* Text boxes floating over images */}
            {/* Analyze before you buy - där save & compare var, men högre upp */}
            <div className="absolute right-4 top-[180px] z-40 max-w-[130px]">
              <div className="bg-white rounded-lg p-3 border-2 border-pink-200 drop-shadow-lg">
                <p className="text-xs text-gray-700 font-semibold leading-tight">
                  Analyze before you buy
                </p>
              </div>
            </div>
            {/* Get instant feedback - där den är (vänster om mobilen) */}
            <div className="absolute left-4 top-[320px] z-40">
              <div className="bg-white rounded-lg p-3 border-2 border-pink-200 drop-shadow-lg">
                <p className="text-xs text-gray-700 font-semibold leading-tight whitespace-nowrap">
                  Get instant feedback
                </p>
              </div>
            </div>
            {/* Save & compare - under mobilen, centrerad */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-12 z-40 w-[67vw]">
              <div className="bg-white rounded-lg p-3 border-2 border-pink-200 drop-shadow-lg">
                <p className="text-xs text-gray-700 font-semibold">
                  Save items and compare between shops to find what's best for you
                </p>
              </div>
            </div>
            {/* Phone mockup - LEFT, main focus, NER MYCKET */}
            <div className="absolute left-4 top-48 z-20">
              <img
                src="/stylegenius-shopping-store-mockup.png"
                alt="StyleGenius Shopping Store"
                className="w-auto h-[380px] drop-shadow-2xl"
              />
            </div>

            {/* Model - right side, smaller */}
            <div className="absolute right-0 top-8 z-10">
              <img
                src="/woman-shopping-online-fashion-app.png"
                alt="Woman Shopping Online"
                className="w-auto h-[280px] drop-shadow-xl"
              />
            </div>

            {/* Product analysis modal - ÖVER TELEFONEN, VÄNSTER */}
            <div className="absolute left-2 top-[-40px] z-30 transform rotate-[-2deg]">
              <img
                src="/ai-product-analysis-shopping-assistant.png"
                alt="AI Product Analysis"
                className="w-auto h-[240px] drop-shadow-lg rounded-xl"
              />
            </div>

            {/* Color Match card - ÖVER TELEFONEN, HÖGER */}
            <div className="absolute right-2 top-[-40px] z-30 transform rotate-[2deg]">
              <img
                src="/color-match-avoid-recommendation.png"
                alt="Color Match"
                className="w-auto h-[90px] drop-shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center pb-12 px-6">
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer" onClick={() => trackDownloadClick('shop_items_mobile')}>
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                Try StyleGenius Now
              </button>
            </a>
          </div>

          {/* Bottom divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>
        </div>
      </section>

      {/* Section 3: Save Money */}
      <section className="relative w-full overflow-x-hidden bg-gray-100">
        {/* Desktop layout */}
        <div className="hidden lg:block">
          {/* Top divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>

          {/* Collage layout */}
          <div className="relative min-h-[900px] max-w-[1500px] mx-auto px-12 py-20">
            {/* Text content - LEFT side (same as Look Your Best) */}
            <div className="absolute left-12 top-28 z-20 max-w-lg">
              <h2 className="text-6xl font-bold mb-8 leading-tight" style={{ color: '#1a1f36' }}>
                Save{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Money
                </span>
              </h2>
              <div className="mt-12 space-y-4 mb-8">
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Only buy items that suit your skin tone, body type, and wardrobe
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Save items from different stores in one place
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Get price alerts when items drop in price
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 drop-shadow-lg">
                  <p className="text-xl text-gray-700 font-semibold">
                    Track prices across shops automatically
                  </p>
                </div>
              </div>
            </div>

            {/* Model - CENTER (main focus - HUGE) */}
            <div className="absolute left-1/2 top-20 -translate-x-1/2 z-10">
              <img
                src="/price-tracking-ai.png"
                alt="Price Tracking AI"
                className="w-auto h-[620px] drop-shadow-2xl"
              />
            </div>

            {/* Price Alert - höger sida, lite närmare center, HÖGRE z-index */}
            <div className="absolute left-[900px] top-[80px] z-30 transform rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/price-alert-notification.png"
                alt="Price Alert Notification"
                className="w-auto h-[280px] drop-shadow-xl rounded-2xl"
              />
            </div>

            {/* Save Items - höger sida, lite närmare center, HÖGRE z-index */}
            <div className="absolute left-[850px] top-[420px] z-30 transform rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/save-items-from-stores.png"
                alt="Save Items From Stores"
                className="w-auto h-[280px] drop-shadow-xl rounded-2xl"
              />
            </div>
          </div>

          {/* Bottom divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          {/* Top divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>

          {/* Heading */}
          <div className="py-10 px-6 text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1f36' }}>
              Save{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Money
              </span>
            </h2>
          </div>

          {/* Mobile collage - mindre höjd */}
          <div className="relative min-h-[580px] px-2 pb-8">
            {/* Text boxes floating over images */}
            {/* Track prices - under Save Money rubrik */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-30px] z-40 max-w-[200px]">
              <div className="bg-white rounded-lg p-3 border-2 border-pink-200 drop-shadow-lg">
                <p className="text-xs text-gray-700 font-semibold leading-tight text-center">
                  Track prices across shops automatically
                </p>
              </div>
            </div>
            {/* Save items - UNDER modellen, centrerad */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[100px] z-40 max-w-[200px]">
              <div className="bg-white rounded-lg p-3 border-2 border-pink-200 drop-shadow-lg">
                <p className="text-xs text-gray-700 font-semibold leading-tight text-center">
                  Save items from different stores in one place
                </p>
              </div>
            </div>

            {/* Model - left side, mindre */}
            <div className="absolute left-0 top-[100px] z-10">
              <img
                src="/price-tracking-ai.png"
                alt="Price Tracking AI"
                className="w-auto h-[280px] drop-shadow-xl"
              />
            </div>

            {/* Price Alert image - right side, MYCKET UPP */}
            <div className="absolute right-2 top-[40px] z-30 transform rotate-[2deg]">
              <img
                src="/price-alert-notification.png"
                alt="Price Alert"
                className="w-auto h-[240px] drop-shadow-lg rounded-xl"
              />
            </div>

            {/* Save Items image - vänster, MYCKET UPP */}
            <div className="absolute left-2 top-[200px] z-30 transform rotate-[-3deg]">
              <img
                src="/save-items-from-stores.png"
                alt="Save Items"
                className="w-auto h-[200px] drop-shadow-lg rounded-xl"
              />
            </div>
          </div>

          {/* CTA Button - närmare collage, upp lite */}
          <div className="text-center pb-12 px-6 -mt-16">
            <a href="https://apps.apple.com/app/id6747178892" target="_blank" rel="noopener noreferrer" onClick={() => trackDownloadClick('save_money_mobile')}>
              <button
                className="px-8 py-4 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                Try StyleGenius Now
              </button>
            </a>
          </div>

          {/* Bottom divider line */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60"></div>
        </div>
      </section>

    </>
  );
};

export default AppFeatures;
