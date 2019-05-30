
import React, { Component } from 'react'

class Search extends Component {
    state={
        searchTerm: ""
    }

    handleSearchLocally = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.handleSearch(event)
    }

    render(){
        return(
            <input onChange={this.handleSearchLocally} type="text" name="searchTerm" placeholder="search by name..." value={this.state.searchTerm} />
        )
    }
}

export default Search