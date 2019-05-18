import { fetchShelters } from '../shelterActions'

const initialState = {
  shelterArray: []
}

const shelterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SHELTERS':

      return {...state, shelterArray: action.shelters}

    default:

      return state
  }
}

export default shelterReducer
