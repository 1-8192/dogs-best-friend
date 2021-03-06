
export function registerOrLoginUser(url, inputUser) {
  return dispatch => {

    fetch(url, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user: inputUser
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.log(data.error)
          alert('Oops, please try again')
        } else {
        localStorage.setItem('token', data.jwt)
        dispatch({ type: 'LOG_IN_USER', data})
        }
      })
    }
  }

  export function logOut() {
    localStorage.removeItem('token')
    return dispatch => {
      dispatch({ type: 'LOG_OUT_USER'})
    }
  }

  export function deleteUser(url) {
    return dispatch => {

      fetch(url, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
      })
      .then(response => response.json())
      .then( data => {
        if (data.error) {
          console.log(data.error)
          alert('Oops, something went wrong')
        } else {
            localStorage.removeItem('token')
            dispatch({type: 'LOG_OUT_USER'})
      }
    })
    }
  }

  export function editUser(url, userEdit) {
    return dispatch => {

      fetch(url, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          user: userEdit
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          console.log(data.message)
          alert('Oops, something went wrong')
        } else {
            let user = data
            dispatch({type: 'UPDATE_USER', user})
      }
    })
    }
  }

  export function persistAuthOnRefresh(url) {
    return dispatch => {
      if (localStorage.getItem('token')) {
        return fetch(url, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            console.log(data)
          } else {
            dispatch({type: 'LOG_IN_USER', data})
          }
        })
      }
    }
  }
