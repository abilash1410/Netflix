import React from 'react'

const VideoTitle = ({title,overview}) => {

  const trimmedOverview = overview.substring(0,150);

  if(title && overview) return (
    <div className='absolute text-white w-screen aspect-video pt-[20%] px-10 bg-gradient-to-r from-black'>
      <h1 className='font-bold text-3xl'>{title}</h1>
      <p className='mt-3 w-1/4'>{trimmedOverview+'...'}</p>
      <div className='flex mt-5'>
        <button className='rounded-lg p-2 w-28 bg-white text-black font-bold hover:bg-opacity-80'>▷ Play</button>
        <button className='ml-6 rounded-lg p-2 w-28 bg-gray-500 text-white hover:bg-opacity-80'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
