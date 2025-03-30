import { useState, useEffect } from "react";
import { FaStar, FaShoppingCart, FaLeaf, FaSeedling, FaTint, FaSearch, FaTimes } from "react-icons/fa";
import { GiWateringCan, GiGardeningShears, GiSpade, GiFlowerPot } from "react-icons/gi";

const categories = [
  { id: "all", name: "All Products" },
  { id: "plants", name: "Plants" },
  { id: "tools", name: "Gardening Tools" },
  { id: "pots", name: "Pots & Planters" },
  { id: "accessories", name: "Accessories" },
];

const plants = [
  {
    id: 1,
    name: "Rose Plant (Red)",
    category: "plants",
    subcategory: "flowers",
    price: 299,
    rating: 4.5,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTB3Dwk9FgfTln7DWpNCMkPTrwndtGYn5dMsO2b_m42zUkV7fIoCKICR-V-BacJRpwIqhuGU3o48BnbjgIdo2nUNq2iUATC&usqp=CAE",
  },
  {
    id: 2,
    name: "Holy Basil (Tulsi)",
    category: "plants",
    subcategory: "herbs",
    price: 199,
    rating: 4.7,
    image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-krishna-tulsi-plant-holy-basil-ocimum-tenuiflorum-black-plant-3-355753.jpg?v=1680591165",
  },
  {
    id: 3,
    name: "Tomato Plant",
    category: "plants",
    subcategory: "vegetables",
    price: 249,
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/51k6WRpBVtL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Money Plant",
    category: "plants",
    subcategory: "indoor",
    price: 179,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const tools = [
  {
    id: 5,
    name: "Gardening Tool Set (6-Piece)",
    category: "tools",
    price: 899,
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/51Y3-XmPKbL.jpg",
  },
  {
    id: 6,
    name: "Stainless Steel Trowel",
    category: "tools",
    price: 349,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Pruning Shears",
    category: "tools",
    price: 499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    name: "Watering Can (5L)",
    category: "tools",
    price: 399,
    rating: 4.3,
    image: "https://www.trustbasket.com/cdn/shop/products/04_imageforfacebookframe.webp?v=1665571909",
  },
];

const pots = [
  {
    id: 9,
    name: "Ceramic Planter (Medium)",
    category: "pots",
    price: 599,
    rating: 4.6,
    image: "https://casadeamor.in/cdn/shop/products/2_26245624-3cea-457e-b279-9fc2227618a3.jpg?v=1694458612&width=1445",
  },
  {
    id: 10,
    name: "Hanging Plant Pot Set (3)",
    category: "pots",
    price: 799,
    rating: 4.4,
    image: "https://www.urbanplant.in/cdn/shop/files/Primary1copy.jpg?v=1702015613&width=2000",
  },
  {
    id: 11,
    name: "Self Watering Planter",
    category: "pots",
    price: 1299,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/71xLDxKX0zL.jpg",
  },
];

const accessories = [
  {
    id: 12,
    name: "Gardening Gloves (Pair)",
    category: "accessories",
    price: 199,
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/71dJiDl1rAL.jpg",
  },
  {
    id: 13,
    name: "Organic Potting Mix (5kg)",
    category: "accessories",
    price: 349,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71EzhiganNL.jpg",
  },
];

const allProducts = [...plants, ...tools, ...pots, ...accessories];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    review: "The plants arrived in perfect condition and have been thriving!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Patel",
    review: "Excellent quality tools at reasonable prices. Very satisfied!",
    rating: 4,
  },
];

const recommendedTools = [
  { name: "Hand Trowel", icon: <GiSpade className="text-3xl" /> },
  { name: "Pruning Shears", icon: <GiGardeningShears className="text-3xl" /> },
  { name: "Watering Can", icon: <GiWateringCan className="text-3xl" /> },
  { name: "Garden Fork", icon: <GiSpade className="text-3xl" /> },
  { name: "Gloves", icon: <FaLeaf className="text-3xl" /> },
  { name: "Potting Mix", icon: <FaSeedling className="text-3xl" /> },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartNotification, setCartNotification] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('gardeningCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('gardeningCart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setCartNotification(true);
    setTimeout(() => setCartNotification(false), 2000);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="container mx-auto p-4 md:p-6 relative">
      {/* Cart Notification */}
      {cartNotification && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          Item added to cart!
        </div>
      )}

      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg transform ${showCart ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">Your Cart ({cartItemCount})</h2>
            <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">
              <FaTimes className="text-xl" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Your cart is empty</p>
              <button 
                onClick={() => setShowCart(false)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center border-b pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-green-700 font-bold">₹{item.price.toLocaleString('en-IN')}</p>
                      <div className="flex items-center mt-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 bg-gray-200 rounded-l"
                        >
                          -
                        </button>
                        <span className="px-4 bg-gray-100">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 bg-gray-200 rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total:</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Cart Button */}
      <button 
        onClick={() => setShowCart(true)}
        className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 z-30 flex items-center justify-center"
      >
        <FaShoppingCart className="text-xl" />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Hero Section */}
      <div className="bg-green-50 rounded-xl p-6 md:p-8 mb-8 text-center relative">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Welcome to GreenThumb Garden Shop</h1>
        <p className="text-lg text-gray-700 mb-6">
          Everything you need for your gardening journey - plants, tools, pots and more!
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.id
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-800 border border-green-600 hover:bg-green-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sorting Options */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">
          {selectedCategory === "all" ? "Our Products" : categories.find(c => c.id === selectedCategory)?.name}
          <span className="text-sm font-normal text-gray-600 ml-2">({filteredProducts.length} items)</span>
        </h2>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm text-gray-600">Sort by:</label>
          <select
            id="sort"
            className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded mb-4" 
              />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-green-700 font-bold mt-1">₹{product.price.toLocaleString('en-IN')}</p>
              <div className="flex items-center mt-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg border">
          <p className="text-gray-600">No products found matching your search</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="mt-4 text-green-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Recommended Tools Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
          <GiGardeningShears className="mr-2" /> Essential Gardening Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {recommendedTools.map((tool, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-green-100 text-center hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-2 flex justify-center">{tool.icon}</div>
              <h3 className="font-medium text-gray-800">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Plants Care Tips */}
      <div className="mt-12 bg-green-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
          <FaLeaf className="mr-2" /> Plant Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-green-600 mb-2 flex items-center">
              <FaTint className="mr-2" /> Watering
            </div>
            <p className="text-gray-700">
              Most plants prefer thorough watering when the top inch of soil is dry. Avoid overwatering which can lead to root rot.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-green-600 mb-2 flex items-center">
              <FaSeedling className="mr-2" /> Sunlight
            </div>
            <p className="text-gray-700">
              Know your plant's light requirements. Some need direct sunlight while others thrive in shade or indirect light.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-green-600 mb-2 flex items-center">
              <GiFlowerPot className="mr-2" /> Soil & Fertilizer
            </div>
            <p className="text-gray-700">
              Use well-draining soil and fertilize during growing season. Organic compost works wonders for most plants.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-green-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border p-4 rounded-lg shadow-sm">
              <p className="text-gray-700 italic">"{testimonial.review}"</p>
              <div className="flex items-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <p className="ml-2 font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 bg-green-800 text-white rounded-xl p-6 md:p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Get Gardening Tips & Offers</h2>
          <p className="mb-6">Subscribe to our newsletter for seasonal advice and exclusive discounts</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 text-green-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}