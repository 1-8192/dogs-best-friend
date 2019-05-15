import { combineReducers } from 'redux'
import dogReducer from './dogReducer'

const rootReducer =  combineReducers({
  dogs: dogReducer
})

export default rootReducer
