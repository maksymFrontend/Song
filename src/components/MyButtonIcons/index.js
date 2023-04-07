import { memo } from "react"

export const MyButtonIcons = memo(({name='', icon='', onClick})=>{

  return(

    <button onClick={onClick}>
      <span className="material-icons-round">{icon}</span>
      {name}
    </button>

  )

})