export function promiseReducer(state={}, {type, name, status, payload, error}){

    if (type === 'PROMISE'){
  
		return {
			...state,
			[name]:{status, payload, error}
		}
  
    }
  
    return state
  
}