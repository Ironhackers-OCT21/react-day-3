
import React, { Component } from 'react'

class Search extends Component {

    /*
    props will look like this
    
        this.props = {
            btnSearch: Function
        }

    */
    render() {
        return (
            <div>
                <input onChange={this.props.btnSearch} type="text" placeholder="Search book"/>
            </div>
        )
    }
}

export default Search
