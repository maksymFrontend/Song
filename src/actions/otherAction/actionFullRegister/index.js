import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionFullRegister = (login, password) =>  
    actionPromise('fullRegister', gql(
		`mutation createUser($login: String!, $password: String!){
			createUser(login:$login,password:$password)
				{_id}
		}`, 
      {login, password}
    ))