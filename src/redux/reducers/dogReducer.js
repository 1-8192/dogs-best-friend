import { fetchDogs, dogsIsFetching } from '../dogActions'

const initialState = {
  dogs_array: [],
  is_fetching: false
}

const dogReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_DOGS':

      return {...state, dogs_array: action.dogs}

    case 'DOGS_IS_FETCHING':

      return {...state, is_fetching: action.isFetching}

    default:

      return state
  }
}

export default dogReducer
