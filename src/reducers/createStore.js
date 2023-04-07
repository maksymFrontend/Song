import { promiseReducer } from './promiseReducer'
import { playerReducer } from './playerReducer'
import { feedReducer } from './feedReducer'
import { authReducer } from './authReducer'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


export const store = createStore(combineReducers(
													{
														promise: promiseReducer, 
														feed:feedReducer,
														auth: authReducer, 
														player: playerReducer
													}
												), applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))