export function postDonation(url, donation) {
  return (dispatch) => {

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
        let user = data.user
        let dog = data.dog
        dispatch('UPDATE_USER', user)
        dispatch('UPDATE_DOG', dog)
      }
    })
  }
}
