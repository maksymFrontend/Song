import { getGQL } from "./getGQL"
import { createBrowserHistory } from 'history'
import { useMemo } from "react";

export const backendURL  = 'http://player.node.ed.asmer.org.ua'
export const gql         = getGQL(backendURL + '/graphql')

//export const API_KEY_YOUTUBE = "AIzaSyBNpDzpIe_FOFbVpzb2bOSJzcq7gYz401w";
const API_KEY_YOUTUBE    = 'AIzaSyBgWEQ_Fbc4NW36c_Re03wf9FSw_MH5P44'
export const URL_YOUTUBE = `https://www.googleapis.com/youtube/v3/search/?key=${API_KEY_YOUTUBE}`

export const history     = createBrowserHistory()

