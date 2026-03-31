import React from 'react';
import bannerImage from "../../../assets/products/banner.png"
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mt-8'>
              <div className="hero bg-base-100 min-h-[80vh] px-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">

          {/* Image */}
          <img
            src={bannerImage}
            alt="banner"
          />

          {/* Text Content */}
          <div>
            <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm mb-4">
              ★ New AI-Powered Tools Available
            </p>

            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Supercharge Your <br /> Digital Workflow
            </h1>

            <p className="py-6 text-gray-500 max-w-md">
              Access premium AI tools, design assets, templates, and productivity
              software – all in one place. Start creating your success story.
            </p>

            <div className="flex gap-4">
              <button className="btn bg-purple-600 text-white rounded-full px-6 hover:bg-purple-700">
                Explore Products
              </button>

              <button className="btn btn-outline rounded-full px-6 border-purple-500 text-purple-600 hover:bg-purple-50">
                ▶ Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-sm opacity-80">Active Users</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-sm opacity-80">Premium Tools</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">4.9</h2>
            <p className="text-sm opacity-80">Rating</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;