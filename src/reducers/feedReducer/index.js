export function feedReducer(state = {
                						allPlaylists:[], 
										allMyPlaylists:[]
									}, 
									{
										type, 
										newPlaylists = [], 
										newMyPlaylists = [], 
										newPlaylist = {}
									}){
										

    if(type === 'ADD_PLAYLISTS'){
      return {
        ...state, 
        allPlaylists: state?.allPlaylists ? [...state.allPlaylists, ...newPlaylists]:[...newPlaylists]
      }
    }

    if(type === 'CLEAR_ALL_PLAYLISTS'){
      return {
        ...state, 
        allPlaylists: []
      }
    }

    if(type === 'ADD_MY_PLAYLISTS'){
      return {
        ...state, 
        allMyPlaylists: state?.allMyPlaylists ? [...state.allMyPlaylists, ...newMyPlaylists]:[...newMyPlaylists]
      }
    }

    if(type === 'CLEAR_ALL_MY_PLAYLISTS'){
      return {
        ...state, 
        allMyPlaylists: []
      }
    }
  
    if(type === 'ADD_NEW_PLAYLIST'){
      return {
        ...state, 
        allMyPlaylists: state?.allMyPlaylists ? [newPlaylist, ...state.allMyPlaylists]:[newPlaylist],
        allPlaylists: state?.allPlaylists ? [newPlaylist, ...state.allPlaylists]:[newPlaylist]
      }
    }
  
    return state || {}
  
}
  