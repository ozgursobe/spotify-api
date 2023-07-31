import { createContext } from "react";
import { useEffect, useState, useCallback } from 'react';



export const ApiContext = createContext()

const ApiContextProvider = ( { children } ) => {
    const client_id = process.env.REACT_APP_CLIENT_ID
    const client_secret = process.env.REACT_APP_CLIENT_SECRET
  
    const [accessToken, setAccessToken] = useState("")
  
    const [userArtists , setUserArtists ] = useState()

    const [userTracks , setUserTracks ] = useState()


    const newTopTracks = [{
      artist : "THE WEEKND",
      track : "BLINDING LIGHTS"
    },
    {
      artist : "ED SHEERAN",
      track : "SHAPE OF YOU"
    },
    {
      artist : "TONES AND I",
      track : "DANCE MONKEY"
    },
    {
      artist : "LEWIS CAPALDI",
      track : "SOMEONE YOU LOVED"
    },
    {
      artist : "POST MALONE FEATURING 21 SAVAGE",
      track : "ROCKSTAR"
    }
  ]

  
  
    const authUrl = "https://accounts.spotify.com/authorize"
  
    const redirectUrl = process.env.REACT_APP_REDIRECT_URL
  
    const scope = [process.env.REACT_APP_SCOPE]
  
  
    
  
    const login =() => {
      localStorage.setItem("user" , false)
      window.location = authUrl + "?client_id=" + client_id + "&response_type=code&redirect_uri=" + redirectUrl + "&scope=" + scope.join("%20") 
   
    }
  
  
    const logout = () => {
      localStorage.clear()
      setAccessToken("")
    }
  
    
  
    const getAccessToken = useCallback(() => {
      const a_code = localStorage.getItem("authCode")
  
  
      const postData = new URLSearchParams();
      postData.append('grant_type', 'authorization_code');
      postData.append('code', a_code);
      postData.append('redirect_uri', redirectUrl);
  
  
  
      const authorizationHeader = btoa(`${client_id}:${client_secret}`);
  
  
  
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: `Basic ${authorizationHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: postData.toString(),
      };
  
      if (a_code  ) {
    
  
        fetch('https://accounts.spotify.com/api/token', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("accessToken", data.access_token)
            setAccessToken(data.access_token)
            localStorage.setItem("user", true)
  
          })
          .catch((error) => console.error('Error:', error));
      }
  
    }, [])
  
  
  
    const getAuthorizationCodeFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const authorizationCode = urlParams.get("code")
      localStorage.setItem("authCode", authorizationCode)
    }
  
    useEffect(() => {
      const isUser = (localStorage.getItem("user") === "true")
      if (window.location.search && !isUser) {
        getAuthorizationCodeFromUrl()
        getAccessToken()
      }
    }, [getAccessToken])
  
  
    
    const showTopArtists = () => {
  
      var userParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + accessToken
        }
      }
      if (accessToken) {
        fetch("https://api.spotify.com/v1/me/top/artists", userParameters).then(res => res.json()).then(data =>  {
      
         setUserArtists(data.items.slice(0,10))
        } )
      }
  
    }

    const showTopTracks = () => {
  
      var userParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + accessToken
        }
      }
      if (accessToken) {
        fetch("https://api.spotify.com/v1/me/top/tracks", userParameters).then(res => res.json()).then(data => {
          setUserTracks(data.items.slice(0,10))
        } )
      }
  
    }
   

    return (
        <ApiContext.Provider value={ { accessToken , login , logout , showTopArtists , showTopTracks , userArtists , userTracks , newTopTracks, setAccessToken  } }>
            { children }
        </ApiContext.Provider>
    )

}

export default ApiContextProvider