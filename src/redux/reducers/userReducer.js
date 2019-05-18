import { registeringUser, registerOrLoginUser, logOut } from '../userActions'
import { postDonation } from '../donationActions'

const initialState = {
  currentUser: {},
}

const userReducer = (state = initialState, action) => {
  switch(action.type){

    case 'LOG_IN_USER':

      return {...state, currentUser: action.data}

    case 'LOG_OUT_USER':

      return {...state, currentUser: {}}

    case 'UPDATE_USER':

      return {...state, currentUser: {...state.currentUser, user: { ...state.currentUser.user, ...action.user}}}

    default:

      return state
  }
}

export default userReducer
