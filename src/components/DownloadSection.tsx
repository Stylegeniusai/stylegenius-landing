
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { getAppStoreUrl, getDownloadButtonText } from "../utils/deviceDetection";

const DownloadSection = () => {
  const [appStoreUrl, setAppStoreUrl] = useState('');
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    setAppStoreUrl(getAppStoreUrl());
    setButtonText(getDownloadButtonText());
  }, []);


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to elevate your confidence and life?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of girls who've already discovered their perfect style with StyleGenius
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Download App */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white text-3xl"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                📱
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download App
              </h3>
              <p className="text-gray-600 mb-6">
                Get StyleGenius on your phone and start your style transformation today
              </p>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="w-full text-lg py-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                  }}
                >
                  {buttonText}
                </Button>
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Free download • Available on iOS & Android
              </p>
            </CardContent>
          </Card>
          
          {/* For Computer */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white text-3xl"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                💻
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Computer
              </h3>
              <p className="text-gray-600 mb-6">
                Shop smarter on any website with price tracking and instant style advice
              </p>
              <a href="https://chromewebstore.google.com/detail/stylegenius-smart-shopping/nlkjogjlcljcfolmloeedefnhbkmmihb" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full text-lg py-4 border-2 hover:bg-blue-50 transition-all duration-300 rounded-full"
                  style={{
                    borderColor: '#6EC1E4',
                    color: '#6EC1E4'
                  }}
                >
                  Add to Browser
                </Button>
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Chrome
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9★</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
