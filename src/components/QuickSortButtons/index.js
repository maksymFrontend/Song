import { memo } from "react"
import { QuickSortButton } from '../QuickSortButton'

export const QuickSortButtons = memo(({buttons})=>
  buttons?.map(({name, onClick}) => <QuickSortButton key={name} name={name} onClick={onClick} />)
)