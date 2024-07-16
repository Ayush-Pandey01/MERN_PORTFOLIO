import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex gap-10 items-center py-10'>
      <h1 className='text-3xl text-white'>{title}</h1>
      <div className='h-[1px] w-60 bg-tertiary sm:w-20'></div>
    </div>
  )
}

export default SectionTitle
