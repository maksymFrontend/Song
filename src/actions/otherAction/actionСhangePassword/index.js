import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionСhangePassword = (login, password, newPassword) => 
    async(dispatch) => {

        const token            = localStorage.authToken
        localStorage.authToken = ""

        let answer = await dispatch(actionPromise('сhangePassword', gql(
                `mutation changePassword($login: String!, $password: String!, $newPassword: String!){
                    changePassword(login: $login, password: $password, newPassword: $newPassword){
                        _id login
                    }
                }`, 
                {login, password, newPassword}, true
            )))

        if(!answer)alert('Неверный пароль')
        
        localStorage.authToken = token

    }  