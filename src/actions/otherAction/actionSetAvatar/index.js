import { actionUploadFile } from "../actionUploadFile"
import { actionСhangeInformationUser } from "../actionСhangeInformationUser"

export const actionSetAvatar = file =>
    async (dispatch, getState) =>{
        
        const idUser = getState().auth.sub.id

        let id = await dispatch(actionUploadFile(file[0], 'photo', '/upload'))

        await dispatch(actionСhangeInformationUser({avatar: {_id: id._id}}))

    }