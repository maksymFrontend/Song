import React, {useState, useMemo, useRef, useEffect} from 'react'
import {Provider, connect} from 'react-redux';
import { actionСhangePassword } from "../../actions/otherAction/actionСhangePassword"
import { PopUpWindow } from '../PopUpWindow'
import { MyInputWithValidation } from '../MyInputWithValidation'
import { memo } from 'react'
 
const ChangePassword = memo(({onClick, closeWindow}) =>{

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

  
    return(
      <PopUpWindow closeWindow={closeWindow}>
        <div className="container">

          <MyInputWithValidation autoFocus={true} value={login} name='Login' type='text' onChange={setLogin}/>

          <MyInputWithValidation value={password} name='Password' type='password' onChange={setPassword}/>

          <MyInputWithValidation value={newPassword} name='New password' type='password' onChange={setNewPassword}/>
  
          <button disabled={(login.length<4)||(password.length<4)||(newPassword.length<4)} className="btn btn-primary styleButtonActive" onClick={() => {onClick(login,password,newPassword);closeWindow()}}>Change</button>
        </div>
      </PopUpWindow >
    )
  
  })
  
export const CChangePassword = connect(null, 
                                      {
                                        onClick:actionСhangePassword
                                      })(ChangePassword)