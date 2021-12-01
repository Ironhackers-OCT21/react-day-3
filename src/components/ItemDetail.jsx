
import React, { Component } from 'react'

class ItemDetail extends Component {

    //Props will look like this
    /*

    this.props = {
        book: Object,
        btnClick: Function
    }

    */

    state = {
        qty: 0 
    }

    handleQty = (event) => {
        this.setState({
            qty: event.target.value
        })
    }


    render() {
        const {book, btnClick} = this.props
        return (
            <div className="card myCard">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={book.img} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{book.title}</p>
                        <p className="title is-5">Price ${book.price}</p>
                        <input value={this.state.qty} onChange={this.handleQty} className="input" type="number" />
                        <button onClick={() => {btnClick(book, this.state.qty)}} className="button is-link">Add</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetail
