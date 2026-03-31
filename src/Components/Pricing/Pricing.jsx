import React from 'react';

const Pricing = () => {
    return (
        <div className='w-11/12 mx-auto mt-8'>
            
      <div className="text-center mt-16 mb-10">
        <h2 className="text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

     
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <h1 className="text-3xl font-bold mb-4">$0/month</h1>

          <ul className="space-y-2 mb-6">
            <li>✔ Access to free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
          </ul>

          <button className="w-full py-2 rounded-lg bg-purple-600 text-white">
            Get Started Free
          </button>
        </div>

       
        <div className="p-6 rounded-xl h-[400px] py-20 shadow bg-gradient-to-r from-purple-500 to-indigo-600 text-white scale-105">
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <h1 className="text-3xl font-bold mb-4">$29/month</h1>

          <ul className="space-y-2 mb-6">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Cloud sync</li>
          </ul>

          <button className="w-full py-2 rounded-lg bg-white text-purple-600">
            Start Pro Trial
          </button>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <h1 className="text-3xl font-bold mb-4">$99/month</h1>

          <ul className="space-y-2 mb-6">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
          </ul>

          <button className="w-full py-2 rounded-lg bg-purple-600 text-white">
            Contact Sales
          </button>
        </div>

      </div>
        </div>
    );
};

export default Pricing;