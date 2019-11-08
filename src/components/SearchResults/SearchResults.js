import React, { Component } from 'react';
import {connect} from 'react-redux';


class SearchResults extends Component {


    render() {
        return (
            <div>
                {this.props.gifsReducer.map(gif => 
                    <img src={gif.images.fixed_height.url}/>
                )}
                <pre>{JSON.stringify(this.props.gifsReducer.data,null,2)}</pre>

            </div>
        );
    }

}

const mapState = redux => redux;

export default connect(mapState)(SearchResults);
