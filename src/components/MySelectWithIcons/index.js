import { memo } from "react"


export const MySelectWithIcons = memo(({name = '', onChange, icons='', options=[]}) => {
    return(
        <div>
            <span className="material-icons-round">
                {icons}
            </span>
            <select name="select" className="filterSelect" defaultValue={'DEFAULT'} onChange={(e) => onChange(e)}>

                <option value="DEFAULT" disabled>
                    {name}
                </option>

                {options.map(({name, value}) => <option key={name} value={value}>{name}</option>)}

            </select> 
        </div>
    )
})