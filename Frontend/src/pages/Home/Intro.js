import React from 'react'
import { useSelector } from 'react-redux';

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { welcomeText, fristName, lastName, caption, description,ImgUrl,CVURL } = intro
  
  return (
    <div className='lg:h-[80vh] sm:h-[90vh]  flex  items-start sm:items-center justify-center sm:flex-col-reverse  overflow-hidden gap-2'>
      <div className='flex flex-col items-start justify-center gap-8 sm:gap-3 sm:mt-4'>
        <h1 className='text-white'>{welcomeText || ''}</h1>
        <h1 className='text-7xl sm:text-3xl   text-secondary font-semibold'>{fristName || ''} {lastName || ''}</h1>
        <h1 className='text-6xl sm:text-3xl  text-white font-semibold'>{caption || ''}</h1>
        <p className='text-white w-2/3'>{description || ''}</p>

        <a href={CVURL} target='_blanck' rel="noreferrer" className='border-2 border-tertiary text-tertiary rounded px-10 py-3'>View My CV</a>
      </div>

      <div className='overflow-hidden Image h-[80vh] sm:h-[50vh]  sm:w-[90%]  ' >
        <img className='border-4 border-secondary  sm:w-full sm:max-h-[500px] lg:max-h-[1000px]' src={ImgUrl} alt='Some Error Occured' />
      </div>
    </div>
  )
}

export default Intro
