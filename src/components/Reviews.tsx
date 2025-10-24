import React from "react";

const Reviews = () => {
  const reviews = [
    {
      text: "Love having a friend and expert always ready to talk to about style, clothes, outfits and shopping",
      author: "iOS User",
      rating: 5
    },
    {
      text: "StyleGenius has totally changed how I get dressed. It saves me so much time! It feels like having a personal stylist in your pocket - love it!",
      author: "App Store Review",
      rating: 5
    },
    {
      text: "Finally an app that gets my style! The color analysis was spot on and now I feel so much more confident shopping.",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "I've saved so much money with the price tracking feature. Plus the outfit suggestions are actually good!",
      author: "Emma L.",
      rating: 5
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
            What Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #FF70D9, #6EC1E4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Users
            </span>
            {" "}Say
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2 md:mb-4">
            <div className="flex text-yellow-400 text-lg md:text-2xl">
              ⭐⭐⭐⭐⭐
            </div>
            <span className="text-sm md:text-lg font-semibold text-gray-700">4.9/5</span>
          </div>
          <p className="text-sm md:text-lg text-gray-600">
            See what early users are saying
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-md md:shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 text-sm md:text-lg mb-2 md:mb-3">
                {"⭐".repeat(review.rating)}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-normal text-[10px] md:text-lg mb-2 md:mb-4 leading-tight md:leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-2 md:mr-3 text-xs md:text-base">
                  {review.author.charAt(0)}
                </div>
                <span className="text-gray-600 font-medium text-xs md:text-base">
                  — {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
            <div className="text-2xl md:text-4xl font-bold text-pink-600 mb-1 md:mb-2">4.9★</div>
            <div className="text-xs md:text-base text-gray-600">App Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;