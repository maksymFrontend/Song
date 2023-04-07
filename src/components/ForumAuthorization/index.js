import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { MyInputWithValidation } from '../MyInputWithValidation'
import { CActiveSession } from '../ActiveSession'
import { MainBlock } from '../MainBlock'
import { Logo } from  "../Logo"

export const ForumAuthorization = ({setToken, onClick, getToken, action, type, alternativeAction, alternativelink}) => {

    const [login, setLogin]       = useState('')
    const [password, setPassword] = useState('')

    const disabledButton = ((login.length<4)||(password.length<4))
    const logIn          = () => onClick(login,password)

    return(
      <MainBlock>
        <div className='mainBlockAuthorization'>
            <div className="logoAuthorization">
                
                <Logo style='bigLogo'/>  
                         
            </div>
            <div className='blockAuthorization'>

                <div className='headerTypeOne'>
                  {type}
                </div>

                <MyInputWithValidation autoFocus={true} value={login} name='Login' type='text' onChange={setLogin}/>

                <MyInputWithValidation value={password} name='Password' type='password' onChange={setPassword}/>

                <button disabled={disabledButton} className="btn btn-primary styleButtonActive" onClick={logIn}>
                  {action}
                </button>

                <Link to={alternativelink} className="btn btn-primary styleButtonLink">{alternativeAction}</Link>
                
                <CActiveSession/>

            </div>
        </div>
      </MainBlock>
    )
  
}