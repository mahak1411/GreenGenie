import React, { useState } from "react";
import axios from "axios";
import plantsDataset from "../assets/Plant_dataset.js"; // Import your plant dataset

export default function PlantChatbot() {
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm your Plant Recommendation Assistant. 🌱 Tell me about your gardening conditions or what plants you're interested in!", 
      sender: "bot" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message to chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      let botText = "";

      // Check for specific plant-related queries first
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botText = "Hello plant lover! 🌿 How can I help you with your gardening needs today?";
      } 
      else if (lowerInput.includes("soil") || lowerInput.includes("type of soil")) {
        botText = "I can recommend plants based on your soil type. We support: Loamy, Sandy, Clay, Loamy-Sandy, and Acidic soils. What type do you have?";
      }
      else if (lowerInput.includes("sunlight") || lowerInput.includes("sun")) {
        botText = "Plants have different sunlight needs: Full Sun (6+ hours), Partial Shade (3-6 hours), or Full Shade (<3 hours). What's your sunlight situation?";
      }
      else if (lowerInput.includes("space") || lowerInput.includes("size")) {
        botText = "We can recommend plants for: Garden beds, Containers, Raised beds, or Indoor spaces. What space are you working with?";
      }
      else if (lowerInput.includes("recommend") || lowerInput.includes("suggest")) {
        // Try to extract plant criteria from the message
        const soilTypes = ["loamy", "sandy", "clay", "acidic"];
        const spaceTypes = ["garden", "container", "raised bed", "indoor"];
        const sunlightTypes = ["full sun", "partial shade", "full shade"];
        
        const foundSoil = soilTypes.find(type => lowerInput.includes(type));
        const foundSpace = spaceTypes.find(type => lowerInput.includes(type));
        const foundSunlight = sunlightTypes.find(type => lowerInput.includes(type));
        
        if (foundSoil || foundSpace || foundSunlight) {
          // Generate recommendations based on the criteria
          botText = generatePlantRecommendations(foundSoil, foundSpace, foundSunlight);
        } else {
          botText = "To recommend plants, I need to know about your soil type, available space, and sunlight conditions. Could you tell me more?";
        }
      }
      else {
        // For other queries, use the API
        const apiKey = 'AIzaSyAeCEHpLYX7oN5tytddH4A0NK_h99e5x9E';
        if (!apiKey) {
          throw new Error("API key is missing");
        }

        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          { 
            contents: [{ 
              parts: [{ 
                text: `You are a plant expert assistant. Answer this gardening question: ${input}. 
                Keep responses under 3 sentences and friendly. If it's about plant recommendations, 
                ask for soil type, space, and sunlight details.` 
              }] 
            }] 
          }
        );

        botText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I'd be happy to help with plant recommendations! Could you tell me about your soil type and sunlight conditions?";
      }

      const botMessage = { text: botText, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        text: "I'm having trouble connecting to plant information. Here are some general tips: Most plants need well-draining soil and appropriate sunlight. Would you like recommendations for a specific condition?",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Function to generate plant recommendations based on criteria
  const generatePlantRecommendations = (soilType, space, sunlight) => {
    let recommendations = [];
    let conditions = [];
    
    // Filter plants based on criteria
    Object.keys(plantsDataset).forEach(soilKey => {
      if (!soilType || soilKey.toLowerCase().includes(soilType)) {
        const plants = plantsDataset[soilKey].General.plants;
        
        plants.forEach(plant => {
          // In a real app, you would check other properties too
          recommendations.push(plant);
        });
      }
    });
    
    // Limit to 3 recommendations
    recommendations = recommendations.slice(0, 3);
    
    if (soilType) conditions.push(`soil: ${soilType}`);
    if (space) conditions.push(`space: ${space}`);
    if (sunlight) conditions.push(`sunlight: ${sunlight}`);
    
    if (recommendations.length === 0) {
      return "I couldn't find plants matching those exact conditions. Could you broaden your criteria?";
    }
    
    let response = `Based on ${conditions.join(", ")}, here are some plant suggestions:\n\n`;
    
    recommendations.forEach((plant, index) => {
      response += `🌱 ${plant.name} - ${plant.specialNotes || "Great choice!"}\n`;
      response += `💧 Water: ${plant.water} | ⏳ Growth: ${plant.growthDuration}\n\n`;
    });
    
    response += "Would you like more suggestions or details about any of these?";
    
    return response;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-green-50">
      <h1 className="text-2xl font-bold mb-4 text-green-700">🌿 Plant Recommendation Chatbot</h1>

      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md border border-green-300">
        <div className="h-[500px] overflow-y-auto border-b pb-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg mb-3 max-w-[90%] ${
                msg.sender === "user"
                  ? "bg-green-100 text-green-900 border border-green-200 ml-auto"
                  : "bg-gray-100 text-gray-800 border border-gray-200 mr-auto"
              }`}
            >
              {msg.text.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-2">{paragraph}</p>
              ))}
            </div>
          ))}
          {isTyping && (
            <div className="p-3 rounded-lg mb-3 max-w-[90%] bg-gray-100 text-gray-800 border border-gray-200 mr-auto">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about plants, soil types, or gardening tips..."
          />
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-r-lg transition flex items-center"
            onClick={handleSend}
            disabled={isTyping}
          >
            {isTyping ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Send'
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Try: "What plants grow well in clay soil?" or "Recommend plants for containers"
        </p>
      </div>
    </div>
  );
}