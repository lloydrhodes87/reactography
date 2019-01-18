
import React, { Component } from 'react';

class Search extends Component {
    state = {
        newLocation: ''
    }
    
    render() {
        console.log(this.state)
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input value={this.state.newLocation} className="input" placeholder="city, country-code"type="text" onChange={this.handleChange}></input>
                <button className="button" type="submit">Search</button>
            </form>
        );
    }
    handleChange = (event) => {
        this.setState({
            newLocation: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateSearch(this.state.newLocation)
        this.setState({
            newLocation: ''
        })
    }
    
}

export default Search;
