import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const allToys = useLoaderData();
    const [searchText,setSearchText]=useState('')
    console.log(allToys)
    const handleSearch=()=>{
        fetch(`https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/toyNameSearch/${searchText}`)
        .then((result)=>result.json())
        .then(data=>{
            allToys(data)
        });


    }
    return (
        <div className='w-7/12 mx-auto'>
            <div >
                <h2 className='text-xl text-teal-600 text-center font-bold my-6' >All Toys</h2>
                <div className='text-center p-5'>
                    <input type='text'placeholder='search name'  onChange={(e)=>setSearchText(e.target.value)}
                
                className= ' bg-pink-300 p-1'/>{''}
                <button className='bg-teal-300 p-1 text-white' onClick={handleSearch}>Search</button>
                </div>
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