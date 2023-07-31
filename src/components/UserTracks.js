

import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import UserTrackItem from './UserTrackItem'

const UserTracks = () => {
    const { userTracks } = useContext(ApiContext) 
  return (
    <div> 
    <h2 className='text-2xl text-indigo-400 underline'>Your Top Tracks</h2>
    <div className='mt-16 grid md:grid-rows-5 md:grid-flow-col grid-flow-row gap-10 md:gap-5'>
    { userTracks.map((track, index) => (
     <UserTrackItem key={index} track = {track} index = {index} />
  )) } </div> </div> 
  )
}

export default UserTracks