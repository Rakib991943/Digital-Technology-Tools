import React from 'react';

const HeroSection = () => {
    return (
        <div className='w-11/12 mx-auto mt-10'>
            
      <div className="hero min-h-[420px] bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white">
        <div className="hero-content text-center px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Ready To Transform Your Workflow?
            </h1>
            <p className="text-lg opacity-90 mb-10">
              Join thousands of professionals who are already using DigiTools to work smarter.<br />
              Start your free trial today.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn btn-lg bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8">
                Explore Products
              </button>
              <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-8">
                View Pricing
              </button>
            </div>

            <p className="mt-8 text-sm opacity-75">
              30-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default HeroSection;