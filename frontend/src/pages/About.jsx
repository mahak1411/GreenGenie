import React from "react";
import { FaLeaf, FaChartLine, FaMapMarkerAlt, FaBook, FaRocket, FaUsers, FaCloudSun, FaRobot } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Cultivating Smarter Gardens Through Technology
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our intelligent recommendation system bridges the gap between nature and technology, helping you grow thriving plants with data-driven insights.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                We believe everyone should have access to the knowledge needed to grow healthy plants, regardless of their gardening experience. Our platform democratizes horticultural expertise through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Personalized recommendations based on your unique environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Science-backed growing techniques simplified for home gardeners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Continuous learning from global gardening success stories</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6 h-full">
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Gardening technology"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLeaf className="text-4xl text-green-600" />,
                title: "Smart Recommendations",
                description: "Get plant suggestions perfectly matched to your soil type, climate, and gardening space."
              },
              {
                icon: <FaChartLine className="text-4xl text-green-600" />,
                title: "Growth Analytics",
                description: "Track your plants' progress with our data visualization tools and growth timelines."
              },
              {
                icon: <FaMapMarkerAlt className="text-4xl text-green-600" />,
                title: "Location Intelligence",
                description: "Hyper-local suggestions based on your exact geographical conditions."
              },
              {
                icon: <FaBook className="text-4xl text-green-600" />,
                title: "Comprehensive Guides",
                description: "Step-by-step instructions from planting to harvest with troubleshooting tips."
              },
              {
                icon: <FaRocket className="text-4xl text-green-600" />,
                title: "Optimized Performance",
                description: "Lightning-fast recommendations powered by our advanced algorithms."
              },
              {
                icon: <FaUsers className="text-4xl text-green-600" />,
                title: "Community Wisdom",
                description: "Learn from thousands of successful gardeners in our growing network."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-100">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center text-green-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="bg-green-800 text-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">What's Growing Next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-700 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <FaRobot className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">AI Plant Doctor</h3>
              </div>
              <p>Coming soon - diagnose plant health issues by uploading photos and get treatment recommendations.</p>
            </div>
            <div className="bg-green-700 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <FaCloudSun className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Weather Integration</h3>
              </div>
              <p>Future update will provide real-time weather-based care recommendations for your garden.</p>
            </div>
            <div className="bg-green-700 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <FaUsers className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Community Hub</h3>
              </div>
              <p>Connect with fellow gardeners, share successes, and get advice in our upcoming forum.</p>
            </div>
          </div>
        </div>

        {/* Team/Collaborators */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Roots</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Developed by plant enthusiasts and data scientists, our platform combines horticultural expertise with cutting-edge technology. We collaborate with agricultural universities and community gardens to continuously improve our recommendations.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
            Learn About Our Research
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;