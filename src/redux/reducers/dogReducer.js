import { fetchDogs, fetchShowDog } from '../dogActions'
import { postDonation } from '../donationActions'

const initialState = {
  dogs_array: [],
  show_dog: {
    dog: {},
    total_payments: ""
  }
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

    case 'ADD_SHOW_DOG':

      return {...state, show_dog: action.dogData}

    default:

      return state
  }
}

export default dogReducer
