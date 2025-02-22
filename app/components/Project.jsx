import React from 'react'
import { LuScreenShare } from "react-icons/lu";
const Project = () => {
    return (
        <div className='bg-blue-900 h-screen'>
            <div className='h-40xl items-center justify-center mt-20  text-center text-white '>
                <div className='flex justify-center items-center gap-2 '>
                    <LuScreenShare size={30} />
                    <h1 className='text-3xl text-blue-200 '> Webinar.gg</h1>
                </div>
            </div>
            <div className='mt-20'>
                <h1 className='text-3xl text-center'>Verify Your Age</h1>
            </div>
            <div className='mt-20  items-center justify-center'>
                <h1 className='text-sm font-sans text-center'>Please confirm your birth year. THis data will not be stored </h1>
                <div className='flex  justify-center items-center gap-2 mt-3 rounder-lg'>
                    <input placeholder='Your Birth Year' className='items-center justify-center input-center border rounded-lg h-10 w-80 text-black' />
                </div>
                <div className='flex  justify-center items-center gap-2 mt-3 rounder-lg '>
                    <button className='bg-blue-400 text-white rounded-lg  items-center border rounded-lg h-10 w-80'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Project