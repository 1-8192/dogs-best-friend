import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CardElement, injectStripe } from 'react-stripe-elements'
import StripeCheckout from 'react-stripe-checkout'

//Container
import { CheckoutForm } from './CheckoutForm1'

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

  handleAmountSubmit = (event) => {
    event.preventDefault()
    // let url = "http://localhost:3005/api/v1/payments"
    // let donation = {
    //   amount: this.state.amount,
    //   note: this.state.note,
    //   user_id: this.props.user.id,
    //   dog_id: this.props.location.state.dog.id
    // }
    // this.props.postDonation(url, donation)
    this.setState({
      amount: "",
      note: "",
      isMessageHidden: !this.state.isMessageHidden,
      isModalHidden: !this.state.isModalHidden
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
        <form onSubmit={this.handleAmountSubmit}>
          <label htmlFor="amount">Donation Amount:</label>
          <input className="input is-success" onChange={this.handleChange} name="amount" type="number" min="0.01" step="0.01" placeholder="$0.00" value={this.state.amount} /><br/>
          <label htmlFor="note">Include optional note:</label>
          <textarea className="input is-success" onChange={this.handleChange} name="note" rows="10" cols="40" value={this.state.note} /><br/>
          <p>Payment info:</p>
          <div className="card column is-one-third has-background-white-ter">
            <CardElement />
            <StripeCheckout />
          </div>
          <input className="input is-success" className="button is-primary" type="submit" value="Donate" />
        </form> : <h1>Please log in to make a donation</h1>}
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
