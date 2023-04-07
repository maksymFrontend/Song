import {Provider, connect} from 'react-redux'
import { actionAdvancedSearch } from '../../../actions/otherAction/actionAdvancedSearch'
import { MainContentBlock } from '../../../components/MainContentBlock'


export const CPageSearch = connect(state => ({
                                                allPlaylist:state.promise?.allPlaylistsSearch?.payload,
                                                allTracksSearch: state.promise?.allTracksSearch?.payload,
                                                advancedSearch:true,
                                                addPlaylist:false
                                            }),
                                            {
                                                filter:actionAdvancedSearch,
                                            })(MainContentBlock)