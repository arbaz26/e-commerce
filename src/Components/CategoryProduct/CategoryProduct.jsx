import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard';

function CategoryProduct() {
    const {name} = useParams();
    const [getcategory, setgetcategory] = useState([])
    
    console.log(getcategory)
    useEffect(() => {
        const fetchProduct = async ()=> {
          const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
          const data = await response.json()
          console.log(data)
          setgetcategory(data)
        }
        fetchProduct()
    }, [])
    
  return (
    
    <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">  
        <ProductCard products={getcategory}/>
    </div>
  )
}

export default CategoryProduct