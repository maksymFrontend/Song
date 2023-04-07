import { TracksEditor } from "../TracksEditor"
import { actionPlayerUpdatePlaylist } from "../../actions/player"
import {Provider, connect} from 'react-redux'
import { memo } from "react"

const ActualPlaylist = memo(({playlistData={}, playlistFindData=[], onSave, ownerId}) =>{

	const availabilityTracks = Object.keys(playlistData).length

    return(
  
		<>
			<div className="headerTypeTwo">Further:</div>
			<ul className='scrollBlock' style={{height: '51vh'}}>

				{availabilityTracks ? 
					<TracksEditor tracks={playlistData} findTracks={playlistFindData} onSave={onSave} ownerId={ownerId}/> 
					: 
					<li key={'musicNot'} className='styleFullBlock'>
						Music not selected
					</li>
				}

			</ul>   
		</>
  
    )
  
})

export const CActualPlaylist = connect(state => (
													{
														playlistFindData:state.player?.playlistFindResult,
														playlistData:state.player?.playlist,
														ownerId:state.auth.sub.id
													}),
													{
														onSave: actionPlayerUpdatePlaylist
													})(ActualPlaylist)