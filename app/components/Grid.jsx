import React from 'react'

const Grid = () => {
  return (
    <div className=''>
    <div className='grid grid-cols-4 gap-4  '>   
       <div className=' justify-center items-center text-center text-clip font-serif bg-blue-600 col-start-1 ml-2 mb-2 gap-5 col-end-2 border-5 rounded-lg mt-2'>
        DevOps
        </div>
    </div>
    <div className='grid grid-cols-4 gap-4  '>
    <div className=' justify-center items-center text-center font-sans bg-blue-600 col-start-4  ml-2 mb-2 gap-5  border-5 rounded-lg mt-2'>
        Web3
        </div>
    </div>
    </div>
  )
}

export default Grid