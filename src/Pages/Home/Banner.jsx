import React from 'react';
import banner from '../../assets/banner 2.png'

const Banner = () => {
    return (
        <div className='  bg-pink-50'>

        <div className='lg:flex'>
        <div className='lg:w-7/12 '>
            <img className='lg:w-full w-[600px] ' src={banner} alt="" />
        </div>
        <div className=' ml-12 space-y-5'>
            <h2 className='italic font-bold text-pink-300 text-5xl mt-20'>Cool KidS ShoP</h2>
            <h2 className='text-3xl italic text-teal-300 font-bold '>We Appriciate Your Trust Greately.....</h2>
            <button className="py-3 rounded-xl bg-teal-300 text-white px-9 mt-12">View Demu</button>
            <button className="btn btn-error text-white px-10 py-2 ml-4 mt-12">Purchase Now</button>

        </div>
        </div>
        </div>
    );
};

export default Banner;