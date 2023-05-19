import React, { useContext } from 'react';
import img2 from '../../assets/welliewishers.png'
import { AuthContext } from '../../provider/AuthProvider';

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const handleBuy = (event) => {
    event.preventDefault();
    const form = event.target;
    const sellerName = user?.displayName;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const email = user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;

    const description = form.description.value;
    const toys = { name, pictureUrl, sellerName, email, subCategory, price, rating, quantity, description };
    console.log(toys);
    form.reset();
    fetch('http://localhost:5000/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toys)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('buy this toy successfully')
        }
      })

  }
  return (
    <div className='mt-8 w-9/12 mx-auto'>
      <img className='h-80 w-full' src={img2} alt="" />

      <h2 className='text-teal-700 text-2xl font-bold text-center mb-5'>Choose What You Like the Most!!!</h2>

      <div className="max-w-md mx-auto text-pink-600">
        <form onSubmit={handleBuy}>
          <div className="mb-4">
            <label htmlFor="pictureUrl" className="block text-pink-700 text-sm font-bold mb-2">Picture URL of the toy:</label>
            <input type="text" id="pictureUrl" name="pictureUrl" className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter picture URL" />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-pink-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter toy name" />
          </div>

          <div className="mb-4">
            <label htmlFor="sellerName" className="block text-pink-700 text-sm font-bold mb-2">Seller Name:</label>
            <input type="text" id="sellerName" defaultValue={user?.displayName} name="sellerName" className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter seller name" />
          </div>

          <div className="mb-4">
            <label htmlFor="sellerEmail" className="block text-pink-700 text-sm font-bold mb-2">Seller Email:</label>
            <input type="email" id="sellerEmail" defaultValue={user?.email} name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter seller email" />
          </div>

          <div className="mb-4">
            <label htmlFor="subCategory" className="block text-pink-700 text-sm font-bold mb-2">Sub-category:</label>
            <select id="subCategory" name="subCategory" className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="disney doll">disney doll</option>
              <option value="dolly holly">dolly holly</option>
              <option value="baby dolls">baby dolls</option>
              <option value="barbie">barbie</option>
              <option value="american girl">American girl</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-pink-700 text-sm font-bold mb-2">Price:</label>
            <input type="number" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="$ Enter price" />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-pink-700 text-sm font-bold mb-2">Rating:</label>
            <input type="number" id="rating" name="rating" className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter rating" />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-pink-700 text-sm font-bold mb-2">Available Quantity:</label>
            <input type="number" id="quantity" name="quantity" className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter available quantity" />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-pink-700 text-sm font-bold mb-2">Detail Description:</label>
            <textarea id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter description"></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" className="bg-pink-500 hover:bg-teal-700 px-10 mb-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Buy</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;