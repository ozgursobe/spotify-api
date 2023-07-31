

import React from 'react'

const UserArtistItem = ({ artist , index }) => {
  return (
    <div className='flex items-center w-5/6  mx-auto '>
    <div className='text-2xl w-9'> {(index + 1)}  </div>
    <img className='w-24 sm:w-36 md:w-20 lg:w-24 ml-3 ' src= {artist.images[0].url}  alt="" />
    <p className='ml-5 text-base sm:text-lg md:text-base'> { artist.name } </p>
  </div>
  )
}

export default UserArtistItem