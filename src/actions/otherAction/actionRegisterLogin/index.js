import { actionFullRegister } from "../actionFullRegister"
import { actionFullLogin } from "../actionFullLogin"


export const actionRegisterLogin = (login, password) => 
	async dispatch => { 

		if(await dispatch(actionFullRegister(login, password))){
	
			await dispatch(actionFullLogin(login, password))
	
		}else{

			alert('You probably already exist :)')

		}
	
	}