import React, {useState, useMemo, useRef, useEffect, memo} from 'react'

export const MyInputWithValidation = memo(({name = '', onChange, autoFocus = false, type = 'text', value = '', icons='', style}) => {
    
    const [seeValue, setSeeValue] = useState(false)
    
    return(
        <div className="form-group">
            <label className="headerTypeTwo">
                {name}
                {
                    type==='password' &&
                    <div onClick={()=>setSeeValue(!seeValue)}>
                        {seeValue?'Do not show':'Show'}
                        <span className="material-icons-round">
                            {seeValue?'visibility_off':'visibility'}
                        </span>
                    </div>
                }
            </label>
            <div className="input-group mb-3 form-control inputGroup" style={{borderColor: value.length!=0&&value.length<4?'rgb(245 59 59)':'#777a7f'}}>
  
                <input autoFocus={autoFocus} type={seeValue?'text':type} value={value} className="form-control input" placeholder={name} onChange={e=>onChange(e.target.value.trim())} />
                <div className="input-group-prepend">
                    <span className="input-group-text material-icons-round" style={{marginRight: '0', color: '#83df72', display: value.length<4?'none':'block'}}>done</span> 
                    <span className="input-group-text material-icons-round" style={{marginRight: '0', color: 'rgb(241 97 97)', display: value.length!=0&&value.length<4?'block':'none'}}>close</span> 
                </div>
            </div>
            <span className='mb-3 messageErrorTypeOne' style={{display: value.length!=0 && value.length<4?'block':'none'}}>{name} is less than 4 characters</span>
        </div>
    )
})