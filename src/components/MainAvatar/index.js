import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import { CLoadAvatar } from '../Dropzone'

export const MainAvatar = memo(({changeAvatar, setChangeAvatar, url}) => {

  const onChangeAvatar = () => setChangeAvatar(true)

  return(
    <div className="blockImgAvatar">

      <img className="imgAvatar" src={url}/>
      <span className="material-icons-round" onClick={onChangeAvatar}>
        settings_suggest
      </span>

      {!changeAvatar || <CLoadAvatar closeWindow={setChangeAvatar}/>}

    </div>
  )
})
