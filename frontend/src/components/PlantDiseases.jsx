import React from 'react';
import { FaLeaf, FaSkullCrossbones, FaSprayCan, FaYoutube } from 'react-icons/fa';

const PlantDiseases = () => {
  const diseases = [
    {
      name: "Powdery Mildew",
      symptoms: "White, powdery spots on leaves and stems, leading to leaf distortion.",
      cause: "Fungal spores spread in warm, humid conditions.",
      treatment: "Remove infected leaves and apply neem oil or a fungicide. Ensure proper air circulation.",
      image: "https://cdn-cpkmo.nitrocdn.com/uhuJjDbJydsALGbJjNkVPvwzNkEOMBRc/assets/images/optimized/rev-a201b38/frontierlandscaping.com/wp-content/uploads/2022/04/bigstock-powdery-mildew-on-norway-maple.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=4GYpcXncLCg"
    },
    {
      name: "Fungal Leaf Spot",
      symptoms: "Brown, yellow, or black spots on leaves. Leaves may fall off prematurely.",
      cause: "Fungal spores spread via water droplets.",
      treatment: "Remove affected leaves, avoid overhead watering, and use a fungicide.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpoJkK6wxRH9AXxcxbF0PkY8Q00Oc_lQqLdNtT3moheHBFc9DG1bwn5alwUx1vjK0So0&usqp=CAU",
      youtubeUrl: "https://youtu.be/b8UGPbMiD-U?si=E66M2lLFYuhWudp_"
    },
    {
      name: "Gray Mold (Botrytis)",
      symptoms: "Brown, mushy spots on leaves and stems with gray fuzzy mold.",
      cause: "High humidity and poor ventilation.",
      treatment: "Remove infected parts, increase air circulation, and use a copper-based fungicide.",
      image: "https://th.bing.com/th/id/OIP.8lL-rIW7TXXzwmr0KPaQsgHaE9?rs=1&pid=ImgDetMain",
      youtubeUrl: "https://youtu.be/b3eGaARZR2c?si=XSIKglWyqtwbueqf"
    },
    {
      name: "White Mold (Soil Mold)",
      symptoms: "White, cotton-like growth on the soil surface.",
      cause: "Overwatering and poor airflow.",
      treatment: "Remove the mold by raking the soil, improve ventilation, and reduce watering.",
      image: "https://eastborngardens.com/wp-content/uploads/2023/05/Eastborn-Gardens-White-Mold-Anthurium-Featured.jpg",
      youtubeUrl: "https://youtu.be/ZcihLGzmBDo?si=gXLF1s8aiR6o9XRN"
    },
    {
      name: "Damping Off (Seedling Disease)",
      symptoms: "Young seedlings suddenly collapse, stems appear weak and rotted.",
      cause: "Fungal pathogens in damp conditions.",
      treatment: "Use sterile soil, avoid overwatering, and improve air circulation.",
      image: "https://www.rocketgardens.co.uk/wp-content/uploads/2020/07/damping-900x500.jpg",
      youtubeUrl: "https://youtu.be/h7ZCpjsp1OI?si=z-SkSdYzGvpbBJE3"
    },
    {
      name: "Rust",
      symptoms: "Small, brown or orange spots on leaves that may cause leaf drop.",
      cause: "Fungal spores spread in humid environments.",
      treatment: "Remove affected leaves and apply a fungicide like neem oil.",
      image: "https://cdn.britannica.com/61/185161-050-726ED959/spots-Orange-cedar-apple-rust-disease-apple-leaf.jpg",
      youtubeUrl: "https://youtu.be/b8UGPbMiD-U?si=aGu3GG8heKZ1LFfj"
    }
  ];

  return (
    <div className="bg-[#f8faf7] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#22577A] mb-4">🌱 Common Plant Diseases</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Identify, understand, and treat common plant diseases to keep your garden healthy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map((disease, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-[#c7f9cc] hover:shadow-lg transition-all duration-300">
              {/* Disease Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={disease.image} 
                  alt={disease.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Disease Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#22577A] mb-4 flex items-center">
                  <FaSkullCrossbones className="mr-2 text-red-500" />
                  {disease.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#38A3A5] flex items-center">
                      <FaLeaf className="mr-2" />
                      Symptoms
                    </h4>
                    <p className="text-gray-600 ml-6">{disease.symptoms}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-[#38A3A5]">Cause</h4>
                    <p className="text-gray-600">{disease.cause}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-[#38A3A5] flex items-center">
                      <FaSprayCan className="mr-2" />
                      Treatment
                    </h4>
                    <p className="text-gray-600 ml-6">{disease.treatment}</p>
                  </div>
                </div>
                
                {/* YouTube Link */}
                <a 
                  href={disease.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-[#57CC99] hover:text-[#38A3A5] font-medium"
                >
                  <FaYoutube className="mr-2 text-red-500" />
                  Watch treatment video
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantDiseases;