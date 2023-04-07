import { Provider, connect } from 'react-redux'
import { actionRequestAllPlaylist } from '../../../actions/otherAction/actionRequestAllPlaylist'
import { actionClearAllPlaylists } from '../../../actions/feed'
import { MainContentBlock } from '../../../components/MainContentBlock'


export const CPageHome = connect(state => ({
                                                allPlaylist:state.feed?.allPlaylists,
                                                advancedSearch:false, 
                                                addPlaylist:false
                                            }),
                                            {
                                                requestAllPlaylist:actionRequestAllPlaylist,
                                                clearAllPlaylists:actionClearAllPlaylists
                                            })(MainContentBlock)