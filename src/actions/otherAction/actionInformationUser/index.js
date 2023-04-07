import { actionPromise } from "../../store"
import { gql } from "../../../helpers"

export const actionInformationUser = (_id) => 
    actionPromise('informationUser', gql(
        `query user($id: String!){
            UserFindOne(query:$id){
                _id login nick avatar{_id url}
            }
        }`, 
        {
            id: JSON.stringify([{_id}])
        }
    ))