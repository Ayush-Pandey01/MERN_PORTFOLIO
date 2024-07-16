import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static '>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 text-gray-600 sm:flex-row  sm:pb-5'>
                   
                    <a href="mailto:pandit.ayush6578@gmail.com" target='_blank'rel="noreferrer">
                        <i className="ri-mail-line"></i></a>
                    <a href='https://www.linkedin.com/in/ayush-pandey-195468238'target='_blank'rel="noreferrer">
                        <i className="ri-linkedin-box-line"></i>
                    </a>
                    <a href='https://www.instagram.com/ayush_._pandey01' target='_blank'rel="noreferrer">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a href='https://www.github.com/Ayush-Pandey01' target='_blank'rel="noreferrer" >
                        <i className="ri-github-fill"></i>
                    </a>
                    <a href='https://www.facebook.com/people/Ayush-Pandey/pfbid0BFGjTLNfjVUY4whEmcBP9waJRPit7Gf1YWD9pgcP1gQgzBzWDheoeWVNKBt1ZATAl/' target='_blank'rel="noreferrer">
                        <i className="ri-facebook-circle-line"></i>

                    </a>
                </div>
                <div className='w-[1px] h-52 bg-[#125f6396] sm:hidden '>

                </div>

            </div>
        </div>
    )
}

export default LeftSider
