import logo from './logo.svg';
import './App.css';
import ItemDetail from './components/ItemDetail';
import booksJson from './books.json'
import {useState} from 'react'
import Total from './components/Total'
import AddForm from './components/AddForm';
import Search from './components/Search';

function App() {
  // A state that keeps track of our original books
  const [books, setBooks] = useState(booksJson)
  // A state that keeps track of our books that we show to the user with/wo filter
  const [booksCopy, setBooksCopy] = useState(booksJson)
  // A state to stor information about the checkout books cart
  const [checkoutData, setCheckout] = useState([])
   // A state to decide whether to show the AddFrom or not
  const [showForm, setShowForm] = useState(false)
  
  // This function is used to handle click event on the `Add` button
  // We pass this as a prop to <ItemDetail> and invoke it when the button is clicked
  function handleClick(book, quantity){
    console.log('Click works')
    // Create our checkout book object with quantity
    let checkoutBook = {
      title: book.title, 
      quantity: quantity,
      price: book.price
    }

    //updating the state
    setCheckout([checkoutBook, ...checkoutData])
  }

  // This function is used to handle flag to show/hide the AddForm
  function handleToggle(){
    setShowForm(!showForm)
  }
  
  // This function is used to handle the AddForm 'submit' event
  // we pass this function as a props to the <AddForm> component below
  function handleSubmit(event){

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

    setBooks([newBook, ...books])
    setBooksCopy([newBook, ...books])
    //hide the form once we have added the item
    setShowForm(false)
  }  


  function handleSearch(event){
    // even.target              -> gives the <<input>
    // event.target.value       -> gives the value of that input
    let word = event.target.value
    let filteredBooks = books.filter((book) => {
      return book.title.includes(word)
    })
    
    // IMPORTANT: Here we only update copy that we create and not the original books state
    setBooksCopy(filteredBooks)
  }

  return (
    <div class="columns">
      <div class="column">
        <Search btnSearch={handleSearch}/>
        {/* Conditional rendering the button and the form */}
        {
          showForm ? <AddForm btnSubmit={handleSubmit}/> : <button onClick={handleToggle}>Show Form</button>
        }
        {/* Showing th list of books below */}
        {
          booksCopy.map((elem, i) => {
            return <ItemDetail 
                      key={i} 
                      book={elem} 
                      btnClick={handleClick}
                    />
          })
        }
        
      </div>
      <div class="column">
          <Total checkoutData={checkoutData} />
      </div>
    </div>
  );
}

export default App;
