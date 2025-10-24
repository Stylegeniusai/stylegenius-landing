
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "👗",
      title: "Outfit Creation",
      description: "Create amazing outfits from your real wardrobe when you don't know what to wear",
      color: "#FF70D9"
    },
    {
      icon: "🎨",
      title: "Color Analysis",
      description: "Discover what colors work best for your skin tone and which ones to avoid",
      color: "#6EC1E4"
    },
    {
      icon: "💬",
      title: "Expert Advice",
      description: "Get professional styling advice and opinions before buying new items",
      color: "#A855F7"
    },
    {
      icon: "✨",
      title: "Outfit Check",
      description: "Get feedback on your outfits and tips on how to improve them",
      color: "#FFB3E6"
    },
    {
      icon: "🛍️",
      title: "Smart Shopping",
      description: "Shop smarter with your browser extension - analyze items, build outfits, track prices",
      color: "#9ED8F5"
    },
    {
      icon: "💎",
      title: "Style Friend",
      description: "Your personal style expert available to chat 24/7 whenever you need advice",
      color: "#C084FC"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Look
            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            StyleGenius combines AI technology with fashion expertise to be your personal styling assistant,
            available in your phone and browser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
