import React, { Component } from 'react'

class Total extends Component {

    /*
    props will look like this
    
        this.props = {
            checkoutData: Array of Objects
        }

    */

    render() {

        const {checkoutData} = this.props
         // We calculate the sum of all totals using the 'reduce' method
        const total = checkoutData.reduce((sum, elem) => {
            return sum + (elem.quantity*elem.price)
        }, 0)

        return (
            <div>
                <h1>Total</h1>
                {
                    checkoutData.map((elem) => {
                        const {title, quantity, price} = elem
                        return (
                            <div>
                                {title} x {quantity} = {quantity*price}
                            </div>    
                        )
                    })
                }
                <h1>Final Total is: ${Math.round(total)}</h1>
            </div>
        )
    }
}

export default Total
