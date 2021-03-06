

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

      return {...state, currentUser: action.user}

    default:

      return state
  }
}

export default userReducer
