import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">LEARN</span>
            <span className="text-2xl font-bold text-gray-800">MIZE</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition flex items-center">
                About Us <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition flex items-center">
                Programs <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition flex items-center">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact Us</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">About Us</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Programs</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Contact Us</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
