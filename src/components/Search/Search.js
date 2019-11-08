import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';


class Search extends Component {

    state = {
        search: '',
    }

    inputHandleChange = (event) => {
        console.log(event.target.value);
        

        this.setState({
            search: event.target.value
        })
    }

    gifSearch = () => {

        this.props.dispatch({type: 'GET_GIFS', payload: this.state.search})

    }

    render() {
        return (
            <div>
                <input 
                placeholder="search"
                value={this.state.search}
                onChange={(event) => this.inputHandleChange(event)}
                ></input>
                <button onClick={() => this.gifSearch()}>Search!</button>
                <button onClick={()=>this.props.history.push("/favorites")}>Favorites</button>
                <SearchResults/>
            </div>
        );
    }

}

export default connect()(Search);
