import {Provider, connect} from 'react-redux'
import { imgForPlaylist } from "../../imageGenerator"
import { trackPlayWorker } from "../../actions/player"
import { FullNameMusis } from "../FullNameMusis"
import { memo } from 'react'

const TrackBlock = memo(({track, onClick, index=0, playlist={}, trackNow = {}}) =>{

  const originalFileName = track.originalFileName
  const artist           = track?.id3?.artist || '-'
  const trackId          = track?._id
  const trackIdNow       = trackNow?.track?._id
  const playMusic        = () => onClick(track,index, playlist)
  const trackActual      = (trackIdNow === trackId)
  const iconStop         = (trackActual?(!trackNow.isStopped?'pause':'play_arrow') : '') 
  const styleTrackActual = (trackActual ? "musicBlock musicBlockHover" : "musicBlock")
  
  
  return(
    <li index={originalFileName} className="tableTrStyleTypeOne" onClick={playMusic}>

      <div className={`${styleTrackActual} widthFull`}>

        <img src={imgForPlaylist(originalFileName)} />

        <FullNameMusis originalFileName={originalFileName} artist={artist} enableAnimation={trackActual}/>

        <div className="timeMusis">
          <span className="material-icons-round">
            {iconStop}
          </span>
        </div>

      </div>
      
    </li>
  )
  
})

export const CTrackBlock = connect(state =>(
                                            {
                                              trackNow: state?.player
                                            }),
                                            {
                                              onClick: trackPlayWorker
                                            })(TrackBlock)