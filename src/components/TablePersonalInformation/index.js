import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import { CLoadAvatar } from "../Dropzone"
import { CChangePassword } from "../ChangePassword"

export const TablePersonalInformation = memo(({data={}, onClick}) =>{

  let [name, value]                 = data
  const [changeData, setChangeData] = useState(false)
  const [dataInfo, setData]         = useState(value)
  const showBlock                   = ((name !== '_id') && (name !== 'avatar'))
  const onChangeInput               = (e) => setData(e.target.value.trim())

  const changeDataUser = ()=>{

    if(!changeData){

      setChangeData(true)

    }else{
      if(dataInfo.length){
        onClick({[name]:dataInfo})
        setChangeData(false)
      }else{
        alert('Empty field')
      }

    }

  }

  
  
  return(

      <>
        {showBlock && 
          <div className='tableTrStyleTypeOne'>

            <div>{name}:</div>

            <div>

              <input 
                    disabled={!changeData}
                    type='text'
                    value={dataInfo}
                    className="form-control input borderInput"
                    placeholder={name}
                    onChange={onChangeInput} 
                />

            </div>

            <div onClick={changeDataUser}>

              {!changeData ? 'Change' : <button>Save</button>}

            </div>

            { name === 'password' && (!changeData || <CChangePassword closeWindow={setChangeData}/>)}

          </div>
        }
      </>
        
        
  )
  
})