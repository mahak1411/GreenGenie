import { useState } from "react";
import axios from "axios";

const PlantIdentificationApp = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null); // Clear previous results when new image is uploaded
      setError(null); // Clear any previous errors
    }
  };

  const handleIdentify = async () => {
    if (!image) {
      setError("Please upload an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:5000/identify", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setError("Error identifying plant. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8faf7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-[#c7f9cc]">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#38A3A5] to-[#57CC99] p-6 text-center">
          <h2 className="text-3xl font-bold text-white">🌿 Plant Identifier</h2>
          <p className="text-white/90 mt-2">Upload a photo to identify plants in seconds</p>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8">
          {/* Upload Section */}
          <div className="text-center mb-8">
            <label className="cursor-pointer inline-flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-[#f0faf1] border-2 border-dashed border-[#57CC99] flex items-center justify-center mb-4">
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <svg className="w-10 h-10 text-[#57CC99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <span className="bg-[#57CC99] text-white font-medium py-2 px-6 rounded-full hover:bg-[#46a37f] transition-all shadow-md">
                {preview ? "Change Image" : "Select Image"}
              </span>
              <input type="file" onChange={handleImageChange} className="hidden" accept="image/*" />
            </label>
          </div>

          {/* Identify Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleIdentify}
              disabled={loading || !preview}
              className={`relative overflow-hidden w-full md:w-1/2 bg-gradient-to-r from-[#38A3A5] to-[#57CC99] hover:from-[#2d8b8d] hover:to-[#46a37f] text-white font-semibold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl ${
                (loading || !preview) ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Identifying...
                  </span>
                </>
              ) : (
                "Identify Plant"
              )}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
              <p>{error}</p>
            </div>
          )}

          {/* Results Section */}
          {result && (
            <div className="mt-8 animate-fadeIn">
              <h3 className="text-2xl font-bold text-[#22577A] mb-6 text-center">
                {result.results?.length > 0 ? "🌱 Identification Results" : "No Matches Found"}
              </h3>
              
              {result.results?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {result.results.map((plant, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-[#e0fae3] hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Plant Image */}
                      {plant.images?.[0]?.url?.o && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={plant.images[0].url.o} 
                            alt={plant.species?.scientificName || "Plant"} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}
                      
                      {/* Plant Info */}
                      <div className="p-5">
                        <h4 className="text-xl font-bold text-[#22577A] mb-2">
                          {plant.species?.scientificName || "Unknown Species"}
                        </h4>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          {plant.species?.commonNames?.length > 0 && (
                            <p>
                              <span className="font-medium text-[#38A3A5]">Common Names: </span>
                              {plant.species.commonNames.join(", ")}
                            </p>
                          )}
                          
                          {plant.species?.family?.scientificName && (
                            <p>
                              <span className="font-medium text-[#38A3A5]">Family: </span>
                              {plant.species.family.scientificName}
                            </p>
                          )}
                          
                          {plant.score && (
                            <p>
                              <span className="font-medium text-[#38A3A5]">Confidence: </span>
                              {(plant.score * 100).toFixed(1)}%
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-2 text-gray-600">We couldn't identify any plants in this image.</p>
                  <p className="text-sm text-gray-500 mt-1">Try a clearer photo of a single plant.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantIdentificationApp;