import React from 'react';
import { connect } from 'react-redux';

const UserDetail = ({user}) => {

    if(!user){
        return <div>Select a User</div>
    }
    return(
        <div>
            <h2>Name :</h2>
            {user.name}
            <h3> Age :</h3>{user.age}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user : state.selecteduser }
}

export default connect(mapStateToProps)(UserDetail)