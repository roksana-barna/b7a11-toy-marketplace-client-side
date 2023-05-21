import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToysTable from './MyToysTable';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys');
    const [sortByPrice,setSortPrice]=useState(1)
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        console.log(sortByPrice)
        fetch(`https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/toys/${user.email}/${sortByPrice}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })

    }, [sortByPrice,user]);
    
    const handleDelete = id => {
        const proceed = confirm("Are you want to delete?");
        if (proceed) {
            fetch(`https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/toys/${id}`, {
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
                <button  className='bg-teal-400 mb-5 px-3 py-2 rounded text-white mr-3' onClick={()=>setSortPrice(1)}>Low Price</button>
                <button className='bg-teal-400 px-3 py-2 rounded text-white' onClick={()=>setSortPrice(-1)}>High Price</button>
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