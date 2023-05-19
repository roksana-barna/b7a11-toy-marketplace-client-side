import React from 'react';
import Banner from './Banner';
import Toys from '../../Components/Toys/Toys';

const Home = () => {
    
    return (
        <div className='w-9/12 mx-auto'>
            <Banner></Banner>
            <Toys></Toys>
        </div>

    );
};

export default Home;