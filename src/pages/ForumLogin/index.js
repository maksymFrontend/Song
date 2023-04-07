import {Provider, connect} from 'react-redux'
import {actionFullLogin} from '../../actions/otherAction/actionFullLogin'
import { ForumAuthorization} from '../../components/ForumAuthorization'

export const CForumLogin = connect(state => (

                                                {
                                                    type: 'Entrance', 
                                                    action:'Enter', 
                                                    alternativeAction:'Registration', 
                                                    alternativelink:'/register'
                                                }
                                                    
                                                ),

                                                {
                                                    onClick: actionFullLogin
                                                }

                                            )(ForumAuthorization)