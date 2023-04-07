import { actionInformationUser } from "../actionInformationUser"
import { actionPlayerPlay } from "../../player"
import { trackStopWorker } from "../../player"
import { trackActions } from "../../player"

export const actionAllNecessaryData = () => 
	async (dispatch, getState) =>{

	const idUser   = getState().auth.sub.id
	const lastSong = localStorage.lastSong

	await dispatch(actionInformationUser(idUser))

	if(lastSong){

		await dispatch(actionPlayerPlay(JSON.parse(lastSong)[0], //track
										JSON.parse(lastSong)[1], //playlistIndex
										JSON.parse(lastSong)[2]  //playlist
										))

		await dispatch(trackStopWorker())
		trackActions(JSON.parse(lastSong)[0])
		
	}
    

  }