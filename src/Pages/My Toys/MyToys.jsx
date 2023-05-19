import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToysTable from './MyToysTable';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })

    }, [])
    return (
        <div className='w-9/12 mx-auto'>
            <div >
                <h2 className='text-xl text-teal-600 text-center font-bold my-6'>All My Toys</h2>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th> picture</th>
                                <th>sellerName</th>
                                <th>seller email</th>
                                <th>subCategory</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        
                    </table>
                    {
                        myToys.map(mytoy => <MyToysTable
                            key={mytoy._id}
                            mytoy={mytoy}
                        >

                        </MyToysTable>)
                    }

                </div>
            </div >
        </div>
    );
};

export default MyToys;