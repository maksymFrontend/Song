import { memo, useEffect } from "react"

export const Logo = memo(({style = ''})=>
    <div className="logo">
        <span className={`material-icons-round ${style}`}>earbudss</span>
    </div>
)