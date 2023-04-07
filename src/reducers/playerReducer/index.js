export function playerReducer(state = {
                                            repeatTrack:false,
                                            isStopped:true, 
                                            isPlaying:false, 
                                            currentTime:0, 
                                            volume:0, 
                                            soundVolume:1,
                                            video:null
                                        }, 
                                        {
                                            findName,
                                            type,
                                            track,
                                            playlist,
                                            playlistIndex,
                                            currentTime,
                                            volume, 
                                            repeatTrack,
                                            newVideo
                                        }){

    if(type === "IS_PLAYING"){ 
  
        return {
            ...state,
            playlistIndex: playlistIndex ,
            track,
            playlist: playlist ? {...playlist} : state.playlist,
            isStopped:false,
            isPlaying:true,
            playlistFindResult:playlist ? {...playlist} : state.playlist,
        }
  
    }
  
    if(type === "UPDATE_PLAYLIST"){ 
  
		return {
			...state,
			playlist: playlist ? {...playlist} : state.playlist,
			playlistFindResult: playlist ? {...playlist} : state.playlist
		}
  
    }
  
    if(type === "REPEAT_TRACK"){
  
		return {
			...state,
			repeatTrack: !state.repeatTrack
		}
  
    }
  
    if(type === "SOUND_VOLUME"){ 
  
		return {
			...state,
			soundVolume: !state.soundVolume
		}
  
    } 
  
    if(type === "CURRENT_TIME_TRACK"){ 
  
		return {
			...state,
			currentTime: currentTime
		}
  
    }
  
    if (type === "VOLUME_TRACK"){ 
  
		return {
			...state,
			volume: volume
		}
  
    }
    if(type === 'IS_STOPPED'){
  
		return {
			...state,
			isStopped:!state.isStopped,
			isPlaying:!state.isPlaying
		}
  
    }
  
    if(type === "NEXT_TRACK"){
  
		let countTracks = state.playlist.tracks.length

		return {
			...state,
			isStopped:false,
			isPlaying:true,
			playlistIndex: ((countTracks + state.playlistIndex + (!state.repeatTrack?1:0)) % countTracks),
		}
  
    }
  
    if(type === "PREVIOUS_TRACK"){
  
		let countTracks = state.playlist.tracks.length

		return {
			...state,
			isStopped:false,
			isPlaying:true,
			playlistIndex:((countTracks + state.playlistIndex - 1) % countTracks),
		}
  
    }
  
    if(type === "FIND_TRACK"){
  
		return{
			...state,
			playlistFindResult: {
									...state.playlistFindResult,
									tracks:state.playlist.tracks.filter(item => item.originalFileName.includes(findName))
								}
		}
  
    }

    if(type === "ADD_VIDEO"){
  
		return{
				...state,
				video: newVideo
		}
  
    }
  
    return state || {}
  
}