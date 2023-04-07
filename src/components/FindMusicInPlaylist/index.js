import {Provider, connect} from 'react-redux'
import { actionPlayerFindTrack } from '../../actions/player'
import { MyInputWithIcons } from '../MyInputWithIcons'
import { memo } from "react"

const FindMusicInPlaylist = memo(({onChange}) => {
  
    return(
      <MyInputWithIcons onChange={onChange} icons='search' name='Find music in playlist'/>
    )
  
})

export const CFindMusicInPlaylist = connect(null,
                                                {
                                                  onChange:actionPlayerFindTrack
                                                })(FindMusicInPlaylist)
  