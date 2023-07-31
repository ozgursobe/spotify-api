

import React from 'react'


const TopTrackItem = ( {topTrack , index} ) => {
  return (
    <>
    <li key={index} className='mt-5 ml-5 flex gap-4 sm:gap-8 items-center'>
    <div className=' text-xl sm:text-3xl text-icon-blue'> {index+1} </div> 
    <div className='flex flex-col text-left '>
       <div className=' sm:text-xl lg:text-2xl '>
       { topTrack.artist}
       </div>
       <div className='text-sm sm:text-lg text-spotify-color'>
       {topTrack.track}
       </div>

   </div> </li>
   </>
  )
}

export default TopTrackItem