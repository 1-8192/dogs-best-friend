import React, { Component } from 'react'

const PaymentCard = (props) => {
  return (
  <div className="card column is-one-third has-background-white-ter has-text-left">
    <p>amount: ${props.payment.amount}</p><br/>
    <p>attached message: "{props.payment.note}"</p><br/>
  </div>
)
}

export default PaymentCard
