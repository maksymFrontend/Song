import { actionPromise } from "../../store"
import { gql } from "../../../helpers"
import { actionAddNewPlaylists } from "../../feed"

export const actionAddPlaylist = (namePlylist, descriptionPlaylist) => 
  async dispatch => {

    let idNewPlaylist = await dispatch(actionPromise('addPlaylist', gql(
		`mutation PlaylistUpsertData($namePlylist:String!,$descriptionPlaylist:String!){
			PlaylistUpsert(playlist: {name: $namePlylist, description:$descriptionPlaylist}){
				_id
			}
		}`, 
		{namePlylist, descriptionPlaylist}
	)))

	if(idNewPlaylist){

		let dataNewPlaylist = {...idNewPlaylist, ...{name:namePlylist}}
    	await dispatch(actionAddNewPlaylists(dataNewPlaylist))
		
	}
    

  }