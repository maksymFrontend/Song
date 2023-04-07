import { memo } from "react"
import {Router, Route, Link, Redirect, Switch} from 'react-router-dom'

export const MyLinkIcons = memo(({name='', icon='', onClick, link=''})=>{

  return(

    <Link onClick={onClick} to={link}>
      <span className="material-icons-round">{icon}</span>
      {name}
    </Link>

  )

})