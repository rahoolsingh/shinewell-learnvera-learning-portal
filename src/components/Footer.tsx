import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition">Data Science</a></li>
              <li><a href="#" className="hover:text-white transition">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">For Teams</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Corporate Training</a></li>
              <li><a href="#" className="hover:text-white transition">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-white transition">Partner With Us</a></li>
              <li><a href="#" className="hover:text-white transition">Become an Instructor</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-500">LEARN</span>
              <span className="text-xl font-bold text-white">VERA</span>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm">
              © 2025 Learn. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
