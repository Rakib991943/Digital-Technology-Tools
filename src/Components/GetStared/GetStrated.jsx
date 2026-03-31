import React from 'react';
import user from "../../assets/products/user.png"
import chooseimg from "../../assets/products/package.png"
import rocketimg from "../../assets/products/rocket.png"
const GetStrated = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 w-11/12 mx-auto mt-8">

    
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-2">
          Start using premium tools in minutes, not hours.
        </p>
      </div>

  {/* Card  */}


      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

   

      <div className="relative bg-white rounded-2xl border p-8 text-center shadow-sm w-[350px]">

    
      <div className="absolute top-4 right-4 bg-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-semibold">
        01
      </div>


      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 mt-7">
          <img src={user} alt="" />
        </div>
      </div>

      
      <h3 className="text-xl font-semibold mb-2">
        Choose Products
      </h3>

     
      <p className="text-gray-500 text-sm">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>
 
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

   

      <div className="relative bg-white rounded-2xl border p-8 text-center shadow-sm w-[350px]">

    
      <div className="absolute top-4 right-4 bg-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-semibold">
        02
      </div>


      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 mt-7">
          <img src={rocketimg} alt="" />
        </div>
      </div>

      
      <h3 className="text-xl font-semibold mb-2">
        Choose Products 
      </h3>

     
      <p className="text-gray-500 text-sm">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>

      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

   

      <div className="relative bg-white rounded-2xl border p-8 text-center shadow-sm w-[350px]">

    
      <div className="absolute top-4 right-4 bg-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-semibold">
        03
      </div>


      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 mt-7">
          <img src={chooseimg} alt="" />
        </div>
      </div>

      
      <h3 className="text-xl font-semibold mb-2">
         Start Creating
      </h3>

     
      <p className="text-gray-500 text-sm">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>

      </div>
      </div>

     

     
    </div>
    );
};

export default GetStrated;