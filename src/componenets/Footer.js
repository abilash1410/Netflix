import React from 'react'
import MultiLingual from './MultiLingual'

const Footer = () => {
  return (

        <div  className="w-[100%] h-[425px] absolute bg-black mt-[640px]">
         <div className='m-20 flex flex-col text-white text-opacity-75'>
         <p className='p-4'>Questions? Call 000-800-919-1694</p>
         <div className='flex flex-wrap'>
         <h5 className='p-4 mr-40 underline cursor-pointer'>FAQ</h5>
         <p className='p-4 mr-40 underline cursor-pointer'>Help Centre</p>
         <p className='p-4 mr-40 underline cursor-pointer'>Terms of Use</p>
         <p className='p-4  mr-40 underline cursor-pointer'>Privacy</p>
         </div>
         <div className='flex flex-wrap'>
         <p className='p-4 mr-14 underline cursor-pointer'>Cookie Preference</p>
         <p className='p-4 mr-40 underline cursor-pointer'>Corporate Information</p>
         </div>
         <div className='p-4'><MultiLingual/></div>
         </div>
    </div>
  )
}

export default Footer
