import React from 'react'
import Auxil from '../../../hoc/Auxil'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients)
        .map(ikey => {
            return <li key={ikey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {ikey}</span>: {props.ingredients[ikey]}
            </li>
        })

    return (
        <Auxil>
            <h3>Your Order</h3>
            <p>The following will be added to the burger:</p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price: $ {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.onCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.onCheckout}>CONTIUE</Button>
        </Auxil>
    )
}

export default orderSummary