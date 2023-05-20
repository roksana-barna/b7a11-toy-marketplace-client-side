import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const allToys = useLoaderData();
    console.log(allToys)
    return (
        <div className='w-7/12 mx-auto'>
            <div >
                <h2 className='text-xl text-teal-600 text-center font-bold my-6'>All Toys</h2>
            </div>
            <div>
                <div className="">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>sellerName</th>
                                <th>Toy Name</th>
                                <th>subCategory</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {

                                allToys.map(alltoy => <AllToysCard
                                    key={alltoy._id}
                                    alltoy={alltoy}

                                ></AllToysCard>)
                            }
                        </tbody>

                    </table>

                </div>
            </div >

            <div>

            </div>
        </div>
    );
};

export default AllToys;