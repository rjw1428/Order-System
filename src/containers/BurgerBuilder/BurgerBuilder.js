import React, { Component } from 'react'
import Auxil from '../../hoc/Auxil'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    lettuce: .25,
    cheese: .35,
    meat: 1.5,
    bacon: 0.75
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.0
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = +oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount
        const priceChange = +INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceChange

        this.setState({ totalPrice: +newPrice, ingredients: updatedIngredients })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount > 0) {
            const updatedCount = +oldCount - 1
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount
            const priceChange = +INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceChange
            
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        }
    }

    render() {
        const disableButton = {
            ...this.state.ingredients
        }
        Object.keys(disableButton).forEach(key=>{
            disableButton[key] = disableButton[key] <=0
        })
        return (
            <Auxil>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disableButton}
                    price={this.state.totalPrice}
                />
            </Auxil>
        );
    }
}

export default BurgerBuilder