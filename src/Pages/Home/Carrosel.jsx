import React from 'react';
import caro from "../../assets/0.jpg"
import caro1 from "../../assets/2.png"
import caro2 from "../../assets/4.jfif"
import caro3 from "../../assets/5.jpg"
import caro4 from "../../assets/1.png"
import caro5 from "../../assets/6.jpg"
import caro6 from "../../assets/images (2).jfif"


const Carrosel = () => {
    return (
        <div>
            <h1 className=' text-center font-bold text-teal-800 text-3xl mt-20 mb-5'>Checkout<br/> Our Clothes For Toys</h1>
            <p className='text-center mb-3'>Collection for the best an uniquecutom ,handmade <br/>  pieces from our shop</p>
        <div className="carousel carousel-center rounded-box h-96">
  <div className="carousel-item">
    <img src={caro} />
  </div> 
  <div className="carousel-item">
    <img src={caro1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={caro2}/>
  </div> 
  <div className="carousel-item">
    <img src={caro3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={caro4} />
  </div> 
  <div className="carousel-item">
    <img src={caro5}alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={caro6}alt="Pizza" />
  </div>
</div>
            
        </div>
    );
};

export default Carrosel;