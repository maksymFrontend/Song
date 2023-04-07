import { memo } from "react"



export const MyInputWithIcons = memo(({name = '', onChange, autoFocus = false, type = 'text', icons='', style={}}) => {

    const change = (e) => {if(e.target.value.trim().length)onChange(e.target.value.trim())}

    return(
        <div className="input-group mb-3 form-control inputGroup" style={style}>
            <div className="input-group-prepend">
                <span className="input-group-text material-icons-round">
                    {icons}
                </span> 
            </div>
            <input type={type} autoFocus={autoFocus} className="form-control input" placeholder={name} onChange = {change}/>
        </div>
    )
})