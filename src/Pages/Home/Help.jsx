import React from 'react';
import images from "../../assets/Boys and girls toys.jpg"

const Help = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='mt-14'>
            <div className='md:flex'>
                <div className='w-full '>
                    <img className='h-96' src={images} alt="" />
                </div>
                <div>
                    <h2 className='ml-10'>WHAT WE DO</h2>
                    <h2 className='font-bold text-teal-800 text-4xl  mb-5 p-10 space-y-3'>WE Help Organize Events  for Kids</h2>
                    <p className='ml-10 '>Fun educational activities for e very ocationwith premium toys and snacks.learn more about our service..</p>
                    <button className='bg-teal-700 px-3 py-2  text-white ml-10 mt-5 rounded-xl'>Discover Now</button>

                </div>
            </div>

        </div>
    );
};

export default Help;