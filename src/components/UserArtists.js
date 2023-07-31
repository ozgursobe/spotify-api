

import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import UserArtistItem from './UserArtistItem'

const UserArtists = () => {
    const { userArtists } = useContext(ApiContext)
  return (
    <div> 
          <h2 className='text-2xl text-indigo-400 underline'>Your Top Artists</h2>
          <div className='mt-16 grid md:grid-rows-5 md:grid-flow-col grid-flow-row gap-10 md:gap-5'>
          { userArtists.map((artist, index) => (
          <UserArtistItem key={index} artist={artist} index = { index } />
        )) } </div> </div>
  )
}

export default UserArtists