export function postDonation(url, donation) {

  return dispatch => {

   fetch(url, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        payment: donation
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.log(data.error.message)
        alert('Oops, something went wrong :-(')
      } else {
        console.log(data)
        let user = {
          user: data.user,
          total_payments: data.total_payments
        }
        let dog = data.dog
        dispatch({type: 'UPDATE_USER', user})
        dispatch({type: 'UPDATE_DOG', dog})
      }
    })
  }
}
