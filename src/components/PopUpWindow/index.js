import { memo } from "react"



export const PopUpWindow = memo(({children, closeWindow}) =>{

    const onCloseWindow = () => closeWindow(false)

    return(
        <div className='popUpWindow'>
        
            {children}
            
            <button className='popUpWindowClose' onClick={onCloseWindow}>
                Close
            </button>
            
        </div>
    )
})