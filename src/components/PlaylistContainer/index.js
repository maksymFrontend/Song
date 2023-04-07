import { useState, memo, useEffect} from "react"
import { Playlist  } from '../Playlist'


export const PlaylistContainer = memo(({sort, allPlaylist=[], clearAllPlaylists, requestAllPlaylist, advancedSearch})=>{

  const [checkScroll, setScroll] = useState(false)
  const [requestWas, setRequestWas] = useState(true)

  useEffect(()=>{
    
    if(clearAllPlaylists){

      clearAllPlaylists()
      requestAllPlaylist(sort)
      setRequestWas(false)
      
    }else{

      setRequestWas(true)

    }
    
  },[sort])

  useEffect(() => {
 
    if (checkScroll && !advancedSearch && requestWas){

      requestAllPlaylist(sort)

      setRequestWas(false)

    }else{

      setRequestWas(true)
      
    }
    
    setScroll(false)

  }, [checkScroll])

  useEffect(() => {

    if(!checkScroll){
      
      document.getElementById('allPlaylistsBlock').addEventListener('scroll', checkScrollFunction)
      
    }
  
  }, [allPlaylist.length])

  const checkScrollFunction = (e) => {
 
    if((e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) <= 10){

      setScroll(true)
      document.getElementById('allPlaylistsBlock').removeEventListener('scroll', checkScrollFunction)
      
    }

  }

  return(allPlaylist.map(playlist =>(<Playlist key={playlist._id} playlist={playlist}/>)))

})

