
export function dogsHasErrored(bool) {
  return {
    type: 'DOGS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function dogsIsFetching(bool) {
  return {
    type: 'DOGS_IS_FETCHING',
    isFetching: bool
  }
}

export function dogIsFetched(bool) {
  return {
    type: 'DOG_IS_FETCHED',
    isFetching: bool
  }
}

export function fetchDogs(url) {
  return (dispatch) => {
    dispatch(dogsIsFetching(true));

    fetch(url)
      .then(response => response.json())
      .then(dogs => dispatch({ type: 'ADD_DOGS', dogs }));
  };
}
