import {Provider, connect} from 'react-redux'
import {actionRegisterLogin} from '../../actions/otherAction/actionRegisterLogin'
import { ForumAuthorization} from '../../components/ForumAuthorization'


export const CForumRegistration = connect(state => (
        
                                                        {
                                                            type: 'Registration', 
                                                            action:'Create account', 
                                                            alternativeAction:'Entrance', 
                                                            alternativelink:'/login'
                                                        }
                                                        
                                                    ), 
                                                        
                                                    {
                                                        onClick: actionRegisterLogin
                                                    }

                                                )(ForumAuthorization)