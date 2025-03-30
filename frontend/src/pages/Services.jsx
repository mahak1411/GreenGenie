import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaSearch, FaRobot, FaClinicMedical } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Plant Recommendation",
      description: "Get personalized plant suggestions based on your environment, soil type, and climate conditions.",
      icon: <FaLeaf className="text-4xl text-[#57CC99]" />,
      path: "/plant-recommendation"
    },
    {
      title: "Plant Identification",
      description: "Upload a photo to instantly identify plants and learn about their care requirements.",
      icon: <FaSearch className="text-4xl text-[#38A3A5]" />,
      path: "/plant-identification"
    },
    {
      title: "Plant Care Assistant",
      description: "Get instant answers to all your gardening questions from our AI-powered plant expert.",
      icon: <FaRobot className="text-4xl text-[#22577A]" />,
      path: "/chatbot"
    },
    {
      title: "Plant Health Diagnosis",
      description: "Diagnose plant health issues and get treatment recommendations with our image analysis.",
      icon: <FaClinicMedical className="text-4xl text-[#80ED99]" />,
      path: "/diseases"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf7] to-[#e0fae3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#22577A] mb-4">
            <span className="bg-gradient-to-r from-[#38A3A5] to-[#57CC99] bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how GreenGenie can help you become a better plant parent with our smart gardening tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#c7f9cc] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-8 text-center flex flex-col items-center">
                <div className="mb-6 p-4 bg-[#f0faf1] rounded-full group-hover:bg-[#e0fae3] transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#22577A] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <Link
                  to={service.path}
                  className="inline-block bg-gradient-to-r from-[#38A3A5] to-[#57CC99] text-white px-6 py-2 rounded-full text-sm font-medium hover:from-[#2d8b8d] hover:to-[#46a37f] transition-all shadow-md hover:shadow-lg"
                >
                  Try Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/about" 
            className="inline-block border-2 border-[#57CC99] text-[#22577A] px-8 py-3 rounded-full font-medium hover:bg-[#57CC99] hover:text-white transition-colors"
          >
            Learn More About Our Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
