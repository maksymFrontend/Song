import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionAddTrackPlaylist = (idTrack, idPlaylist) => 
  actionPromise('addTrackPlaylist', gql(
    `mutation addTrackPlaylist($idTrack:ID,$idPlaylist:ID){
      TrackUpsert(track: {_id: $idTrack, playlists:[{_id:$idPlaylist}]}){
        _id
      }
    }`, 
		{idTrack, idPlaylist}
  ))