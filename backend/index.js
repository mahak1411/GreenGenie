const express = require("express");
const cors = require("cors");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data"); // Import correct FormData

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// 🔹 Add your Pl@ntNet API Key here
const API_KEY = "2b106Jgx1gSB9qbsqR7SGaQue";

app.post("/identify", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imagePath = req.file.path;
    const project = "all"; // Use "all" for general plant identification

    // Create FormData
    const formData = new FormData();
    formData.append("images", fs.createReadStream(imagePath));
    formData.append("organs", JSON.stringify(["leaf"])); // Ensure array format

    // Define API URL with query params
    const apiUrl = `https://my-api.plantnet.org/v2/identify/${project}?api-key=${API_KEY}&include-related-images=true&nb-results=5&lang=en`;

    // Make request to Pl@ntNet API
    const response = await axios.post(apiUrl, formData, {
      headers: formData.getHeaders(),
    });

    // Delete temp file after processing
    fs.unlinkSync(imagePath);

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Error processing image" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
