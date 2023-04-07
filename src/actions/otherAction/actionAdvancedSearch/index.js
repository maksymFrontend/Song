import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionAdvancedSearch =  ({searchText = '', sortName = '_id', sortValue = -1}) => 
  async (dispatch) =>{
    
    dispatch(actionPromise('allPlaylistsSearch', gql(
		`query allPlaylist($query: String){
			PlaylistFind(query: $query){
				_id name
			}
		}`, 
		{query: JSON.stringify([
			{
				$and: [
					{
						name: `/${searchText}/`
					}
				]
			},  
			{	
				limit: [10],
				sort:[{[sortName]:+sortValue}]
			} 
		])}
    )))

    dispatch(actionPromise('allTracksSearch', gql(
		`query allPlaylist($query: String){
			TrackFind(query: $query){
				url _id originalFileName owner{_id} id3{artist year genre} playlists{_id}
			}
		}`, 
		{
			query: JSON.stringify([
				{
					$or: [
						{
							originalFileName: `/${searchText}/`
						}, 
						{
							description: `/${searchText}/`
						}
					]
				},  
				{	
					limit: [10],
					sort:[{[sortName]:+sortValue}]
				} 
			])
		}
    )))

  } 