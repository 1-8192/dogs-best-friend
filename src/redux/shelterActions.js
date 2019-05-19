
export function fetchShelters(url) {
  return dispatch => {

    fetch(url)
      .then(response => response.json())
      .then(shelters => dispatch({ type: 'ADD_SHELTERS', shelters }));
  };
}
