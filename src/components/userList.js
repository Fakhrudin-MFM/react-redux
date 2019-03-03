import React,{ Component } from 'react';
import {connect }  from 'react-redux';
import { selectUser } from '../actions';
class UserList extends Component{

    renderList(){
        return this.props.users.map((item) =>{
            return(
                <div className="item" key={item.name}>
                <div className="right floated content">
                <button className="ui button primary" onClick={ () => this.props.selectUser(item) }>
                    Select
                </button>
                </div> 
                <div className="content" >{item.name}</div>
                </div>
            )
        })
    }

    render(){
        console.log(this.props)    
        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return { users : state.users };
}

export default connect(mapStateToProps,{ selectUser })(UserList);