import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
const ToysCard = ({ toy }) => {
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();
  const { name, pictureUrl, rating, price,_id } = toy || {};
  const checkOuth=(id)=>{
    if(user){
      navigate(`/viewdetails/${id}`)
    }
    else{
      navigate('/login', { state: { message: 'Please login first to show toy details!!!' } })

    }

  }
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

          
             <button onClick={()=>checkOuth(_id)} className="bg-red-400 text-teal-950 px-3 py-2 rounded-xl">View Details</button>
  
            <Link to='/login'></Link>
           
          </div>
        </div>
      </div>
    </div>

  );
};

export default ToysCard;