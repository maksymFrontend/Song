import { imgForPlaylist } from "../../imageGenerator"
import {Provider, connect} from 'react-redux'
import React, {useState, useMemo, useRef, useEffect, memo, useCallback} from 'react'
import {Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import { CAddTrack } from "../Dropzone"
import { CTracksEditor } from "../TracksEditor"
import { actionPlaylist } from "../../actions/otherAction/actionPlaylist"
import { actionUpdateTrackOrder } from "../../actions/otherAction/actionUpdateTrackOrder"
import { trackPlayWorker } from "../../actions/player"
import { MyTable } from '../MyTable'
import { MyButtonIcons } from '../MyButtonIcons'
import { MyLinkIcons } from '../MyLinkIcons'

const PlaylistInside = memo(({inquiryData, playlistPlay={}, onSavePlaylist, playlistData={}, match, owner = ''}) =>{

    useEffect(() => inquiryData(match.params.id),[match.params.id])
	
    const [addTrack, setAddTrack] = useState(false)
    const playlistName            = playlistData?.name
    const tracks                  = playlistData?.tracks || []
    const countTracks             = tracks?.length || 0
    const playMusicFirst          = () => playlistPlay(tracks[0], 0, playlistData)
    const ownerPlaylist           = playlistData?.owner?._id

    const showButton = ownerPlaylist === owner ? 
                                                <MyButtonIcons 
                                                  name='Append' 
                                                  icon='add_box' 
                                                  onClick={()=>setAddTrack(true)}
                                                />
                                                :
                                                <MyLinkIcons 
                                                  name='Save playlist' 
                                                  icon='save' 
                                                  onClick={()=>onSavePlaylist(playlistData)} 
                                                  link='/account/MySong'
                                                /> 

    return(
  
		<div>

			<div className='descriptionPlaylist'>
				<img src={imgForPlaylist(playlistName)}/>
				<div className='descriptionPlaylistBlock'>

				<h2>{playlistName}</h2>
				<p>
					Description: {playlistData?.description} 
					<br/>
					{countTracks} songs
				</p>

				<div>
					
					<MyButtonIcons name='Play' icon='play_arrow' onClick={playMusicFirst}/>   

					{showButton}

					{!addTrack || <CAddTrack closeWindow={setAddTrack}/>}

				</div>

				</div>
			</div>

			<div>
				<MyTable name='Tracks'>
					<ul className='scrollBlock'>
						{playlistData && <CTracksEditor/>}
					</ul>
				</MyTable>
			</div>

		</div>
    )
})

export const CPlaylistInside = connect(store => (
													{
														playlistData:store.promise?.playlistData?.payload,
														owner:store.auth?.sub.acl[0] 
													}),
													{
														inquiryData: actionPlaylist,
														onSavePlaylist: actionUpdateTrackOrder,
														playlistPlay: trackPlayWorker
													})(PlaylistInside)

