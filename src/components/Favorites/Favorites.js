import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Favorites.css'
class Favorites extends Component {

    componentDidMount() {
        this.props.dispatch({type:'GET_FAVS'})
    }
    render() {
        return (
            <>
            <button onClick={()=>this.props.history.push("/")}>Home</button>
            <div className="cardArea">
                {this.props.favoritesReducer.map(each=>
                    <div className="heatherCards">
                        {/* <pre>{JSON.stringify(each,null,2)}</pre> */}
                    <img src={each.url} alt={each.category_id} />
                    <p>{each.name}</p>
                    </div>
                )}
                <pre>{JSON.stringify(this.props,null,2)}</pre>
                
            </div>
            </>
        );
    }

}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Favorites);
