import { memo } from "react"



export const MyInput = memo(({name = '', onChange, autoFocus = false, type = 'text', value = '', header=true}) => {
    
    const change = (e) => onChange(e.target.value.trim())

    return(
        <div className="form-group">
            {header && 
                <label className="headerTypeTwo">
                    {name}
                </label> 
            }
            <div className="input-group mb-3 form-control inputGroup">
                <input 
                        autoFocus={autoFocus} 
                        type={type} 
                        value={value} 
                        className="form-control input" 
                        placeholder={name}  
                        onChange={change}
                /> 
            </div>
        </div>
    )
})