import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const allToys = useLoaderData();
    console.log(allToys)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-9/12 mx-auto mt-20'>
            {
                allToys.map(alltoy => <AllToysCard
                    key={alltoy._id}
                    alltoy={alltoy}

                ></AllToysCard>)
            }

        </div>
    );
};

export default AllToys;