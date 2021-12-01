import React from 'react'

function Search(props) {

    /*
    props will look like this
    
        props = {
            btnSearch: Function
        }

    */

    return (
        <div>
            <input onChange={props.btnSearch} type="text" placeholder="Search book"/>
        </div>
    )
}

export default Search
