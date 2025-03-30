import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#22577A] p-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white text-2xl font-bold hover:text-[#80ED99] transition-colors">
                    GreenGenie
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <div className="flex space-x-6 text-white">
                        <Link to="/how-to" className="hover:text-[#80ED99] transition-colors">How To</Link>
                        <Link to="/shop" className="hover:text-[#80ED99] transition-colors">Shop</Link>
                        <Link to="/services" className="hover:text-[#80ED99] transition-colors">Services</Link>
                        <Link to="/about" className="hover:text-[#80ED99] transition-colors">About</Link>
                        <Link to="/blogs" className="hover:text-[#80ED99] transition-colors">Blogs</Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden text-white p-2 rounded-lg hover:bg-[#38A3A5] transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#22577A] p-4 space-y-3 animate-fadeIn">
                    <Link 
                        to="/how-to" 
                        className="block py-3 px-4 rounded-lg hover:bg-[#38A3A5] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        How To
                    </Link>
                    <Link 
                        to="/shop" 
                        className="block py-3 px-4 rounded-lg hover:bg-[#38A3A5] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Shop
                    </Link>
                    <Link 
                        to="/services" 
                        className="block py-3 px-4 rounded-lg hover:bg-[#38A3A5] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </Link>
                    <Link 
                        to="/about" 
                        className="block py-3 px-4 rounded-lg hover:bg-[#38A3A5] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link 
                        to="/blogs" 
                        className="block py-3 px-4 rounded-lg hover:bg-[#38A3A5] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Blogs
                    </Link>
                </div>
            )}
        </nav>
    );
}
