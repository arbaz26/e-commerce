import React from 'react'

function Footer() {
  return (
    <footer className="">
    <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
      <div className="max-w-sm">
        <div className="mb-6 flex h-10 items-center space-x-2">
        <img className="h-full object-contain" src="https://cdn.iconscout.com/icon/free/png-512/free-ecommerce-services-solution-cart-online-shopping-settings-6-8056.png?f=webp&w=256" alt="" />
          <span className="text-lg font-medium">Boleno</span>
        </div>
        <div className="text-gray-500">Your one-stop online shopping destination, offering a wide range of products with convenience, quality, and exceptional customer service</div>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">CUSTOMER POLICIES</div>
        <nav aria-label="Guides Navigation" className="text-gray-500">
          <ul className="space-y-3">
            <li><a className="hover:text-blue-600 hover:underline" href="#">Conatct Us</a></li>
            <li><a className="hover:text-blue-600 hover:underline" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-blue-600 hover:underline" href="#">T&C</a></li>
            <li><a className="hover:text-blue-600 hover:underline" href="#">Track Orders</a></li>
            <li><a className="hover:text-blue-600 hover:underline" href="#">Returns</a></li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Online Shopping</div>
        <nav aria-label="Footer Navigation" className="text-gray-500">
          <ul className="space-y-3">
            <li><a className="hover:text-blue-600 hover:underline" href="#">Products</a></li>
            <li><a className="hover:text-blue-600 hover:underline" href="#">Catergories</a></li>
            <li><a className="hover:text-blue-600 hover:underline" href="#">About</a></li>
            <li><a className="hover:text-blue-600 hover:underline" href="#"></a></li>
            <li><a className="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">EXPERIENCE OUR APP ON MOBILE</div>
        <div className="flex flex-col">
          <div className="mb-4">
            <a href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple" target="_blank"><img src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png" alt="Apple - Think&#0032;Different | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a>
          </div>
          <div className="mb-4">
            <a href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple" target="_blank"><img src="http://solyogaflorida.com/wp-content/uploads/2018/03/download-on-app-store.png" alt="Apple - Think&#0032;Different | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
        <p className="">© 2023 E-Commerce | All Rights Reserved</p>
        <p className="-order-1 sm:order-none">Made with ❤️ By Md Arbaz Alam</p>
        <p className="">
          <a className="" href="#">Privacy Policy</a>
          <span>|</span>
          <a className="" href="#">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer