import './App.css';
import ItemDetail from './components/ItemDetail';
import booksJson from './books.json'
import Total from './components/Total'
import AddForm from './components/AddForm';
import Search from './components/Search';

import React, { Component } from 'react'

class App extends Component {

  state = {
    books: booksJson, // A state that keeps track of our original books
    booksCopy: booksJson, // A state that keeps track of our books that we show to the user with/wo filter
    checkoutData: [], // A state to stor information about the checkout books cart
    showForm: false,  // A state to decide whether to show the AddFrom or not

  }

  // This function is used to handle click event on the `Add` button
  // We pass this as a prop to <ItemDetail> and invoke it when the button is clicked
  handleClick = (book, quantity) => {
    console.log('Click works')
    // Create our checkout book object with quantity
    let checkoutBook = {
      title: book.title, 
      quantity: quantity,
      price: book.price
    }

    //updating the state
    this.setState({
      checkoutData: [checkoutBook, ...this.state.checkoutData],
    })
  }

  // This function is used to handle flag to show/hide the AddForm
  handleToggle = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

   // This function is used to handle the AddForm 'submit' event
  // we pass this function as a props to the <AddForm> component below
  handleSubmit = (event) => {

    // Prevent the default behaviour of <form>
    // Remeber that they make a GET request with query by default
    event.preventDefault()

    // Here we create the object of the new book we need to add in th array
    // even.target              -> gives the <form>
    // event.target.title       -> gives the <input name='title'>
    // event.target.title.value -> gives the value of that input
    let newBook = {
      title: event.target.title.value, 
      price: event.target.price.value,
      img: event.target.image.value
    }

    this.setState({
      books: [newBook, ...this.state.books],
      booksCopy: [newBook, ...this.state.books],
      showForm: false
    })

  } 

  handleSearch = (event) => {
    // even.target              -> gives the <<input>
    // event.target.value       -> gives the value of that input
    let word = event.target.value
    let filteredBooks = this.state.books.filter((book) => {
      return book.title.includes(word)
    })
    
    // IMPORTANT: Here we only update copy that we create and not the original books state
    this.setState({
      booksCopy: filteredBooks,
    })
  }

  render() {
    // -------------------------------------------------
    //           Destructuring our state
    const {booksCopy, showForm, checkoutData} = this.state
    // -------------------------------------------------

    return (
      <div class="columns">
      <div class="column">
        <Search btnSearch={this.handleSearch}/>
        {/* Conditional rendering the button and the form */}
        {
          showForm ? <AddForm btnSubmit={this.handleSubmit}/> : <button onClick={this.handleToggle}>Show Form</button>
        }
        {/* Showing th list of books below */}
        {
          booksCopy.map((elem, i) => {
            return <ItemDetail 
                      key={i} 
                      book={elem} 
                      btnClick={this.handleClick}
                    />
          })
        }
        
      </div>
      <div class="column">
          <Total checkoutData={checkoutData} />
      </div>
    </div>
    )
  }
}

export default App;
