import { ButtonAccountMenu } from "../ButtonAccountMenu"
import {Provider, connect, useDispatch}   from 'react-redux'
import {actionAuthLogout} from '../../actions/auth'
import { memo, useCallback } from "react"
import { useLocation } from "react-router";
import { Logo } from "../Logo"

export const AccountHeader = memo(() => {

    const hist = useLocation()
    const location = hist.pathname

    const dispatch = useDispatch()
    const authLogout = useCallback(() => {

        dispatch(actionAuthLogout())

      }, []);

    return(
        <>
               
            <header className="headerBlock">

                <Logo style='usuallyLogo'/>

                <div className="verticalBlock">
                    <ButtonAccountMenu 
                                        link='/account/home' 
                                        styles="btn btn-primary" 
                                        icons='home' 
                                        name='Home' 
                                        status={location === '/account/home'}/>

                    <ButtonAccountMenu 
                                        link='/account/MySong' 
                                        styles="btn btn-primary" 
                                        icons='album' 
                                        name='MySong' 
                                        status={location === '/account/MySong'}/>

                    <ButtonAccountMenu 
                                        link='/account/search' 
                                        styles="btn btn-primary" 
                                        icons='search' 
                                        name='Search' 
                                        status={location === '/account/search'}/>

                </div>

                <div className={location === '/account'?'exitBlock':''}>

                    <ButtonAccountMenu 
                                        link='/account' 
                                        styles="btn btn-outline-primary" 
                                        icons='person' 
                                        name='User' 
                                        status={location === '/account'}/>

                    {location !== '/account' || <ButtonAccountMenu 
                                                                    link='/' 
                                                                    event={authLogout} 
                                                                    styles="btn btn-outline-primary" 
                                                                    icons='sensor_door' 
                                                                    name='Logout' 
                                                                    status={false}/>
                    }
                    
                </div>
                
            </header>
        
        </>
    )
    
})



