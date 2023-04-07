import { CTrackBlock } from '../TrackBlock'
import {Provider, connect} from 'react-redux'
import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import {arrayMoveImmutable} from 'array-move'
import { actionUpdateTrackOrder } from '../../actions/otherAction/actionUpdateTrackOrder'


export const TracksEditor = memo(({tracks, onSave, ownerId, onFileDrop, fileStatus, findTracks}) => {

    let playlist            = ( findTracks!==undefined ? findTracks : tracks )
    const [state, setState] = useState(playlist)

    useEffect(() => setState(playlist), [playlist])
  
    const onSortEnd = ({oldIndex, newIndex}) => {
   
      setState({...state, tracks:arrayMoveImmutable(state.tracks, oldIndex, newIndex)})
      onSave({...state, tracks:arrayMoveImmutable(state.tracks, oldIndex, newIndex)})
    
    }
  
    return (
      <SortableList distance={1} tracks={state} allTracks={tracks} onSortEnd={onSortEnd} />
    )
  
})




const SortableList = SortableContainer(({tracks = {}, allTracks = {}}) => {

    return (
        <ul>
            {tracks?.tracks?.map((track,index) => (
                <SortableItem 
                                key={`item-${track._id}`} 
                                index={index} 
                                indexTrack={Object.keys(allTracks).length?allTracks.tracks.findIndex(i => (i._id === track._id)):index} 
                                track={track} playlist={(Object.keys(allTracks).length?allTracks:tracks)} 
                />
            ))}
        </ul>
    )

})


const SortableItem = SortableElement(({track, indexTrack,playlist}) => <CTrackBlock track={track} index={indexTrack} playlist={playlist}/>)



                                        
export const CTracksEditor = connect(state =>(
                                            {
                                                tracks:state.promise?.playlistData?.payload || {},
                                                ownerId:state.auth.sub.id
                                            }
                                        ),
                                        {
                                            onSave: actionUpdateTrackOrder
                                        }
                                    )(TracksEditor)
