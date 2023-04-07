import { originalFetch } from "../../../helpers/originalFetch"

export const uploadFile = (file, type, chapter) =>{

    const fd = new FormData
    fd.append(type, file)
  
    return originalFetch(chapter, {
		method: "POST",
		headers: localStorage.authToken ? {Authorization: 'Bearer ' + localStorage.authToken} : {},
		body: fd
    }).then(res => res.json())
      
}