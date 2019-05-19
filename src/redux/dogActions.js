
export function fetchDogs(url) {
  return dispatch => {

    fetch(url)
      .then(response => response.json())
      .then(dogs => dispatch({ type: 'ADD_DOGS', dogs }));
  };
}
