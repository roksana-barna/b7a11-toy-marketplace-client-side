import React from 'react';
import Banner from './Banner';
import Toys from '../../Components/Toys/Toys';
import Gallary from '../../Components/Gallary/Gallary';
import Carrosel from './Carrosel';
import Client from './Client';
import Help from './Help';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');
    
    return (
        <div className='w-9/12 mx-auto'>
            <Banner></Banner>
            <Gallary></Gallary>
            <Toys></Toys>
            <Carrosel></Carrosel>
            <Help></Help>
            <Client></Client>
           
        </div>

    );
};

export default Home;