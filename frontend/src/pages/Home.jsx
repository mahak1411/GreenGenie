import background from "../assets/bg.avif";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Blurred overlay (kept as requested) */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-16 flex flex-col items-center">
        {/* Main heading with animated underline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 leading-tight">
          Green Genie
          <span className="block text-2xl md:text-3xl font-normal mt-4">
            Growing a greener tomorrow
          </span>
          <span className="block w-24 h-1 bg-[#57CC99] mx-auto mt-6 rounded-full"></span>
        </h1>

        {/* Description text */}
        <p className="text-white/90 text-lg md:text-xl text-center max-w-2xl mb-10">
          Discover the perfect plants for your space with our AI-powered recommendations.
          Create your personal urban oasis today.
        </p>

        {/* CTA button with hover animation */}
        <Link 
          to="/plant-recommendation" 
          className="bg-gradient-to-r from-[#57CC99] to-[#38A3A5] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:from-[#46a37f] hover:to-[#2d8b8d] transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Started
        </Link>

        {/* Feature highlights (appears on larger screens) */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-16 w-full">
          {[
            { icon: "🌿", text: "Personalized Plant Recommendations" },
            { icon: "🔍", text: "Instant Plant Identification" },
            { icon: "💡", text: "Expert Care Guidance" }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex items-center">
              <span className="text-2xl mr-3">{item.icon}</span>
              <span className="text-white font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {[1, 2, 3].map((item) => (
          <div 
            key={item} 
            className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer transition-colors"
          ></div>
        ))}
      </div>
    </div>
  );
}