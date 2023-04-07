import { memo } from "react"

export const QuickSortButton = memo(({onClick, name})=>
  <div className="clueGroup" onClick={onClick}>
    #{name}
  </div>
)