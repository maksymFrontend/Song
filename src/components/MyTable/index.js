import { memo } from "react"

export const MyTable = memo(({name, children})=>{

  return(
    <>
      <div className="headerTypeTwo">
        {name}:
      </div>
        
      <div className='inputGroup tableStyleTypeOne'>
        {children}
      </div>
    </>
  )

})