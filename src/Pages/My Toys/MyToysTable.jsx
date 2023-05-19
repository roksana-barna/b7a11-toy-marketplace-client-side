import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const MyToysTable = ({ mytoy,handleDelete }) => {
    const {users}=useContext(AuthContext);
    const { pictureUrl, sellerName, email, subCategory, rating, quantity, description, price,_id} = mytoy;
   
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    <tr>
                        <td>
                            <div className="flex">
                                <div className="avatar">
                                    <div className="mask mask-rounded w-8 h-8">
                                        <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {sellerName}
                        </td>
                        <td>
                            {email}
                        </td>
                        <td className='mr-4'>
                            {subCategory}
                        </td>
                        <td>
                            ${price}
                        </td>
                        <td>
                            {rating}
                        </td>
                        <td>
                            {quantity}
                        </td>
                        <td>
                            {description}
                        </td>
                        <td><Link to={`/update/${_id}`}><button className='bg-teal-500 p-2 rounded text-white'>update</button></Link></td>
                        <td><button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline bg-red-400">X</button>
</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MyToysTable;