import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const AllToysCard = ({ alltoy }) => {
    const {user}=useContext(AuthContext);
    const { name, sellerName, subCategory, quantity, price,pictureUrl,_id} = alltoy;
    return (
        <div className='w-9/12 mx-auto mb-4'>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={pictureUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mt-5">My Name: {name}</h2>
                    <h5>Seller Name:{user?.displayName}</h5>
                    <h5>Sub Category:{subCategory}</h5>
                    <h5>Available Quantity:{quantity}</h5>
                    <p>Price:${price}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/viewdetails/${_id}`}><button className="bg-pink-500 px-3 py-2 rounded-xl">View Details</button>
</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllToysCard;