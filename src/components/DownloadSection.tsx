
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const DownloadSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleAndroidSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for joining!",
        description: "We'll notify you when StyleGenius for Android is ready.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of girls who've already discovered their perfect style with StyleGenius
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* iOS Download */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-blue-400 rounded-2xl flex items-center justify-center text-white text-3xl">
                📱
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download Now for iOS
              </h3>
              <p className="text-gray-600 mb-6">
                Get StyleGenius on your iPhone and start your style transformation today
              </p>
              <Button 
                size="lg"
                className="w-full text-lg py-4 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)'
                }}
              >
                Download for iOS
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Free download • iOS 14.0 or later
              </p>
            </CardContent>
          </Card>
          
          {/* Android Waitlist */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-3xl">
                🤖
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Coming Soon to Android
              </h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when StyleGenius launches on Android
              </p>
              <form onSubmit={handleAndroidSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center"
                />
                <Button 
                  type="submit"
                  size="lg"
                  variant="outline"
                  className="w-full text-lg py-4 border-2 hover:bg-gray-50"
                >
                  Join Android Waitlist
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                Get early access • No spam, we promise
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Outfits Created</div>
            </div>
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
