import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import DailyTopTracks from './DailyTopTracks'

const MainPage = () => {
    const { login } = useContext(ApiContext)
  return (
    <div > 
    <div className='text-md sm:text-2xl' >
      Please login with your spotify account,
      <div>
      to see your most listened tracks and artists
      </div>
     
    </div>
   <button onClick={login} className = "mt-12 text-xl sm:text-3xl w-64 h-16 border-2 bg-spotify-color rounded-lg " >Login Spotify</button>  
   <DailyTopTracks />  
</div>
  )
}

export default MainPage