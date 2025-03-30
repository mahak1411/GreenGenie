import React from "react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "How To Grow A Hanging Spider Plant – For An Elegant Indoor Or Outdoor Display",
      excerpt: "Spider plants are fun, easy to care for, and altogether charming plants with grass-like leaves that form attractive hanging displays.",
      image: "https://cdn.mos.cms.futurecdn.net/89PivZiqvnMDXutH5UFw7A-1024-80.jpg.webp",
      content: [
        "Spider plants (Chlorophytum comosum) are fun, easy to care for, and altogether charming plants.",
        "Their grass-like leaves have a mounding habit and grow long enough to arch down to form very attractive hanging plants.",
        "The plant develops baby plants – truly miniature spider plants - on long, flexible stalks that hang down from all sides of the plant.",
        "There is a variety of spider plant cultivars, including an all-green variety, but variegated varieties like 'Vittatum' are particularly attractive.",
        "Spider plants don't do well in direct sun or even too much heat. They tolerate shade but grow best in dappled sunshine or indirect light.",
        "Plant your hanging spider plant in average potting soil with drain holes. Water when the top inches of soil dry out, using rainwater or distilled water.",
        "Don't fertilize spider plants very often as too much fertilizer can burn the roots and limit baby production.",
        "Spider plants like to be a little pot-bound and have more babies when they are tight in their containers."
      ]
    },
    {
      id: 2,
      title: "5 Sensational Succulent Arrangement Ideas For A Showstopping Container Anyone Can Try",
      excerpt: "Combine succulents in creative ways with these innovative container ideas that showcase their diverse forms and colors.",
      image: "https://cdn.mos.cms.futurecdn.net/MisQE9p9aWyhXupBMnxieG-450-80.jpg.webp",
      content: [
        "Combining the vast number of forms, colors, and textures is one way to capitalize on your succulent arrangement ideas.",
        "Succulent plant arrangement ideas are limited only by available plants and your imagination.",
        "When considering succulent potting ideas, one common design approach is to have a thriller (main plant), a filler, and a spiller (cascading plants).",
        "Mixed Succulent Dish: A classic way to display bright bold succulents with different characteristics but the same growing requirements.",
        "Fairy Garden Pot: Inventive succulent fairy garden ideas are ideal for creating whimsical miniature landscapes.",
        "Terrarium Succulents: A desert-themed display in a glass container, using plants that can handle humidity like hens and chicks.",
        "Hanging Succulents: Vertical displays with plants like string of pearls and Burro's tail add elevated visual interest.",
        "Creative Containers: Repurpose common household items into unique planters for succulents."
      ]
    },
    {
      id: 3,
      title: "How To Care For A Variegated Spider Plant – Plus, Unique Varieties To Try",
      excerpt: "The variegated spider plant is the most common variety and makes a stunning, easy-care hanging houseplant.",
      image: "https://cdn.mos.cms.futurecdn.net/VGT8BMRykgUNUjrFQQQyQS-1024-80.jpg.webp",
      content: [
        "The variegated spider plant (Chlorophytum comosum 'Vittatum') is the most common spider plant variety.",
        "It features arching, strappy green leaves with ivory stripes down the center.",
        "For best results, locate your plant where it gets bright indirect light. Direct sun will burn the leaves.",
        "Water every week or 10 days with non-fluoridated water, ensuring the container has drain holes.",
        "Spider plants appreciate temperatures between 50-70°F and medium humidity levels.",
        "They are not picky about soil as long as it drains well. Wet soil can cause root rot.",
        "Variegated spider plants are sensitive to excess fertilizer which can limit baby production.",
        "Common problems include leaf tip burn from direct sun, root rot from wet soil, and pests like spider mites.",
        "Propagate by planting the baby spiderettes or by dividing an overgrown plant."
      ]
    },
    {
      id: 4,
      title: "Are Snake Plants Toxic To Dogs? Keep Your Pup Safe Around These Popular Houseplants",
      excerpt: "While snake plants are excellent air purifiers, they contain compounds that can be harmful to pets if ingested.",
      image: "https://cdn.mos.cms.futurecdn.net/ZRcbKCiMaudgDdAWVZnfCQ-1280-80.jpg.webp",
      content: [
        "Snake plants contain compounds called saponins which are toxic to dogs when ingested.",
        "Symptoms of snake plant toxicity include drooling, vomiting, diarrhea, and lethargy.",
        "The toxins can also affect cats and horses, not just dogs.",
        "To keep pets safe, place snake plants out of reach or consider gifting them to pet-free homes.",
        "If your dog eats snake plant leaves, determine how much was consumed and contact your veterinarian.",
        "While rarely lethal, quick veterinary attention can help manage symptoms effectively.",
        "Consider pet-safe alternatives like spider plants, Boston ferns, or parlor palms if you have curious pets."
      ]
    },
    {
        id: 5,
        title : "How Often Should You Water A Spider Plant? Tips To Keep Spider Plants Happy And Healthy ",
        excerpt: "Spider plants are forgiving and easy to care for, but they do have specific watering needs to thrive.",
        image : "https://cdn.mos.cms.futurecdn.net/sPBUsLxoshUz6SnfT578cQ-1280-80.jpg.webp",
        content : [
            "Spider plants are forgiving and easy to care for, but they do have specific watering needs.",
            "Water spider plants every 7-10 days, allowing the top inch of soil to dry out between waterings.",
            "Use distilled or rainwater to prevent fluoride damage and root rot.",
            "In winter, reduce watering frequency as spider plants enter a dormant phase.",
            "Signs of overwatering include yellowing leaves and root rot, while underwatering causes brown leaf tips.",
            "Spider plants prefer bright indirect light but can tolerate low light conditions."
        ]
    },{
        id:6,
        title : " Easter Cactus Care Guide: Grow Thriving Houseplants With Stunning Spring Blooms ",
        excerpt : "Easter cacti are easy to care for and produce beautiful blooms in spring. Learn how to keep them thriving.",
        image : "https://cdn.mos.cms.futurecdn.net/KBumwA6Q2SR7A9mqFoi7ND-1024-80.jpg.webp",
        content : [
            "Easter cacti (Hatiora gaertneri) are native to Brazil and produce stunning blooms in spring.",
            "They thrive in bright indirect light and prefer temperatures between 60-70°F.",
            "Water when the top inch of soil is dry, using distilled or rainwater to prevent fluoride damage.",
            "Fertilize every 4-6 weeks during the growing season with a balanced fertilizer.",
            "Repot every 2-3 years to refresh soil and provide more space for growth."
        ]
    }
  ];

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gardening Wisdom & Tips</h1>
          <p className="text-xl">
            Discover expert advice on houseplants, succulents, and outdoor gardening to help your green friends thrive.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-green-800 mb-8 border-b-2 border-green-200 pb-4">
          Featured Articles
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="mb-4">
                  {article.content.slice(0, 3).map((paragraph, i) => (
                    <p key={i} className="text-gray-700 mb-2">{paragraph}</p>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-green-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Get More Gardening Tips</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Sign up for our newsletter to receive regular gardening advice, seasonal tips, and exclusive content.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 rounded-l-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;