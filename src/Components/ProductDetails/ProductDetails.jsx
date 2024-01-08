import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const {id} = useParams();
    const [product, setproduct] = useState({})
    useEffect(() => {
        const fetchProduct = async ()=>{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            console.log(data)
            setproduct(data)
        }
        fetchProduct();
    }, [])

    const handleCart = (product, redirect) => {
      console.log(product)
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const isProductExist = cart.find(item => item.id === product.id)
      if(isProductExist) {
      const updatedCart = cart.map(item => {
      if(item.id === product.id) {
      return {
      ...item,
      quantity: item.quantity + 1
      }
      }
      return item
      })
      localStorage.setItem('cart', JSON.stringify (updatedCart))
      } else {
      localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
      }
      alert('Product added to cart')
      if(redirect) {
      navigate('/cart')
      }
      }
      
    
  return (
    <div className="bg-white p-4 md:p-8 shadow-md rounded-lg lg:w-3/4 xl:w-1/2 mx-auto">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={product?.image}
            alt="Product Name"
            className="w-full object-contain h-auto md:rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{product?.title}</h1>
          <p className="text-gray-600 text-sm mb-4">{product?.description}</p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">${product?.price}</p>
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 mt-4">
            <button onClick={()=>handleCart(product)} className="bg-slate-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
              Add to Cart
            </button>
            {/* <button className="text-slate-900 hover:underline">Add to Wishlist</button> */}
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Product Details</h2>
        <p className="text-gray-600">
          Detailed information about the product, specifications, and features.
        </p>
      </div>

      <div className="mt-4 md:mt-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Customer Reviews</h2>
        <div className="flex items-start space-x-2">
          <div className="text-yellow-300">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              
            </svg>
          </div>
          <div className="text-yellow-300">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              
            </svg>
          </div>
          <div className="text-yellow-300">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              
            </svg>
          </div>
          <div className="text-yellow-300">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              
            </svg>
          </div>
          <div className="text-yellow-300">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              
            </svg>
          </div>
          <span className="text-gray-600">(5.0)</span>
        </div>
        <p className="text-gray-600">Read customer reviews and share your thoughts on this product.</p>
      </div>
    </div>
  );
}

export default ProductDetails;


