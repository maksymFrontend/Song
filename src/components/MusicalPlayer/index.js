import {Provider, connect} from 'react-redux'
import React, {useState, useMemo, useRef, useEffect} from 'react'
import { actionNextTrack } from "../../actions/player"
import { actionPreviousTrack } from "../../actions/player"
import { trackStopWorker } from "../../actions/player"
import { soundVolume } from "../../actions/player"
import { actionRepeatTrack } from "../../actions/player"
import { actionCurrentTime } from "../../actions/player"
import { CVideo } from "../../components/Video"
import { PlayerButtons } from "../../components/PlayerButtons"
import { FullNameMusis } from "../../components/FullNameMusis"
import { memo } from "react"

var sprintf = require('sprintf-js').sprintf,
vsprintf    = require('sprintf-js').vsprintf

const MusicalPlayer = memo(({OnCurrentTime, repeatTrack, onRepeatTrack, NextTrack, PreviousTrack, Stop, isStopped, track, volume, currentTime, soundVolume, OnSoundVolume}) =>{
 
    useEffect(()=>setChangeCurrentTime(currentTime),[currentTime])
  
    const [changeCurrentTime, setChangeCurrentTime] = useState(currentTime)

    const thereTrack         = (!Object.keys(track).length?true:false)
    const iconPlay           = (Object.keys(track).length?(isStopped?'play_arrow':'pause'):'play_arrow')
    const originalFileName   = track?.originalFileName
    const artist             = track?.id3?.artist
    const currentTimeNumber  = Math.floor(currentTime / 60) + ':' + sprintf('%02d', Math.floor((currentTime % 60)))
    const trackTimeNumber    = Math.floor(volume / 60) + ':' + sprintf('%02d', Math.floor((volume % 60)))

    
    const changeTime = () => {
        return (e) => OnCurrentTime(+e.target.value)
    }
    
  
    return(
      
      <div className="musicalPlayer">

        <div className='flex'>
          
            <CVideo />

            <FullNameMusis originalFileName={originalFileName} artist={artist} enableAnimation={true}/>

        </div>
  
        <div>
            <input type="range" min="0" max={volume} step="1.0" value={changeCurrentTime} onChange={changeTime()} className="fileMusic"/> 
            
            <div className="fileMusicTime">

                <div>{currentTimeNumber}</div>
                <div>{trackTimeNumber}</div>

            </div>

        </div>
        
  
        <div className="musicalPlayerTechnical">

            <PlayerButtons disabled={thereTrack} click={OnSoundVolume} icon={!soundVolume?'volume_off':'volume_up'}/>

            <PlayerButtons disabled={thereTrack} click={PreviousTrack} icon='skip_previous'/>
            
            <PlayerButtons disabled={thereTrack} click={Stop} icon={iconPlay}/>

            <PlayerButtons disabled={thereTrack} click={NextTrack} icon='skip_next'/>

            <PlayerButtons disabled={thereTrack} click={onRepeatTrack} icon={repeatTrack?'repeat_one':'repeat'}/>

        </div>
  
      </div>
  
    )
  
})
  

  
export const CMusicalPlayer = connect(state => ({
                                        isStopped: state.player.isStopped,
                                        track: state.player.track || {},
                                        currentTime: state.player.currentTime || 0,
                                        volume: state.player.volume || 0,
                                        soundVolume: state.player.soundVolume,
                                        repeatTrack: state.player.repeatTrack,
                                        
                                        }), {
                                                NextTrack: actionNextTrack, 
                                                PreviousTrack: actionPreviousTrack,
                                                Stop:trackStopWorker,
                                                OnSoundVolume:soundVolume, 
                                                onRepeatTrack:actionRepeatTrack,
                                                OnCurrentTime:actionCurrentTime 
                                                })(MusicalPlayer)

