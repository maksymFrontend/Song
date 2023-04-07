import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionAllMyPlaylist = ({mySkip=0,myLimit=40,sortName = '_id', sortValue = -1}) => async(dispatch, getState) =>{  
  
    const idUser = getState().auth.sub.id
    
    return await dispatch(actionPromise('allMyPlaylist', gql(
		`query allPlaylist($query: String){
			PlaylistFind(query: $query){
				_id name
			}
		}`,
		{
			query: JSON.stringify(
				[
					{
						___owner: idUser
					},  
					{
						skip: [mySkip],
						limit: [myLimit],
						sort:[
							{
								[sortName]:+sortValue
							}
						]
					}  
				]
			)
		}
    )))
  
}
  