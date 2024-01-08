import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import ProductCard from "./Components/ProductCard/ProductCard"
import ProductsPage from "./Modules/ProductsPage/ProductsPage"
import Home from "./Modules/Home/Home"
import Category from "./Components/Category/Category"
import CategoryProduct from "./Components/CategoryProduct/CategoryProduct"
import ProductDetails from "./Components/ProductDetails/ProductDetails"
import Cart from "./Modules/Cart/Cart"


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/products/products/:id" element={<ProductDetails/>}/>
      <Route path="/categories" element={<Category/>}/>
      <Route path="/categories/:name" element={<CategoryProduct/>}/>
      <Route path="/products/categories/:name" element={<CategoryProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
    <Footer/>

    

    </>
  )
}

export default App
