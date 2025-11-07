import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MarketingLayout = () => {
  return (
    <>
       
            <header className='py-5 text-center'> 
                <ul className='flex justify-center gap-6'>
                    <li>
                        <NavLink to="/"  className={({ isActive }) => isActive ? "text-red-500" : "text-black" }> Marketing Home </NavLink>
                        
                    </li>

                    <li><NavLink to="/contact"  className={({ isActive }) => isActive ? "text-red-500" : "text-black" }> Marketing Contact </NavLink></li>
                </ul>
                
            </header>

            <main className='min-h-screen bg-green-100 text-center flex items-center justify-center font-bold text-3xl'>
                <Outlet />
            </main>
        
            <footer className='bg-black text-white py-4 text-center'>
                Marketing Footer 
            </footer>
        
    </>
  )
}

export default MarketingLayout 