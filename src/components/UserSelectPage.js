

import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'

const UserSelectPage = ( { setIsShowArtist , setIsShowTracks } ) => {
    const { showTopArtists , showTopTracks } = useContext(ApiContext)
  return (
    <>
    <h2 className='text-lg sm:text-2xl'>Choose what you want to see:</h2>
    <div className='mt-12 flex flex-col items-center'>
      <button className=' border-2 bg-spotify-color w-56 h-16 rounded-xl' onClick={ () => {
           setIsShowArtist(true)
           showTopArtists()
      } } >Top Artists</button>   
        
      <button className='mt-8 mb-15 border-2 bg-spotify-color w-56 h-16 rounded-xl' onClick={ () => {
         setIsShowTracks(true)
         showTopTracks()
      } } >Top Tracks</button> 
      
    </div> </> 
  )
}

export default UserSelectPage