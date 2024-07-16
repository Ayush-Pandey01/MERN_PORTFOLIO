import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
function Project() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {
                        projects.map((project, index) => (
                            <div className='cursor-pointer'
                                onClick={() => {
                                    setSelectedItemIndex(index)
                                }}>
                                <h1 className={`text-xl px-10 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#2c798a43] py-3' : 'text-white'}`}>{project.title}</h1>
                            </div>
                        ))
                    }
                </div>

                <div className='flex items-center justify-center gap-10 sm:flex-col box-border'>
                    <img src={projects[selectedItemIndex].image} className='h-60 w-72' alt=''></img>
                    <div className='flex flex-col gap-5 sm:px-2 box-border sm:w-[90vw] '>
                        <div className='flex justify-between sm:flex-col  items-center'>
                            <a href="https://github.com/Ayush-Pandey01/WanderLust" target='_blank'rel="noreferrer" className='cursor-pointer text-secondary me-5 border-secondary border-2 rounded px-10 py-3'>GIT HUB Code  </a>
                            <a href='https://wanderlust-37us.onrender.com/listings' target='_blank'rel="noreferrer" className='text-secondary me-10 ms-5 border-secondary border-2 rounded px-10 py-3 sm:mt-5 hover:border-'> Live Preview ..</a>
                        </div>
                        {/* <h1 className='text-secondary text-2xl'>{projects[selectedItemIndex].title}</h1> */}

                        <p className='text-white text-2xl sm:text-xl '>{projects[selectedItemIndex].description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project
