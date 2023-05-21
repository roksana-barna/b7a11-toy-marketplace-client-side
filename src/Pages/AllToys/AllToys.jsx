import React, { useEffect, useState } from 'react';

import AllToysCard from './AllToysCard';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    useTitle('AllToys');
    console.log(allToys)
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/toys`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [isSearched])


    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.search.value;
        console.log(text);
        if (text) {
            fetch(`https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/toyNameSearch/${text}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setAllToys(data);
                });
        } else {
            setIsSearched(!isSearched);
        }
    };


    return (
        <div className='w-7/12 mx-auto'>
            <div>
                <h2 className='text-xl text-teal-600 text-center font-bold my-6' >All Toys</h2>
                <form onSubmit={handleSearch} className='text-center p-5'>
                    <input type='text' placeholder='search name' name='search'

                        className=' bg-pink-300 p-1' />
                    <button type='submit' className='bg-teal-300 p-1 text-white' >Search</button>
                </form>
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