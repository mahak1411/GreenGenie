import React from 'react';

const GardeningTips = () => {
  const tips = [
    {
      title: "How to Choose the Right Plants",
      content: "Selecting the right plants for your garden is essential for successful growth. Consider your climate, soil type, and the amount of sunlight available. Native plants often require less maintenance, while seasonal flowers can add bursts of color throughout the year.",
      icon: "🌱"
    },
    {
      title: "How to Prepare the Soil",
      content: "Healthy soil is the foundation of a thriving garden. Start by testing your soil's pH and nutrient levels, then enrich it with compost or organic matter. Loosening the soil improves aeration and drainage, helping plant roots grow stronger and deeper.",
      icon: "🪴"
    },
    {
      title: "How to Water Plants Properly",
      content: "Watering your plants correctly ensures their health and longevity. Deep watering encourages roots to grow deeper, making plants more drought-resistant. Water early in the morning or late in the evening to minimize evaporation and prevent fungal diseases.",
      icon: "💧"
    },
    {
      title: "How to Control Weeds Naturally",
      content: "Weeds compete with your plants for nutrients and space. Mulching is an effective way to suppress weeds while retaining soil moisture. Hand-pulling weeds regularly and using organic solutions like vinegar or boiling water can also help keep them under control.",
      icon: "🚫"
    },
    {
      title: "How to Use Organic Fertilizers",
      content: "Organic fertilizers provide essential nutrients without harming the environment. Compost, manure, and bone meal are great natural options that improve soil fertility. Applying fertilizers at the right time and in the right amounts prevents over-fertilization and promotes healthy plant growth.",
      icon: "🌿"
    },
    {
      title: "How to Protect Plants from Pests",
      content: "Keeping pests away from your garden requires a mix of prevention and natural remedies. Companion planting, such as growing marigolds near vegetables, can deter harmful insects. Using neem oil, insecticidal soap, or introducing beneficial insects like ladybugs helps manage pests without chemicals.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Essential Gardening Tips</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-green-100"
          >
            <div className="p-6">
              <div className="text-4xl mb-4 text-green-500">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">{tip.title}</h3>
              <p className="text-gray-600">{tip.content}</p>
            </div>
            <div className="px-6 py-4 bg-green-50 border-t border-green-100">
              <span className="text-xs font-medium text-green-600">TIP {index + 1} OF {tips.length}</span>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default GardeningTips;