import React, { useRef } from 'react'
import { message } from 'antd';
import SectionTitle from '../../components/SectionTitle'
import { useDispatch} from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import emailjs from '@emailjs/browser';


function ContactUs() {
  const dispatch = useDispatch()
    
    const form = useRef()
    const sendEmail = (e)=>{
        e.preventDefault();
        dispatch(ShowLoading())

    emailjs
      .sendForm('service_lfz1mal', 'template_gz8k46a', form.current, {
        publicKey: 'qA7he7oCt3a9LP6Fq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          message.success("Email Sent Successfully")
          e.target.reset()
          dispatch(HideLoading())
        },
        (error) => {
          console.log('FAILED...', error.text);
          message.error("Something Went Wrong ...! ")
          dispatch(HideLoading())
        },
      );

    }

    return (
        <div >
            <SectionTitle title="Contact" />

            <div className='flex sm:flex-col justify-between items-center'>
                {/* <div className='flex flex-col gap-1'>
                    <p className='text-secondary'>{"{"}</p>
                    {
                        Object.keys(contact).map((key) => (
                            <p className='ml-5'>
                                <span className='text-secondary '>{key}{''}: {''}</span>
                                <span className='text-secondary '>{contact[key]}</span>
                            </p>
                        ))
                    }
                    <p className='text-secondary'>{"}"}</p>
                </div> */}
                {/* Just changing the contact us page */}


                <div className='sm:ms-3 lg:w-[50vw] sm:w-[90vw] box-border '>
                   <form ref={form} onSubmit={sendEmail}> 
                   <label className='text-secondary'  for="name">Name</label>
                    <input className='mt-5 mb-5' required type='text' id='name' placeholder='Your Name' name="user_name"></input>

                    <label type='text' className='text-secondary '  for="email">Email</label>
                    <input className='mt-5 mb-5' required id='email' type='email' placeholder='Your Email' name="user_email"></input>

                    <label className='text-secondary'  for="message">Message</label>
                    <textarea  className='h-[20vh] resize-none mt-5 mb-5 py-1' required  id='message' placeholder='Message Here....!' name="message"/> 

                    <button className= 'lg:mt-10 sm:mt-5 border-2 border-tertiary text-tertiary rounded px-10 py-3 ' type='submit'>
                        SEND MSG
                    </button>
                   </form>

                             </div>







                <div className='h-[500px]'>
                <lottie-player src="https://lottie.host/e42cdde0-4fd7-4972-b2d0-595172428670/Wbu3gf0JeA.json" background="##FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div>
    )
}

export default ContactUs