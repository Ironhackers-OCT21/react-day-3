import {useState} from 'react'

function ItemDetail(props) {


    //Props will look like this
    /*

    props = {
        book: Object,
        btnClick: Function
    }

    */

    const {book, btnClick} = props
    const [qty, setQty] = useState(0)

    function handleQty(event) {
        // console.log(event.target.value)
        // Updating the state `qty` with the value in the input
        setQty(event.target.value)
    }

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
                    <input value={qty} onChange={handleQty} className="input" type="number" />
                    <button onClick={() => {btnClick(book, qty)}} className="button is-link">Add</button>
                </div>
                </div>
            </div>
            </div>
    )
}

export default ItemDetail
