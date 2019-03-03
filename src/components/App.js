import React from 'react';
import UserList from './userList';
import UserDetail from './userDetail';
const App = () =>{
    return(
        
    <div className="ui container middle aligned grid">
      
        <div className="ui row ">
        <div className="column eight wide">
        
        <UserList />
        </div>
        <div className="column eight wide">
        <UserDetail />
        </div>
        </div>
    </div>
    );
}

export default App;