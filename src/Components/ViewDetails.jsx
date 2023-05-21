import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../Hooks/useTitle';

const ViewDetails = () => {
    useTitle('view details');
    const {user}=useContext(AuthContext);
    const viewdetails=useLoaderData()
    const {pictureUrl, sellerName, email, subCategory, rating, quantity, description, price,name }=viewdetails
    return (
       <div className='items-center ml-80 mt-8 mb-7'>
         <div className='w-9/12 mx-auto'>
          
          <div className="card w-96 bg-base-100 shadow-xl bg-purple-100">
             <figure><img src={pictureUrl} alt="Shoes" /></figure>
             <div className="card-body bg-pink-200">
                 <h2 className="card-title">Name: {name}</h2>
                 <h5>Seller Name:{user?.displayName}</h5>
                    <h5>Sub Category:{subCategory}</h5>
                    <p>Price:${price}</p>
                    <h5>Available Quantity:{quantity}</h5>
                    <h5>Email:{user?.email}</h5>
                    <h5>Rating:{rating}</h5>
                    <h5>Description:{description}</h5>
                 
             </div>
         </div>
     </div>
       </div>
    );
};

export default ViewDetails;