import { actionUploadFile } from "../actionUploadFile"
import { actionAddTrackPlaylist } from "../actionAddTrackPlaylist"
import { actionPlaylist } from "../actionPlaylist"


export const actionSetTrack = files =>
	async (dispatch, getState) =>{

		let idPlaylist = getState().promise.playlistData.payload._id

		await Promise.all(files.map(async (file)=> await dispatch(actionUploadFile(file, 'track', '/track')))).then(newTracks => {
			
			Promise.all(newTracks.map(async (newTrack)=> await dispatch(actionAddTrackPlaylist(newTrack._id, idPlaylist)))).then( n  =>
			
				{
					console.log(n)
					dispatch(actionPlaylist(idPlaylist))
				}
			
			);

	})

  }
