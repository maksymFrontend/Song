import { memo } from 'react'
import {Link} from 'react-router-dom'

export const ButtonAccountMenu = memo(({styles,icons,name,status,link, event}) =>{

    const statusPressing = status ? {color: '#212224', backgroundColor: '#4d99fb'} : {}
    const onClick        = () => (event && event())
  
    return(
      <Link to={`${link}`} className={styles} style={statusPressing} onClick={onClick}>

        <span className="material-icons-round iconButtonMenu">
          {icons}
        </span>    
        <span>
          {name}
        </span> 

      </Link>
    )
  }
)