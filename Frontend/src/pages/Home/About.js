import React from 'react'
import Section from '../../components/SectionTitle'
import { useSelector } from 'react-redux';


function About() {
  const {portfolioData} = useSelector((state)=>state.root);
  const {about}= portfolioData;
  const{lottieURL,description1,description2,skills} = about
  return (
    <div >
      <Section title="About"/>
      <div className=' flex  w-full items-center sm:flex-col'>
        <div className='h-[70vh] w-1/2 sm:w-full'>
        <lottie-player src={lottieURL} background="transparent" speed="1" loop  autoplay direction="1" mode="normal"></lottie-player>
        </div>
        <div className='flex flex-col gap-5 text-white w-1/2 sm:w-full sm:m-2 sm:px-2'>
          <p>{description1 || ''}   </p>
          <p>{description2 || ''}   </p>
        </div>
      </div>
      <div className='py-5'>
          <h1 className='text-tertiary text-xl'>Here are the few technologies on which i am working currently</h1>
         <div className='flex flex-wrap gap-10 mt-5 justify-center items-center'>
          {
            skills.map((skill,index) => (
              
              <div className='border border-secondary rounded py-3 px-10 sm:w-[7rem] lg:h-[4rem] lg:w-[10rem] flex flex-col justify-center items-center'>
                
                <h1 className='text-tertiary text-xl font-bold'>{skill}</h1>
              </div>
              
            ))
          }
         </div>
      </div>
    </div>
  )
}

export default About
