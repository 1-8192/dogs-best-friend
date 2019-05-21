
export function fetchDogs(url) {
  return dispatch => {

    fetch(url)
      .then(response => response.json())
      .then(dogs => dispatch({ type: 'ADD_DOGS', dogs }));
  };
}

export function fetchShowDog(url) {
  console.log('1')
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(dogData => {
        console.log(dogData)
        dispatch({type: 'ADD_SHOW_DOG', dogData})
      })
  }
}
