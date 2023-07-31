

import React from 'react'

const UserTrackItem = ( {track , index }) => {
  return (
    <div className='flex items-center  w-5/6  mx-auto gap-4 '>
    <div className='text-2xl  w-9 '> {index + 1}   </div>
    <img className='w-24 sm:w-36 md:w-24 lg:w-24 ' src= {track.album.images[0].url}  alt="" />
    <div className='ml-5 flex flex-col text-left text-sm sm:text-lg md:text-base'>
      <p className=''> { track.artists[0].name } </p>
      <p className=' mt-3'> { track.name } </p>
    </div>
    
  </div>
  )
}

export default UserTrackItem