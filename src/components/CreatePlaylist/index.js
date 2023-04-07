import {Provider, connect} from 'react-redux'
import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import { actionAddPlaylist } from '../../actions/otherAction/actionAddPlaylist'
import { PopUpWindow } from '../PopUpWindow'
import { MyInput } from '../MyInput'

const CreatePlaylist = memo(({onClick, closeWindow}) => {

    const [playlistName, setPlaylistName] = useState('')
    const [description, setDescription]   = useState('')

    const click = () => {
      onClick(playlistName, description)
      closeWindow(false)
    }
    const disabledButton = ((playlistName.length<4)||(description.length<4))
  
    return(
      <PopUpWindow closeWindow={closeWindow}>
        <div className="container">

          <MyInput name='Playlist name' onChange={setPlaylistName} autoFocus={true}  type='text' value={playlistName} />

          <MyInput name='Description' onChange={setDescription} type='text' value={description} />
  
          <button disabled={disabledButton} className="btn btn-primary styleButtonActive" onClick={click}>
            Create playlist
          </button>
        </div>
      
      </PopUpWindow>
    )
  
})


export const CCreatePlaylist = connect(
                                        null, 
                                        {
                                          onClick:actionAddPlaylist
                                        }
                                      )(CreatePlaylist)