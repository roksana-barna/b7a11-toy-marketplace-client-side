import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedtoys = useLoaderData()
    console.log(loadedtoys)
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatetoys = {
            price, quantity, description
        }
        console.log(updatetoys)
        // put
        fetch(`https://b7a11-toy-marketplace-server-side-roksana-barna.vercel.app/update/${loadedtoys._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatetoys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('toys updated succecssfully')
                }
            })
    }
    return (
        <div>
            <div className='w-9/12 mx-auto'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <h1 className="text-3xl  text-center font-bold text-pink-500">Update your toys!</h1>
                                    <h2 className='text-xl font-bold text-teal-700'>Toys Name:{loadedtoys.name}</h2>

                                    <form onSubmit={handleUpdate}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type="number" placeholder="price" name="price" defaultValue={loadedtoys.price} className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">avaiable quantity</span>
                                            </label>
                                            <input type="number" placeholder="quantity" defaultValue={loadedtoys.quantity} name="quantity" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">description</span>
                                            </label>
                                            <input type="text" placeholder="description" defaultValue={loadedtoys.description} name="description" className="input input-bordered" />

                                        </div>
                                        <div className="form-control mt-6">
                                            <input className='bg-pink-500 p-3 text-white rounded-xl' type="submit" value="Update" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;