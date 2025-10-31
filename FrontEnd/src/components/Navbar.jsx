import React from 'react'

function Navbar() {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16'>
        <div className='flex justify-between'>
            <h1 className='text-2xl cursor-pointer font-bold'>Wordify<span className='text-3xl text-blue-700'>PDF</span></h1>
            <h1 className='mt-1 text-2xl cursor-pointer font-bold hover:scale-125 duration-300'>Workspace</h1>
        </div>
    </div>
    </>
  )
}

export default Navbar
