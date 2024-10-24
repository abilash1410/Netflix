import React from 'react'

const Shimmer = () => {
  return (
    <div className="p-2 m-2 bg-fuchsia-200   flex flex-wrap animate-pulse">
         <div className="p-2 m-2 w-[200] h-[200] bg-zinc-400"></div>
        <div className="p-2 m-2 w-[200] h-[200] bg-zinc-400"></div>
        <div className="p-2 m-2 w-[200] h-[200] bg-zinc-400"></div>
        <div className="p-2 m-2 w-[200] h-[200] bg-zinc-400"></div>
        <div className="p-2 m-2 w-[200] h-[200] bg-zinc-400"></div>
    </div>
   
  )
}

export default Shimmer
