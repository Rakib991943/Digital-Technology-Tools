import React from 'react';

const Cart = ({ data }) => {
    console.log(data)
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl border border-base-300 overflow-hidden relative">
               
                <div className="absolute top-4 right-4">
                    <div className="badge badge-primary badge-lg font-medium p-4 ">
                        {data.tag}
                    </div>
                </div>

                <div className="flex justify-center pt-8 pb-4">
                    <div className="w-20 mt-7 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-md">
                        <img className='w-12' src={data.icon} alt="" />
                    </div>
                </div>

                
                <div className="card-body pt-2 text-center">
                    <h2 className="card-title text-2xl font-bold text-center justify-center">
                        {data.name}
                    </h2>

                    <p className="text-base-content/70 mt-2 text-[15px]">
                        {data.description}
                    </p>

                
                    <div className="mt-6 mb-2">
                        <span className="text-4xl font-bold">${data.price}</span>
                        <span className="text-base-content/60 text-lg">/{data.period}</span>
                    </div>

                    {

                        data.features.map((feature => <div className="flex items-center gap-3">
                            <div className="text-green-500 text-xl">✓</div>
                            <span className="text-base-content/80">{feature}</span>
                        </div>))
                    }

                    <div className="space-y-3 mt-6 text-left">



                    </div>

                   
                    <div className="card-actions mt-8">
                        <button className="btn btn-primary w-full text-lg font-semibold h-14 rounded-2xl">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;