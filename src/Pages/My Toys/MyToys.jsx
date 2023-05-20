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

    }, []);
    const handleDelete = id => {
        const proceed = confirm("Are you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = myToys.filter(mytoy => mytoy._id !== id)
                        setMyToys(remaining)
                    }
                })

        }
    }
    return (
        <div className='w-9/12 mx-auto'>
            <div >
                <h2 className='text-xl text-teal-600 text-center font-bold my-6'>All My Toys</h2>
            </div>
            <div>
                <div className="">
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
                        <tbody>
                    {
                        myToys.map(mytoy => <MyToysTable
                            key={mytoy._id}
                            mytoy={mytoy}
                            handleDelete={handleDelete}
                        >

                        </MyToysTable>)
                    }
                    </tbody>
                    </table>

                </div>
            </div >
        </div>
    );
};

export default MyToys;