import React from 'react';



const ToysCard = ({ toy }) => {
  const { name, pictureUrl, rating, price } = toy || {};
  return (
    <div className=''>

      <div className="card w-96 bg-base-100 shadow-xl my-5">
        <figure className="px-10 pt-10  bg-pink-50">
          <img src={pictureUrl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center bg-teal-50">
          <h2 className="card-title">Name:{name}</h2>
          <h5> Price:${price}</h5>
          <p> Rating:{rating}</p>
          <div className="card-actions">
            <button className="bg-red-300 text-teal-950 px-3 py-2 rounded-xl">View Details</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ToysCard;