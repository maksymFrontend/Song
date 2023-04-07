import { memo } from 'react'
import {Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import { imgForPlaylist } from "../../imageGenerator"

export const Playlist = memo(({playlist = {}}) =>{
  
  const {name, _id} = playlist

  return(

    <div className="playlist">

      <Link to={`/account/pleylist/${_id}`}>

        <img src={imgForPlaylist(name)}/>
        
        <span className="material-icons-round">
          play_arrow
        </span>

        <p>{name}</p>

      </Link>

    </div>

  )
  
})