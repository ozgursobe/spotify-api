

import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import TopTrackItem from './TopTrackItem'

const DailyTopTracks = () => {
  
  const {  newTopTracks } = useContext(ApiContext)


  return (
    <div className='mt-32 sm:mt-48 mb-10  w-4/5 lg:w-2/3 mx-auto'>
      <div className='border-2 border-violet-700 shadow-[5px_5px_30px_5px_#89CFF0]'>
       <h2 className='mt-5 underline text-icon-blue text-lg sm:text-xl md:text-2xl'>Most Listened Tracks On Spotify</h2> 
       <ul className='py-5'>
        { newTopTracks && newTopTracks.map((topTrack, index) => (
          <TopTrackItem key={index} index = {index} topTrack = {topTrack} />
        )) }
      </ul>
      </div>
      
    </div>
  )
}

export default DailyTopTracks