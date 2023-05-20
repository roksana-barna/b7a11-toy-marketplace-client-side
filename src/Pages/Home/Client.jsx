import React from 'react';
import logo from '../../assets/logo.jfif';
import logo1 from '../../assets/logo.1.jfif';
import logo2 from '../../assets/logo3.jpg';
import logo3 from '../../assets/logo4.png';
import logo4 from '../../assets/logo5.jfif';

const Client = () => {
    return (
        <div className='mt-16 bg-pink-100 mb-10 rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
                <h2 className='p-5'>Our Client</h2>
        <h2 className=' font-bold text-teal-800 text-5xl  mb-5 p-10 space-y-3'>Meet Our Top<br/> Clients and Partners</h2>
            </div>
            <div className='mt-28'>
                <h2 className='sm:ml-10'>We Appriciate your trust.meet our client who choose use as their kids toys supplier and whom we are happy to work with them</h2>
                <h2 className='mt-5 sm:ml-10'>We only turn on the mix of disciplines that will actually deliver success -- earned media, influencers, social media, direct marketing, partnerships, programming, event execution and more.</h2>

            </div>  
        </div>
       <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 '>
       <img className='h-32 mt-8 ml-8 rounded-xl' src={logo}alt="" />
        <img className='h-32 mt-8 rounded-xl' src={logo1}alt="" />
        <img className='h-32 mt-8 rounded-xl' src={logo2}alt="" />
        <img className='h-32 mt-8 rounded-xl' src={logo3}alt="" />
        <img className='h-32 mt-8 mb-8 rounded-xl' src={logo4}alt="" />
       </div>

        </div>
    );
};

export default Client;