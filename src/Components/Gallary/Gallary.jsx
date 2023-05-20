import React from 'react';
import img1 from"../../assets/kisspng-doll-toy-red-hair-our-generation-violet-anna-5b0ad07d1f1870.1460974115274353891274.jpg";
import img2 from"../../assets/banner.png";
import img3 from"../../assets/images (2).jfif";
import img4 from"../../assets/51M+-VopknL._AC_UL600_SR600,600_.jpg";
import img5 from"../../assets/288-2883635_american-doll-in-canada-hd-png-download.png"

const Gallary = () => {
    return (

       <div>
        <h2 className='italic font-bold text-teal-700 text-5xl  text-center m-6 mb-14 mt-10'>Featured Dolls</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
         <div>
            <img src={img1} alt="" />
            <h2  className='text-center font-semibold text-2xl text-red-400'>Girl of The Year</h2>
        </div>
        <div>
        <img src={img2} alt="" />
            <h2  className='text-center font-semibold text-2xl text-red-400'>Truly Me</h2>
            
        </div>
        <div>
        <img src={img3} alt="" />
            <h2  className='text-center font-semibold text-2xl text-red-400'>Bitty Baby</h2>
        </div>
        <div>
        <img className='' src={img4} alt="" />
            <h2  className='text-center font-semibold text-2xl text-red-400'>Williewist</h2>
        </div>
        <div>
        <img src={img5} alt="" />
            <h2 className='text-center font-semibold text-2xl text-red-400'>Historical Characters</h2>
        </div>
       </div>
       </div>
    );
};

export default Gallary;