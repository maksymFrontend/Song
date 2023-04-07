import { memo } from "react"


export const PlayerButtons = memo(({disabled=false, click, icon}) =>

  <button disabled={disabled} onClick={click}>

    <span className="material-icons-round">
      {icon}
    </span>
    
  </button>)