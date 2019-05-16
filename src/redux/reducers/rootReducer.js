import { combineReducers } from 'redux'
import dogReducer from './dogReducer'
import userReducer from './userReducer'

const rootReducer =  combineReducers({
  dogs: dogReducer,
  user: userReducer
})

export default rootReducer
