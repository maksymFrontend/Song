import { useEffect } from "react"
import { connect } from "react-redux"
import { actionInformationUser } from "../../actions/otherAction/actionInformationUser"
import { backendURL } from '../../helpers/index'
import {Router, Route, Link, Redirect, Switch} from 'react-router-dom'




const ActiveSession = ({idUser, informationUser = {}, downloadInformationUser}) => {

    useEffect(() => {if(idUser) downloadInformationUser(idUser)}, [idUser])
    if(!idUser) return <></>
    let {avatar, login, nick} = informationUser
    const img = 'https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'

    

    return(

        <>
            <div className="trait"></div>

            <Link to='/account'>
                <div className="input-group mb-3 form-control inputGroup activeSession">
                    <img src={avatar?.url && (backendURL + "/" + avatar?.url) || img}/>
                    <div>
                        <span>
                            {nick || 'User'}
                        </span>
                        <span>
                            {login}
                        </span>
                    </div>
                    <span className="material-icons-round">
                        navigate_next
                    </span>
                </div>
            </Link>
        </>

    )
}
 

export const CActiveSession = connect(state => ({
                                                    idUser: state?.auth?.sub?.id, 
                                                    informationUser: state.promise?.informationUser?.payload
                                                }),
                                                {
                                                    downloadInformationUser:actionInformationUser
                                                })(ActiveSession)