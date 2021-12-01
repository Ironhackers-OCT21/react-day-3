import React from "react";

function AddForm(props) {

    /*
    props will look like this
    
        props = {
            btnSubmit: Function
        }

    */

  const {btnSubmit} = props

 return (
  <div>
   <h1>Add an item</h1>
   <form onSubmit={btnSubmit}>
        <div class="field">
            <label class="label">Title</label>
            <div class="control">
            <input name="title" class="input" type="text" placeholder="Text input" />
            </div>
        </div>

        <div class="field">
            <label class="label">Price</label>
            <div class="control has-icons-left has-icons-right">
            <input
            name="price"
            class="input is-success"
            type="text"
            placeholder="Enter Price"
            />
            </div>
        </div>
        <div class="field">
            <label class="label">Image</label>
            <div class="control has-icons-left has-icons-right">
            <input
            name="image"
            class="input is-success"
            type="text"
            placeholder="Eenter image"
            />
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
            <button class="button is-link">Submit</button>
            </div>
        </div>
    </form>
   </div>
 );
}

export default AddForm;
