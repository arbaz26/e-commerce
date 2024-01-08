import React, { useEffect, useState } from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'

function Category() {
    const [categories, setcategories] = useState([])

    useEffect(() => {
      const fetchCategory = async()=>{
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        // console.log(data)
        setcategories(data)
      }
      fetchCategory()
    }, [])
    
  return (
    <>
    <div className="mx-auto max-w-md text-center">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">Shop by Category</h2>
      </div>
    <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
    <CategoryCard cards={categories}/>
    </div>
    </>
  )
}

export default Category