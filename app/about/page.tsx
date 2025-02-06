// app/about/page.tsx
import React from "react";

// Mock data (replace with actual API calls or CMS data)
const aboutData = {
  title: "About Our Shoe Store",
  description: [
    "Welcome to Nike Shoes! Our mission is to provide you with high-quality, stylish shoes that perfectly match your lifestyle.",
    "Whether you’re in search of casual sneakers, performance sports shoes, or elegant formal footwear, our extensive collection caters to every need. We put quality, innovation, and customer satisfaction at the forefront of everything we do.",
    "Thank you for choosing Nike Shoes. We are committed to enhancing your shopping experience and ensuring that every step you take is in style and comfort!",
  ],
  features: [
    { icon: "👟", title: "Wide Variety", description: "Explore our diverse collection of shoes for every occasion." },
    { icon: "🚀", title: "Fast Delivery", description: "Get your favorite shoes delivered to your doorstep in no time." },
    { icon: "💎", title: "Premium Quality", description: "We source only the best materials for our products." },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full space-y-12">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            {aboutData.title}
          </h1>
        </div>

        {/* Description Section */}
        <div className="space-y-6">
          {aboutData.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-600 leading-relaxed animate-fade-in-up transform transition-all hover:scale-105 hover:text-gray-800 hover:font-bold"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {aboutData.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                {feature.title}
              </h2>
              <p className="text-gray-600 font-bold">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}