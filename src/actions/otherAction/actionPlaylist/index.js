import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionPlaylist = (_id) =>
	actionPromise('playlistData', gql(
		`query playlist($_id: String){
			PlaylistFindOne(query:$_id){
				_id name owner{_id} description tracks{url _id originalFileName id3{artist year genre}}
			}
		}`, 
		{
			_id: JSON.stringify([{_id}])
		}
  	))