import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CardElement, injectStripe } from 'react-stripe-elements'
import StripeCheckout from 'react-stripe-checkout'

//Actions
import { postDonation } from '../redux/donationActions'

class Donation extends Component {
    state = {
      amount: "",
      note: "",
      isMessageHidden: true
    }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAmountSubmit = async event => {
    event.preventDefault()

    //post charge to my backend
    let url = "http://localhost:3005/api/v1/payments"
    let donation = {
      amount: this.state.amount,
      note: this.state.note,
      user_id: this.props.user.id,
      dog_id: this.props.location.state.dog.id
    }
    this.props.postDonation(url, donation)

    //post charge to stripe
    let url2 = "http://localhost:3005/api/v1/charges"
    let chargeToken = await this.props.stripe.createToken({name: "Name"})
    let charge = {
      amount: this.state.amount * 100,
      currency: 'usd',
      description: this.state.note,
      token: chargeToken.token.id
    }
    let response = await fetch(url2, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        charge: charge
      })
    })

    //clear form state
    this.setState({
      amount: "",
      note: "",
      cardElement: "",
      isMessageHidden: !this.state.isMessageHidden
    })
  }

  render() {
    return (
      <div>
        {this.state.isMessageHidden ? null :
          <div className="hero is-light">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title logo-font">Thank you for helping {this.props.location.state.dog.name}!</h1>
                <Link className="button is-info is-outlined" to="/dogs">back to dogs</Link>
              </div>
            </div>
          </div>}
        {this.props.user ?
        <div className="donation-form">
          <form onSubmit={this.handleAmountSubmit}>
            <label htmlFor="amount">Donation Amount:</label>
            <input className="input is-info" onChange={this.handleChange} name="amount" type="number" min="0.01" step="0.01" placeholder="$0.00" value={this.state.amount} /><br/>
            <label htmlFor="note">Include optional note:</label>
            <textarea className="input is-info" onChange={this.handleChange} name="note" rows="10" cols="40" value={this.state.note} /><br/>
            <p>Please enter credit card info for payment:</p>
            <div className="card has-background-white-ter">
              <CardElement />
            </div><br/>
          <div className="has-text-centered">
            <input className="input is-success" className="button is-success" type="submit" value="Donate" />
          </div>
          </form>
        </div> : <h1>Please log in to make a donation</h1>}
        <h3 className="has-text-centered">Payments secured and powered by <a href="https://stripe.com/">Stripe</a></h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postDonation: (url, donation) => dispatch(postDonation(url, donation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(Donation))
