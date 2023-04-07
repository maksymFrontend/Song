import { actionPromise } from "../../store"
import { gql } from "../../../helpers"
import { actisetToken } from "../../auth"
import { history } from '../../../helpers'

export const actionFullLogin = (login, password) => async dispatch => {

    const token = await dispatch(actionPromise('fullLogin', gql(
		`query login($login:String!,$password:String!){
			login(login:$login,password:$password)
		}`, 
		{login, password}
	)))
    
    if(token){ 

		await dispatch(actisetToken(token))
		history.push('/account')
	}

    else{

      	alert('Wrong password !')

    }
  
}  