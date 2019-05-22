import React, { Component } from 'react'
import { Elements, CardElement, injectStripe } from 'react-stripe-elements'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind.this
  }

  async submit(ev) {

  }

  render() {
    return (
      <div className="checkout">
        <p>Please enter payment info:</p>
        <CardElement />
        <button onClick={this.submit}>Complete Donation</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
