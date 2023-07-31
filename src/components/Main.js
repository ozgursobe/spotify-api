

import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import MainPage from './MainPage'
import UserPage from './UserPage'

const Main = () => {
  const { accessToken , setAccessToken } = useContext(ApiContext)
  
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"))
  }, [setAccessToken])

  

  return (
    <div className='w-2/3 mt-32 mx-auto text-center '>
    
    
    { !accessToken && <MainPage />
       }
   
    { accessToken && <UserPage />    }

     

     

    </div>
   
  )
}

export default Main