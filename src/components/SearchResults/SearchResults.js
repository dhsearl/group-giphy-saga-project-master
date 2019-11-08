import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchResults extends Component {



    favoriteGif = (gifUrl) => {
        this.props.dispatch({type:"SET_FAVORITE_GIF",payload:gifUrl})
    }


    render() {
        return (
            <div>
                {this.props.gifsReducer.map((gif,i) =>
                    <div key={i}>
                        <img src={gif.images.fixed_height.url} /><br/>
                        <button onClick={() => this.favoriteGif(gif.images.fixed_height.url)}><i class="fas fa-bookmark"></i> Favorite</button>
                    </div>
                )}
                <pre>{JSON.stringify(this.props.gifsReducer.data, null, 2)}</pre>

            </div>
        );
    }

}

const mapState = redux => redux;

export default connect(mapState)(SearchResults);
