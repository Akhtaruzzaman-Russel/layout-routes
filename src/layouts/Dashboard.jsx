import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className='flex gap-8 p-4'>
        <header className='h-screen w-56 bg-indigo-400 text-white p-4'>
            
            <Link to="/dashboard" className='text-2xl font-bold'> Dashboard </Link> 

            <nav className='mt-5'>
                    <ul className='space-y-3'>
                        <li><NavLink to= "/dashboard/admin"  className={({ isActive }) => isActive ? "text-red-500" : "text-white font-semibold" }>Admin</NavLink></li>
                        <li><NavLink to= "/dashboard/user"  className={({ isActive }) => isActive ? "text-red-500" : "text-white font-semibold" }>User</NavLink></li>
                    </ul>
            </nav>
             
             
             </header>


        <main className='p-4'>
            <Outlet /> 
        </main>
        
    </div>
  )
}

export default Dashboard 