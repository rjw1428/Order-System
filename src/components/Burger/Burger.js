import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {

    let ingredientsList = Object.keys(props.ingredients)
    .map(ikey=>{
        return [...Array(props.ingredients[ikey])].map((_,i) => {
            return <BurgerIngredient key={ikey+i} type={ikey}/>
        })
    })
    .reduce((aggVal, currentVal)=>{
        return aggVal.concat(currentVal)
    }, [])

    if (ingredientsList.length === 0) {
        ingredientsList=<p>Add some ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredientsList}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger