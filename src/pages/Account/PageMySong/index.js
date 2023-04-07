import {Provider, connect} from 'react-redux'
import { actionRequestAllMyPlaylist } from '../../../actions/otherAction/actionRequestAllMyPlaylist'
import { actionClearAllMyPlaylists } from '../../../actions/feed'
import { MainContentBlock } from '../../../components/MainContentBlock'


export const CPageMySong = connect(state => ({
                                                allPlaylist:state.feed?.allMyPlaylists || [],
                                                advancedSearch:false,
                                                addPlaylist:true
                                            }),
                                            {
                                                requestAllPlaylist:actionRequestAllMyPlaylist,
                                                clearAllPlaylists:actionClearAllMyPlaylists
                                            })(MainContentBlock)