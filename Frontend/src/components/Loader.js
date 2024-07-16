import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
      {/* <div className='flex gap-5 text-6xl font-bold sm:text-3xl'>
        <h1 className='text-secondary S'>S</h1>
        <h1 className='text-white V'>V</h1>
        <h1 className='text-tertiary A'>A</h1>
      </div> */}

        <div className='loader'></div>

    </div>



    
  )
}

export default Loader
