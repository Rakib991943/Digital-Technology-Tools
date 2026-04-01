import React from 'react';
import shopingCart from "../../assets/products/shopping-cart.png"
const Navbar = ({ buyItem }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>

                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <a className="text-3xl font-bold text-purple-600">
                    Digi<span className="text-gray-800">Tools</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>

                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className=''>
                    <span className='flex top-2 right-[200px] absolute justify-center items-center w-[20px] h-[20px] rounded-full bg-yellow-400  p-2 ml-4'>{buyItem.length}</span>
                </div>
                <img className='mr-3 w-[30px]' src={shopingCart} alt="" />
                <a className="btn">Login</a>
                <button className='btn btn-primary ml-3'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;