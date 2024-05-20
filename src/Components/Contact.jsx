import { Grid, TextField } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full  bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 mt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div>
                <form action="https://getform.io/f/paqgwkya" method='POST' className='flex flex-col w-full space-y-3 md:space-y-6 '>
                    <input type="text" name='name' placeholder='Enter your name' className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type="email" name='email' placeholder='Enter your email' className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name="message" placeholder='Write your message here' rows={10} className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-800 px-6 py-3 font-bold max-auto flex items-center rounded-md hover:scale-110 duration-300'><span className='w-full text-center'>Submit</span></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact