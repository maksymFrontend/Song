import { useState, memo} from "react"
import { CCreatePlaylist } from "../CreatePlaylist"

export const NewPlaylistBlock = memo(({}) =>{
  
  const [openAddForm, setOpenAddForm] = useState(false)
  const onOpenAddForm = () => setOpenAddForm(true)
  
  return(
    <div className="playlist playlistNotHover" >
      <a onClick={onOpenAddForm}>
        
        <img src="https://www.gstatic.com/youtube/media/ytm/images/pbg/create-playlist-@210.png"/>
        <span className="material-icons-round">
          play_arrow
        </span>
        <p>
          New playlist
        </p>
        
      </a>
      {!openAddForm || <CCreatePlaylist closeWindow={setOpenAddForm}/>}

    </div>
  )
}
)