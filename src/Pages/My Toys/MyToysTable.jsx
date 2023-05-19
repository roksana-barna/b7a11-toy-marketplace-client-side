import React from 'react';

const MyToysTable = ({ mytoy }) => {
    const { pictureUrl, sellerName, email, subCategory, rating, quantity, description, price } = mytoy;
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
                        <td><button className='bg-teal-500 p-2 rounded text-white'>update</button></td>
                        <td><button className="btn btn-circle btn-outline bg-red-400">X</button>
</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MyToysTable;