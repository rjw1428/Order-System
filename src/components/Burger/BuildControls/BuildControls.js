import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={()=> props.addIngredient(ctrl.type)}
                removed={()=>props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        })}
        <button 
        className={classes.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.ordering}>
            Order Now
        </button>
    </div>
);

export default buildControls