import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionAllPlaylist = ({mySkip = 0, myLimit = 40, sortName = '_id', sortValue = -1}) =>  
	actionPromise('allPlaylist', gql(
		`query allPlaylist($query: String){
			PlaylistFind(query: $query){
				_id name
			}
		}`, 
	{
		query: JSON.stringify([
			{},  
			{
				skip: [mySkip],
				limit: [myLimit],
				sort:[{[sortName]:+sortValue}]
			} 
		])
	}))