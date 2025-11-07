import React from 'react'
import { Outlet } from 'react-router'

const ProjectLayout = () => {
  return (
    <>
       <header className='bg-black text-white p-4 text-center'>Project Navigation </header>


       <main className='py-28 bg-slate-100'>
            <Outlet />
       </main>
        
        
    </>
  )
}

export default ProjectLayout 