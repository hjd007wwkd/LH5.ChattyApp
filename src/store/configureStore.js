import {createStore, combineReducers} from 'redux';
import messagesReducer from '../reducers/messages';
import currentUserReducer from '../reducers/currentUser';
import userListReducer from '../reducers/userList';

//the store contain messages which are all the incoming, outcoming, notifications 
//currentUser contain a object that contain the user
//userList contain all the online username
// last line of window._REDUX_... is to use REDUX dev tool in chrome
export default () => {
    const store = createStore(
        combineReducers(
            {
                messages: messagesReducer,
                currentUser: currentUserReducer,
                userList: userListReducer
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};