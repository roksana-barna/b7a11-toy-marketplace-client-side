import React from 'react';
import img from '../assets/930-9306658_404-not-found.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-9/12 mx-auto mt-5 '>
            <img  src={img} alt="" />
            <Link to='/'><button className='text-white ml-80 p-3 rounded-xl bg-teal-500' >Back To Home</button></Link>
        </div>
    );
};

export default NotFound;