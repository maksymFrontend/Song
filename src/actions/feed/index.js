export const actionFeedAllPlaylists    = (newPlaylists) => ({type:'ADD_PLAYLISTS', newPlaylists})
export const actionAddNewPlaylists     = (newPlaylist) => ({type:'ADD_NEW_PLAYLIST', newPlaylist})
export const actionClearAllPlaylists   = () => ({type:'CLEAR_ALL_PLAYLISTS'})
export const actionFeedAllMyPlaylists  = (newMyPlaylists) => ({type:'ADD_MY_PLAYLISTS', newMyPlaylists})
export const actionClearAllMyPlaylists = () => ({type:'CLEAR_ALL_MY_PLAYLISTS'})