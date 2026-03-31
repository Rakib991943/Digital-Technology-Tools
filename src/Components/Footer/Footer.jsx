import React from 'react';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <footer className="bg-neutral text-neutral-content">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Brand / About */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">DigiTools</h2>
              <p className="text-neutral-400 leading-relaxed">
                Premium digital tools for creators, professionals, and businesses. 
                Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral-500 text-sm">
              © 2026 DigiTools. All rights reserved.
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <FaFacebookSquare />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaXTwitter />
              </a>
            </div>

            <div className="flex gap-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer> 
        </div>
    );
};

export default Footer;