import { originalFetch } from "./originalFetch"

export const getGQL = url =>
    (query, variables, anon = false) => originalFetch(url, {
		
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...((localStorage.authToken && !anon) ? {"Authorization": "Bearer " + localStorage.authToken} : {})
        },
        body: JSON.stringify({query, variables})

    }).then(res => res.json())
      .then(data => {

        if (data.data){

          return Object.values(data.data)[0]

        } 
        else throw new Error(JSON.stringify(data.errors))

      })
