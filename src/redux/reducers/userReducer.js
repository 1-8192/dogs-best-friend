import { registeringUser, registerOrLoginUser, logOut } from '../userActions'

const initialState = {
  currentUser: {},
  isFetching: false,
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FETCHING_USER':

      return {...state, isFetching: action.bool}

    case 'LOG_IN_USER':

      return {...state, currentUser: action.data, isFetching: !state.isFetching}

    case 'LOG_OUT_USER':

      return {...state, currentUser: {}}

    default:

      return state
  }
}

export default userReducer
