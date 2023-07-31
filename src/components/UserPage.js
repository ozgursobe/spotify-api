
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import UserArtists from './UserArtists'
import UserSelectPage from './UserSelectPage'
import UserTracks from './UserTracks'

const UserPage = () => {
    const [ isShowArtist, setIsShowArtist] = useState(false)
    const [ isShowTracks, setIsShowTracks] = useState(false)


    const { userArtists , logout , userTracks } = useContext(ApiContext)
  return (
    <div>

        { isShowArtist && userArtists && <UserArtists/> }

        { isShowTracks && userTracks && <UserTracks />  }

        


        { !isShowArtist && !isShowTracks && <UserSelectPage setIsShowArtist = {setIsShowArtist} setIsShowTracks = { setIsShowTracks } /> }
      

       <button className='mt-24 sm:mt-32 mb-8 border-2 border-slate-400 bg-white text-black rounded-3xl w-48 sm:w-64 h-16 ' onClick={logout}>Logout From Spotify</button> 
    </div>
  )
}

export default UserPage