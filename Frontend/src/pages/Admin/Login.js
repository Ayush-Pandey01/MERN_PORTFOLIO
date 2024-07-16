import React, { useState } from 'react'
import { message } from 'antd';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'


function Login() {
  const dispatch = useDispatch()
  const [user,setUser]=useState(
    {
      username:'',
      password:''
    }
  )
  const Login=async()=>{
    try {
      dispatch(ShowLoading())
      
      const response = await axios.post("https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/admin-login",user);
      console.log(response)
      if(response.data.success){
        dispatch(HideLoading())
        message.success(response.data.message)
        localStorage.setItem('token',JSON.stringify(response.data))
        window.location.href = '/Admin'

      }else{

       dispatch(HideLoading())
        message.error(response.data.message)
      }

    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }
 
  return (
    <div className='flex justify-center h-[100vh]  items-center bg-primary'>
        <div className='sm:w-[90%]  sm:my-2 w-[30%]  flex justify-center flex-col items-center bg-white border-box h-[50vh] rounded'>
        <h1 className='text-2xl font-bold text-secondary'>Ayush - Portfolio</h1>
        <div className='h-[1px] w-[90%] bg-secondary '></div>
        <input className='mt-5  text-secondary' type='text' name='username' placeholder='Username' value={user.username}
        onChange={(e)=>{
          setUser({...user,username:e.target.value})
        }}
        />
        <input className='mt-5  text-secondary' type='password' name='password' placeholder='Password'  value={user.password}
        onChange={(e)=>{
          setUser({...user,password:e.target.value})
        }}/>
        <button className=' bg-green-500 py-2 px-5 mt-5 rounded' onClick={Login}>Login</button>
        </div>
    </div>
  )
}

export default Login