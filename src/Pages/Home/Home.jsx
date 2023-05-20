import React from 'react';
import Banner from './Banner';
import Toys from '../../Components/Toys/Toys';
import Gallary from '../../Components/Gallary/Gallary';
import Carrosel from './Carrosel';

const Home = () => {
    
    return (
        <div className='w-9/12 mx-auto'>
            <Banner></Banner>
            <Gallary></Gallary>
            <Toys></Toys>
            <Carrosel></Carrosel>
           
        </div>

    );
};

export default Home;