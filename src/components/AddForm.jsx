import React, { Component } from 'react'

class AddForm extends Component {

    /*
    props will look like this
    
        this.props = {
            btnSubmit: Function
        }

    */

    render() {

        const {btnSubmit} = this.props

        return (
            <div>
                <h1>Add an item</h1>
                <form onSubmit={btnSubmit}>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                            <input name="title" className="input" type="text" placeholder="Text input" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Price</label>
                            <div className="control has-icons-left has-icons-right">
                            <input
                            name="price"
                            className="input is-success"
                            type="text"
                            placeholder="Enter Price"
                            />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Image</label>
                            <div className="control has-icons-left has-icons-right">
                            <input
                            name="image"
                            className="input is-success"
                            type="text"
                            placeholder="Eenter image"
                            />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                            <button className="button is-link">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}

export default AddForm;
