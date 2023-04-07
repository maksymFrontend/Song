import {Provider, connect} from 'react-redux'
import { actionСhangeInformationUser } from '../../../actions/otherAction/actionСhangeInformationUser'
import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import { backendURL } from '../../../helpers/index'
import { TablePersonalInformation } from '../../../components/TablePersonalInformation'
import { MyTable } from '../../../components/MyTable'
import { Greeting } from '../../../components/Greeting'
import { MainAvatar } from '../../../components/MainAvatar'

const img = 'https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'

const PageUser = memo(({informationUser = [], onClick}) =>{

    const [changeAvatar, setChangeAvatar] = useState(false)


    const {_id, login, nick, avatar} = informationUser
    informationUser.password         = '*********'
    const userName                   = (nick || login)
    const avatarUrl                  = (avatar?.url && (backendURL + "/" + avatar?.url) || img)


    return(
      <>

        <MainAvatar changeAvatar={changeAvatar} setChangeAvatar={setChangeAvatar} url={avatarUrl} />

        <Greeting name={userName} />

        <MyTable name='Personal information'>

          {Object.entries(informationUser).map((data) => <TablePersonalInformation 
                                                                                    key={data} 
                                                                                    data={data} 
                                                                                    onClick={onClick}
                                                                                    />)}
        
        </MyTable>
        
      </>
      
    )
  
})


export const CPageUser = connect(state => (
                                            {
                                              informationUser:state.promise?.informationUser?.payload
                                            }),
                                            {
                                              onClick: actionСhangeInformationUser
                                            })(PageUser)