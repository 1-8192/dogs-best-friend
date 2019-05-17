
const initialState = {
  dogs_array: []
}

const dogReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_DOGS':

      return {...state, dogs_array: action.dogs}

    case 'UPDATE_DOGS':

      return state.dogs_array.map(dog => {
        if (dog.id === action.dog.id) {
          return action.dog
        } else {
          return dog
        }
      })

    default:

      return state
  }
}

export default dogReducer
