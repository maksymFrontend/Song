import {history} from '../../helpers'

export function authReducer(state, {type, token}){

    if(state === undefined){ 

        if(localStorage.authToken){

            token = localStorage.authToken
            type  = 'AUTH_LOGIN'

        }
        else{

            type = 'AUTH_LOGOUT'
            
        } 

    }

    if(type === 'AUTH_LOGIN'){

        state = jwtDecode(token)
        localStorage.authToken = token

    }

    if(type === 'AUTH_LOGOUT'){

        localStorage.authToken = ''
        state = {}

    }

    return state || {}

}



const jwtDecode = (token) => {
    try {
  
        return JSON.parse(atob(token.split(".")[1]))
  
    } catch(e) {
  
        console.log(e);
  
    }
}