import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { basket } = useSelector(store => store.basket)

  return (
    
    <>
        <header className='w-full py-6 bg-blue-950 sticky top-0 z-10'>
            <nav className='flex justify-between text-white w-[80%] mx-auto'>
                <Link to={"/"}>
                    <h1 className='text-3xl cursor-pointer font-bold'>Fortinite</h1>
                </Link> 
                <div className='flex items-center gap-4'>
                  <Link to={"/shop"}>
                    <h1 className='text-2xl cursor-pointer'>Shop</h1>
                  </Link> 
                  <Link to={"/price"}>
                    <button className='shop-btn text-2xl'>
                        <i class='bx bx-basket'></i>
                        <p>{basket.length}</p>
                    </button>
                  </Link>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar