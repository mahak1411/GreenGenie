import PlantSelectionForm from "./components/PlantsSelectionForm";
import PlantIdentificationApp from "./components/PlantIdentificationApp";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import PlantDiseases from "./components/PlantDiseases";
import Chatbot from "./components/Chatbot";
import GardeningTips from "./pages/GardeningTips";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant-recommendation" element={<PlantSelectionForm />} />
        <Route path="/plant-identification" element={<PlantIdentificationApp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/diseases" element={<PlantDiseases/>} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/how-to" element={<GardeningTips />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </>
  );
}

export default App;