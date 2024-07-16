import React, { useEffect } from 'react'
import Header from '../../components/Header'
import {Tabs, message} from 'antd'
import AdminIntro from './AdminIntro.js';
import AdminAbout from './AdminAbout.js';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences.js';
import AdminProjects from './AdminProjects.js';

function Admin() {
    const {portfolioData} = useSelector((state)=>state.root);

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            window.location.href="/admin-login"
        }
    },[])

  return (
    <div className='mb-3'>
        <Header/>
        <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold lg:ms-10 sm:ms-4 mt-5 hover:underline hover:text-secondary cursor-pointer' onClick={()=>{
            window.location.href='/'
        }}>Ayush Portfolio</h1>
        <h1 className='text-primary lg:mx-10 sm:mx-3 mt-5  font-bold text-xl hover:underline hover:text-secondary cursor-pointer'
        onClick={()=>{
            localStorage.removeItem('token')
            window.location.href='/admin-login';
            message.success("LogOut Success...!");
        }}
        >LOGOUT</h1>
        </div>
        <div className= 'ms-10 sm:ms-2 mt-5 bg-primary w-auto h-[1px]  '></div>
        {portfolioData && <div className='lg:ms-10 sm:ms-4 mt-5'>
            <Tabs className='' defaultActiveKey='1'>
                <items className='' tab="Intro" key='1'>
                    <AdminIntro />
                </items>
                <items tab="About" key='2'>
                    <AdminAbout />
                </items>
                <items tab="Experiences" key='3'>
                    <AdminExperiences />
                </items>
                <items tab="Projects" key='4'>
                    <AdminProjects/>
                </items>
                
            </Tabs>
        </div>}
    </div>
  )
}

export default Admin