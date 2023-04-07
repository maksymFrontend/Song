import { CTrackBlock } from '../TrackBlock'
import {Provider, connect} from 'react-redux'
import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import {arrayMoveImmutable} from 'array-move'
import { actionUpdateTrackOrder } from '../../actions/otherAction/actionUpdateTrackOrder'
import {PopUpWindow} from '../PopUpWindow'
import { trackStopWorker } from "../../actions/player"


const Video = memo(({videoData, stopMusic, isStopped}) => {

    const [openVideo, setOpenVideo] = useState(false)

    const onOpenVideo = () =>{
        setOpenVideo(true)
        isStopped || stopMusic()
    }

    const videoId = videoData?.id?.videoId
    const srcImg  = videoData?.snippet?.thumbnails?.medium?.url

    return (
     <>
        { videoData && 
            <img src={srcImg} className="imgPlayer" onClick={onOpenVideo}/> 
        }
        
        {openVideo && 
           <PopUpWindow closeWindow={()=>setOpenVideo(false)}>
                <div className="container">
                    <iframe className="iframePlayer" frameBorder="0" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video" />
                </div>
           </PopUpWindow> 
        }
     </>
    )
  
})



                                        
export const CVideo = connect(state =>(
                                            {
                                                videoData:state.player.video,
                                                isStopped:state.player.isStopped
                                            }
                                        ),
                                        {
                                            stopMusic:trackStopWorker,
                                        }
                                    )(Video)
