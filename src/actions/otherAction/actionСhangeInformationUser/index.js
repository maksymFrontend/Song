import { actionInformationUser } from "../actionInformationUser"
import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionСhangeInformationUser = (dataUser) => 
	async (dispatch, getState)=> {
		
		let [name, data] = Object.entries(dataUser)[0]


		if(typeof data === 'object'){

			let [name, newData] = Object.entries(data)[0]
			data = `{${name}: "${newData}"}`

		}else{
			data = JSON.stringify(data)
		}
		
		const _id = getState().auth.sub.id

		await dispatch(actionPromise('сhangeInformationUser', gql(
			`mutation informationChangeUser{
				UserUpsert(user: {_id: "${_id}", ${name}: ${data}}){
					_id, login, nick
				}
			}`
		)))

		await dispatch(actionInformationUser(_id))

	}