import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const AllToysCard = ({ alltoy }) => {
    const { user } = useContext(AuthContext);
    const { sellerName, subCategory, quantity, price, _id,name } = alltoy;
    return (
         
                        <tr>
                            <td>
                                {user?.displayName}
                            </td>
                            <td>
                                {name}
                            </td>

                            <td>
                                {subCategory}
                            </td>
                            <td>
                                ${price}
                            </td>

                            <td>
                                {quantity}
                            </td>
                            <td>
                                <Link to={`/viewdetails/${_id}`}><button className="bg-pink-500 px-3 py-2 rounded-xl">View Details</button>
                                </Link>
                            </td>

                        </tr>

    );
};

export default AllToysCard;