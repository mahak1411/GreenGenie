import React, { useState } from "react";
import plantsDataset from "../assets/Plant_dataset.js";

const PlantSelectionForm = () => {
    const [soilType, setSoilType] = useState("");
    const [temperature, setTemperature] = useState("");
    const [spaceAvailable, setSpaceAvailable] = useState("");
    const [recommendedPlants, setRecommendedPlants] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false);

    const handleSoilTypeChange = (e) => {
        const selectedSoil = e.target.value;
        setSoilType(selectedSoil);
        setShowNoResults(false); // Reset no results message when soil type changes
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!soilType) {
            alert("Please select soil type.");
            return;
        }

        const selectedCategory = plantsDataset[soilType]?.General;
        if (!selectedCategory) {
            setRecommendedPlants([]);
            setShowNoResults(true);
            return;
        }

        let tempValid = true;
        if (temperature) {
            const tempRange = selectedCategory.temperature.replace("°C", "").split("-").map(Number);
            const userTemp = parseInt(temperature);
            tempValid = userTemp >= tempRange[0] && userTemp <= tempRange[1];
        }

        const spaceValid = !spaceAvailable || 
                         !selectedCategory.spaceAvailable || 
                         selectedCategory.spaceAvailable.split("/").some(space => space.trim() === spaceAvailable);

        if (tempValid && spaceValid) {
            setRecommendedPlants(selectedCategory.plants || []);
            setShowNoResults(selectedCategory.plants.length === 0);
        } else {
            setRecommendedPlants([]);
            setShowNoResults(true);
        }
    };

    const getAllSpaceOptions = () => {
        const spaces = new Set();
        Object.values(plantsDataset).forEach(soil => {
            if (soil.General?.spaceAvailable) {
                soil.General.spaceAvailable.split("/").forEach(space => spaces.add(space.trim()));
            }
        });
        return Array.from(spaces);
    };

    return (
        <div className="p-8 max-w-3xl mx-auto bg-[#f8faf7] rounded-2xl shadow-lg border border-[#c7f9cc]">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#22577A]">🌿 Plant Recommendation System</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-[#22577A] mb-2">Soil Type:</label>
                        <select 
                            className="w-full p-3 border border-[#80ED99] rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-[#38A3A5] focus:border-[#38A3A5]"
                            value={soilType} 
                            onChange={handleSoilTypeChange}
                            required
                        >
                            <option value="">Select Soil Type</option>
                            {Object.keys(plantsDataset).map((soil) => (
                                <option key={soil} value={soil}>{soil}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-[#22577A] mb-2">Space Available:</label>
                        <select 
                            className="w-full p-3 border border-[#80ED99] rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-[#38A3A5] focus:border-[#38A3A5]"
                            value={spaceAvailable} 
                            onChange={(e) => setSpaceAvailable(e.target.value)}
                        >
                            <option value="">Any Space</option>
                            {getAllSpaceOptions().map((space) => (
                                <option key={space} value={space}>{space}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#22577A] mb-2">Temperature (°C):</label>
                    <input 
                        type="number" 
                        className="w-full p-3 border border-[#80ED99] rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-[#38A3A5] focus:border-[#38A3A5]"
                        value={temperature} 
                        onChange={(e) => setTemperature(e.target.value)}
                        placeholder="e.g., 25" 
                    />
                </div>

                <div className="pt-2">
                    <button 
                        type="submit" 
                        className="w-full md:w-1/2 mx-auto block bg-gradient-to-r from-[#38A3A5] to-[#57CC99] hover:from-[#2d8b8d] hover:to-[#46a37f] text-white font-semibold p-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Find Suitable Plants
                    </button>
                </div>
            </form>

            {recommendedPlants.length > 0 ? (
                <div className="mt-10">
                    <h3 className="text-xl font-bold text-[#22577A] mb-6 border-b border-[#80ED99] pb-3">Recommended Plants</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {recommendedPlants.map((plant, index) => (
                            <div 
                                key={index} 
                                className="p-5 bg-white rounded-lg shadow-sm border border-[#c7f9cc] hover:border-[#57CC99] transition-all duration-200 hover:shadow-md"
                            >
                                {plant.image && (
                                    <div className="h-40 mb-4 overflow-hidden rounded-lg">
                                        <img 
                                            src={plant.image} 
                                            alt={plant.name} 
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                
                                <h4 className="font-semibold text-lg text-[#22577A] mb-2">{plant.name}</h4>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><span className="font-medium text-[#38A3A5]">Growth:</span> {plant.growthDuration}</p>
                                    <p><span className="font-medium text-[#38A3A5]">Water:</span> {plant.water}</p>
                                    {plant.specialNotes && (
                                        <p className="mt-3 text-[#57CC99] italic text-xs">{plant.specialNotes}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : showNoResults ? (
                <div className="mt-10 text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-lg font-medium text-yellow-800 mb-2">No plants match your criteria</h3>
                    <p className="text-yellow-700">
                        Try adjusting your filters. You might want to:
                    </p>
                    <ul className="list-disc list-inside text-sm text-yellow-700 mt-2 space-y-1">
                        <li>Select a different soil type</li>
                        <li>Change the temperature range</li>
                        <li>Consider different space requirements</li>
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default PlantSelectionForm;      