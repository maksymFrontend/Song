import { store } from '../../reducers/createStore'
import { backendURL } from '../../helpers'
import { actionRequestVideo } from '../otherAction/actionRequestVideo'

const audio   = new Audio()
audio.onended = () => store.dispatch(actionNextTrack())
  
export const soundVolume = () => async (dispatch, getState)  => {
  
    await dispatch(actionSoundVolume())
  
    audio.volume = getState().player.soundVolume;
  
}

export const actionRepeatTrack            =                 ()               => ({type:'REPEAT_TRACK'})
export const actionPlayerIsStopped        =                 ()               => ({type:'IS_STOPPED'})
export const actionPlayerNextTrack        =                 ()               => ({type:'NEXT_TRACK'})
export const actionPlayerPreviousTrack    =                 ()               => ({type:'PREVIOUS_TRACK'})
export const actionPlayerTrackCurrentTime =             (currentTime)        => ({type:'CURRENT_TIME_TRACK', currentTime})
export const actionSoundVolume            =                 ()               => ({type:'SOUND_VOLUME'})
export const actionPlayerTrackVolume      =              (volume)            => ({type:'VOLUME_TRACK', volume})
export const actionPlayerUpdatePlaylist   =             (playlist)           => ({type:'UPDATE_PLAYLIST', playlist})
export const actionPlayerPlay             = (track, playlistIndex, playlist) =>({type:"IS_PLAYING", track, playlistIndex, playlist})
export const actionPlayerFindTrack        =             (findName)           => ({type:'FIND_TRACK', findName})
export const actionAddVideoPlayer         =             (newVideo)           => ({type:'ADD_VIDEO', newVideo})


export const actionCurrentTime  = (currentTime) => {

    audio.currentTime = (currentTime)

}



export const trackActions = (urlVar) => {
  
    audio.src = backendURL + '/'+ urlVar.url
    audio.load()
    audio.onloadedmetadata = () => store.dispatch(actionPlayerTrackVolume(audio.duration))
    audio.ontimeupdate = () => store.dispatch(actionPlayerTrackCurrentTime(audio.currentTime))

    store.dispatch(actionRequestVideo(urlVar?.originalFileName))
  
}
  
export const trackPlayWorker = (track, index, playlist) =>  
    async (dispatch, getState) => { 
  
        localStorage.lastSong=JSON.stringify([track,index,playlist])
    
        if(getState().player?.repeatTrack || (getState().player?.track?._id !== track._id)){
            
            await dispatch(actionPlayerPlay(track, index, playlist))
            await trackActions(track)
            audio.play()
        
        }else{
    
            dispatch(trackStopWorker())

        }
    }
  
export const trackStopWorker = () =>  
    async (dispatch, getState) => { 
  
        await dispatch(actionPlayerIsStopped())
        !getState().player.isStopped ? audio.play() : audio.pause()
  
    }
    
export const actionNextTrack = () =>
    async (dispatch, getState) => { 
  
        await dispatch(actionPlayerNextTrack())

        let player = getState().player

        await dispatch(trackPlayWorker(player.playlist.tracks[player.playlistIndex],player.playlistIndex,player.playlist))

    }

export const actionPreviousTrack = () =>
    async (dispatch, getState) => {
  
        await dispatch(actionPlayerPreviousTrack())

        let player = getState().player

        dispatch(trackPlayWorker(player.playlist.tracks[player.playlistIndex],player.playlistIndex,player.playlist))
    
    }