import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Category from '../../Components/Category/Category'
// import CategoryCard from '../../Components/CategoryCard/CategoryCard'

function ProductsPage() {
    // const [first, setfirst] = useState(second)

    const [products, setproducts] = useState([])
    useEffect(() => {
    const fetchProducts = async ()=> {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      // console.log(data)
      setproducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our featured Products</h2>
        <p className="mt-4 text-base text-gray-700">Shop our exclusive range of quality products, where convenience meets style, and elevate your everyday with unbeatable prices and curated selections</p>
      </div>
      
      <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-16  lg:grid-cols-4 lg:gap-4">  
        <ProductCard products={products}/>
      </div>
      
    </div>
    <Category/>
   </section>
  )
}

export default ProductsPage