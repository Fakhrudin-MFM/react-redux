import { combineReducers } from 'redux';

const userReducer = () => {
    return [
        { name : "Ganesh",age : 25 },
        { name : "John", age : 26 },
        { name : "Vijay",age : 40 },
        { name : "Teena", age : 35 }
    ];
};

const selectedUserReducer = (selectedUser = null,action) => {
    if(action.type === "USER_SELECTED"){
        return action.payload;
    }
    return selectedUser;
}

export default combineReducers({
    users : userReducer,
    selecteduser : selectedUserReducer
});