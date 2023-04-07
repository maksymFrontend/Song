import { actionAddVideoPlayer } from "../../player"
/*import searchYoutube from "youtube-api-v3-search"*/
import {URL_YOUTUBE} from "../../../helpers"




export const actionRequestVideo = (name) => async(dispatch) => {

	let requestedVideos = JSON.parse(localStorage.requestedVideos || '{}')

	if(name in requestedVideos){

		dispatch(actionAddVideoPlayer(requestedVideos[name]))

	}else{

		var request = new XMLHttpRequest() 

		request.open('GET', `${URL_YOUTUBE}&&part=snippet&type="video"&q="${name}"`, true)


		request.onreadystatechange = function(){ 

			if (request.readyState != 4){
				return;
			}

			if (request.status == 200){

				let newVideos                = JSON.parse(request.responseText).items[0]
				localStorage.requestedVideos = JSON.stringify({...requestedVideos, [name]:newVideos})

				dispatch(actionAddVideoPlayer(newVideos))
				
			}
			else {
				console.log('Error happens: ' +  request.status + ', ' + request.statusText );
			}

		}

		request.send()

	}

}