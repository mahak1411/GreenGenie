const plantsDataset = {
    // 1. LOAMY SOIL
    "Loamy Soil": {
        "General": {
            "temperature": "20-45°C",
            "sunlight": "Full Sun to Partial Shade",
            "spaceAvailable": "Garden/Raised Beds",
            "soilProperties": "Rich in organic matter, retains moisture",
            "bestSeason": "Spring to Autumn",
            "plants": [
                { "name": "Tomato", "image": "https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg", "growthDuration": "60-90 days", "water": "Moderate", "specialNotes": "Needs staking, high in lycopene" },
                { "name": "Brinjal (Eggplant)", "image": "https://gardeningsg.nparks.gov.sg/images/Plants/Brinjal_JacChua%20(2).jpg", "growthDuration": "80-100 days", "water": "Moderate", "specialNotes": "Heat-loving, rich in antioxidants" },
                { "name": "Okra", "image": "https://5.imimg.com/data5/SELLER/Default/2022/6/IX/CW/FY/31131351/all-you-need-to-know-about-okra-health-benefits-jpg.jpg", "growthDuration": "50-60 days", "water": "Moderate", "specialNotes": "Drought-tolerant once established" },
                { "name": "Spinach", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cF0OZa3hfBdFm5pEpmyMTbskVrKGiHDlog&s", "growthDuration": "30-40 days", "water": "High", "specialNotes": "Cool-season crop, iron-rich" },
                { "name": "Bitter Gourd", "image": "https://gardeningcentre.in/cdn/shop/files/bittergourdsmal.jpg?v=1706029185", "growthDuration": "55-65 days", "water": "High", "specialNotes": "Climber (needs trellis)" },
                { "name": "Bell Peppers", "image": "https://articles-1mg.gumlet.io/articles/wp-content/uploads/2017/05/rsz_shutterstock_421041241.jpg?compress=true&quality=80&w=640&dpr=2.6", "growthDuration": "70-90 days", "water": "Moderate", "specialNotes": "Rich in vitamin C" },
                { "name": "Lettuce", "image": "https://png.pngtree.com/background/20220720/original/pngtree-lettuce-leaf-hd-photography-material-picture-image_1673176.jpg", "growthDuration": "30-60 days", "water": "High", "specialNotes": "Fast-growing, cool weather crop" },
                { "name": "Kale", "image": "https://t3.ftcdn.net/jpg/02/30/97/16/360_F_230971608_hsf90qBGPcmUuv3m0LkWPAuI5i5PnQmL.jpg", "growthDuration": "50-65 days", "water": "Moderate", "specialNotes": "Nutrient-dense, cold-hardy" },
                { "name": "Broccoli", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjU2OdBAE0Mt9eYZ2ytYAXK7JSLKYQtlpQ&s", "growthDuration": "60-90 days", "water": "Moderate", "specialNotes": "Rich in vitamins C and K" },
                { "name": "Cauliflower", "image": "https://media.post.rvohealth.io/wp-content/uploads/2020/03/broccoli-cauliflower-732x549-thumbnail.jpg", "growthDuration": "55-100 days", "water": "Moderate", "specialNotes": "Needs consistent moisture" },
                { "name": "Peas", "image": "https://c4.wallpaperflare.com/wallpaper/664/303/730/leaves-peas-green-peas-pods-wallpaper-preview.jpg", "growthDuration": "60-70 days", "water": "Moderate", "specialNotes": "Nitrogen-fixing, cool-season crop" },
                { "name": "Sweet Potato", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT833_r6aW_rDMZoaG9K4KUBDicmu-Qit3QDw&s", "growthDuration": "90-170 days", "water": "Moderate", "specialNotes": "Vining plant, needs space" },
                { "name": "Watermelon", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Eta0zWZaCKFdTI1VtNkLbUOIGkLGDLGdVA&s", "growthDuration": "70-90 days", "water": "High", "specialNotes": "Needs warm soil, ample space" },
                { "name": "Cowpea", "image": "https://agritech.tnau.ac.in/agriculture/CropProduction/Pulses/pulses-pics/images/cowpea.jpg", "growthDuration": "60-90 days", "water": "Low", "specialNotes": "Drought-tolerant, improves soil" },
                { "name": "Pumpkin", "image": "https://harithaorganicseeds.com/wp-content/uploads/2024/12/pumpkin-hybrid-seeds.webp", "growthDuration": "90-120 days", "water": "Moderate", "specialNotes": "Needs ample space to spread" },
                { "name": "Cantaloupe", "image": "https://c1.wallpaperflare.com/preview/210/814/490/muskmelons-cantaloupes-fruit-melon.jpg", "growthDuration": "80-90 days", "water": "Moderate", "specialNotes": "Sweet, fragrant melons" }
            ]
        }
    },

    // 2. SANDY SOIL
    "Sandy Soil": {
        "General": {
            "temperature": "25-40°C",
            "sunlight": "Full Sun",
            "spaceAvailable": "Farm/Containers",
            "soilProperties": "Fast-draining, low fertility",
            "bestSeason": "Summer",
            "plants": [
                { "name": "Carrots", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKT4EXjUVXXljsE7JQm61v_RF3wrxdELPLQ&s", "growthDuration": "70-80 days", "water": "Moderate", "specialNotes": "Loose soil prevents deformities" },
                { "name": "Radish", "image": "https://cdn.britannica.com/19/234319-050-B273922D/Daikon-radish.jpg", "growthDuration": "25-30 days", "water": "Moderate", "specialNotes": "Quick harvest, tolerates poor soil" },
                { "name": "Thyme", "image": "https://cdn.pixabay.com/photo/2016/10/27/16/28/thyme-1775656_1280.jpg", "growthDuration": "Perennial", "water": "Low", "specialNotes": "Drought-resistant, culinary herb" },
                { "name": "Rosemary", "image": "https://cdn.pixabay.com/photo/2015/12/13/00/11/rosemary-1090419_640.jpg", "growthDuration": "Perennial", "water": "Low", "specialNotes": "Aromatic, repels pests" },
                { "name": "Lavender", "image": "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF2ZW5kZXJ8ZW58MHx8MHx8fDA%3D", "growthDuration": "Perennial", "water": "Low", "specialNotes": "Needs good drainage, fragrant" },
                { "name": "Aloe Vera", "image": "https://www.bombaygreens.com/cdn/shop/articles/12_2745324b-1207-4fba-8a38-e0f4831677db.jpg?v=1741863236", "growthDuration": "Perennial", "water": "Low", "specialNotes": "Succulent, medicinal uses" }
            ]
        }
    },

    // 3. CLAY SOIL
    "Clay Soil": {
        "General": {
            "temperature": "15-30°C",
            "sunlight": "Partial Shade",
            "spaceAvailable": "Pots/Raised Beds",
            "soilProperties": "Heavy, retains water",
            "bestSeason": "Spring/Autumn",
            "plants": [
                { "name": "Rose", "image": "https://images.unsplash.com/photo-1596073419667-9d77d59f033f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D", "growthDuration": "Perennial", "water": "Moderate", "specialNotes": "Prune regularly, fragrant blooms" },
                { "name": "Jasmine", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1o8fQ4Llmry7_jHWVjN-mgQ94bojPOCaUcw&s", "growthDuration": "Perennial", "water": "High", "specialNotes": "Strong fragrance, needs support" },
                { "name": "Hibiscus", "image": "https://www.thespruce.com/thmb/mE9-28XFACXl657Q3efps9rbqaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hibiscus-growing-guide-5192541-hero-615db48a744245c49517f7f4bef54d18.JPG", "growthDuration": "Perennial", "water": "High", "specialNotes": "Large flowers, tropical vibe" },
                { "name": "Daylily", "image": "https://i0.wp.com/plantzone.in/wp-content/uploads/2024/07/5-2.jpg", "growthDuration": "Perennial", "water": "Moderate", "specialNotes": "Edible flowers, low-maintenance" },
                { "name": "Russian Sage", "image": "https://cdn.prod.website-files.com/623de0e9fe0f9c6ed17335ad/6438687296326bf48561d91e_how-to-grow-russian-sage-1402795-hero-f437971649e4482e82badf89e598d723.webp", "growthDuration": "Perennial", "water": "Low", "specialNotes": "Drought-tolerant, silvery foliage" },
                { "name": "Astilbe", "image": "https://www.farmersstop.com/cdn/shop/products/Astary_519x400.png?v=1710229404", "growthDuration": "Perennial", "water": "High", "specialNotes": "Feathery plumes, shade-loving" }
            ]
        }
    },

    // 4. LOAMY-SANDY SOIL
    "Loamy-Sandy Soil": {
        "General": {
            "temperature": "20-35°C",
            "sunlight": "Full Sun",
            "spaceAvailable": "Garden/Farm",
            "soilProperties": "Well-drained, mix of loam and sand",
            "bestSeason": "Spring/Summer",
            "plants": [
                { "name": "Mango", "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg", "growthDuration": "5-7 years", "water": "Moderate", "specialNotes": "Tropical, rich in vitamin C" },
                { "name": "Guava", "image": "https://cdn.britannica.com/59/139059-050-30794D53/Guava-fruit.jpg", "growthDuration": "2-4 years", "water": "Moderate", "specialNotes": "High in fiber, pest-resistant" },
                { "name": "Papaya", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUsVug1EoUOXspRCbOdcjBFIV704Huu58LA&s", "growthDuration": "6-12 months", "water": "High", "specialNotes": "Fast-growing, needs drainage" },
                { "name": "Dragon Fruit", "image": "https://connect.healthkart.com/wp-content/uploads/2022/09/900x500_thumbnail_HK-13th-Sep-IG-Story.png", "growthDuration": "2-3 years", "water": "Low", "specialNotes": "Cactus family, exotic fruit" },
                { "name": "Passion Fruit", "image": "https://media.istockphoto.com/id/860079962/photo/fresh-passion-fruit-on-wood-table-in-top-view-flat-lay-for-background-or-wallpaper-ripe.jpg?s=612x612&w=0&k=20&c=gWEzfI5RT4MQz2OkkiD-juebxlpdLLgry0mNiM8uYhM=", "growthDuration": "1-2 years", "water": "Moderate", "specialNotes": "Vining, tropical flavor" },
                { "name": "Pomegranate", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pomegranate_fruit_-_whole_and_piece_with_arils.jpg/1200px-Pomegranate_fruit_-_whole_and_piece_with_arils.jpg", "growthDuration": "2-3 years", "water": "Low", "specialNotes": "Drought-tolerant, antioxidant-rich" }
            ]
        }
    },

    // 5. ACIDIC SOIL
    "Acidic Soil": {
        "General": {
            "temperature": "10-25°C",
            "sunlight": "Partial Shade",
            "spaceAvailable": "Garden/Containers",
            "soilProperties": "pH 4.5-6.0, high organic matter",
            "bestSeason": "Spring/Autumn",
            "plants": [
                { "name": "Blueberries", "image": "https://cdn.britannica.com/26/6726-050-1074E116/berries-blueberry-bush-Vaccinium.jpg", "growthDuration": "2-3 years", "water": "High", "specialNotes": "Requires acidic soil (pH 4.5-5.5)" },
                { "name": "Azaleas", "image": "https://simplytrees.com/cdn/shop/articles/Azalea_Care_During_Summer_Heat_Expert_Tips.webp?v=1721343018", "growthDuration": "Perennial", "water": "Moderate", "specialNotes": "Ornamental, acid-loving" },
                { "name": "Rhododendron", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUPplb2REgQFcJC5LQEELtqbV_tcSSNSAow&s", "growthDuration": "Perennial", "water": "Moderate", "specialNotes": "Evergreen, showy flowers" },
                { "name": "Camellia", "image": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Camellia_japonica_NBG.jpg", "growthDuration": "Perennial", "water": "Moderate", "specialNotes": "Glossy leaves, winter blooms" },
                { "name": "Strawberries", "image": "https://images.immediate.co.uk/production/volatile/sites/10/2018/03/2048x1365-Best-strawberries-to-grow-LI1834878-9b05a14.jpg?quality=90&crop=9px,11px,2031px,1354px&resize=940,627", "growthDuration": "60-90 days", "water": "High", "specialNotes": "Prefers pH 5.5-6.5" }
            ]
        }
    },

    // 6. URBAN GARDENING
    "Urban Gardening": {
        "General": {
            "temperature": "18-30°C",
            "sunlight": "Partial Sun to Full Sun",
            "spaceAvailable": "Containers/Indoors",
            "soilProperties": "Well-drained potting mix",
            "bestSeason": "Year-round",
            "plants": [
                { "name": "Microgreens", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbl8zq3gEu3ao8HQnB2KA5TFdOL5vX0e_KGg&s", "growthDuration": "10-14 days", "water": "High", "specialNotes": "Nutrient-dense, fast harvest" },
                { "name": "Dwarf Citrus", "image": "https://gardenerspath.com/wp-content/uploads/2019/03/Learn-to-Grow-Dwarf-Citrus-Trees.jpg", "growthDuration": "3-5 years", "water": "Moderate", "specialNotes": "Potted lemons/limes" },
                { "name": "Basil", "image": "https://gardeningsg.nparks.gov.sg/images/Plants/ThaiBasil_JacChua%20(1).jpg", "growthDuration": "50-75 days", "water": "Moderate", "specialNotes": "Culinary herb, needs warmth" },
                { "name": "Cherry Tomatoes", "image": "https://www.bhg.com/thmb/q8rfs1JikMcnBN8StgjLdYFwHdE=/4000x0/filters:no_upscale():strip_icc()/BHG-Cherry-Tomato-Plant-1407386653-69dc42c014cb4fc1a9788e595cf000b7.jpg", "growthDuration": "60-80 days", "water": "Moderate", "specialNotes": "Compact varieties for pots" },
                { "name": "Mint", "image": "https://gardenerspath.com/wp-content/uploads/2024/03/Best-Mint-Varieties-Feature.jpg", "growthDuration": "Perennial", "water": "High", "specialNotes": "Invasive (grow in containers)" }
            ]
        }
    }
};

export default plantsDataset;