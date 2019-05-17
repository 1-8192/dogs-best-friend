import { combineReducers } from 'redux'
import dogReducer from './dogReducer'
import userReducer from './userReducer'
import shelterReducer from './shelterReducer'

const rootReducer =  combineReducers({
  dogs: dogReducer,
  user: userReducer,
  shelters: shelterReducer
})

export default rootReducer
