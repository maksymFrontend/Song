import { actionPromise } from "../../store"
import { gql } from "../../../helpers"
import { actionPlayerUpdatePlaylist } from "../../player"
import { actionAddNewPlaylists } from "../../feed"

export const actionUpdateTrackOrder = (playlist) => 
    async(dispatch, getState) =>{

        let owner,_id, playlistData, idNewPlaylist

        const idUser  = getState().auth.sub.id
        const idOwner = playlist?.owner?._id 

        if(idOwner !== idUser){

            ({owner,_id, ...playlistData} = playlist)
        
        }else{

            ({owner, ...playlistData} = playlist)
        }

        let tracks = playlistData?.tracks

        if(tracks?.length){

            idNewPlaylist = await dispatch(actionPromise('actionUpdateTrackOrder', gql(`
                mutation PlaylistUpsert($playlist: PlaylistInput){
                    PlaylistUpsert(playlist:$playlist){
                        _id
                    }
                }`, 
                {
                    playlist:{
                        ...playlistData,
                        tracks:(tracks).map(({_id})=>({_id}))
                    }
                }
            )))
      
            if(playlist?._id === getState().player?.playlist._id){

                await dispatch(actionPlayerUpdatePlaylist(playlist))

            }

        }

  }