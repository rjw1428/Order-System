import React, { Component } from 'react'
import Auxil from '../../../hoc/Auxil'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
    render() {
        const summary = Object.keys(this.props.ingredients)
        .map(ikey => {
            return <li key={ikey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {ikey}</span>: {this.props.ingredients[ikey]}
            </li>
        })

    return (
        <Auxil>
            <h3>Your Order</h3>
            <p>The following will be added to the burger:</p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price: $ {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.onCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.onCheckout}>CONTIUE</Button>
        </Auxil>
    )
    }

}

export default OrderSummary