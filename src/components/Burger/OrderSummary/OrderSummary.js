import React from 'react'
import Auxil from '../../../hoc/Auxil'
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
            <p>Continue to Checkout?</p>
        </Auxil>
    )
}

export default orderSummary