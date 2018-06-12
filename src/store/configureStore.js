import {createStore, combineReducers} from 'redux';
import messagesReducer from '../reducers/messages';
import currentUserReducer from '../reducers/currentUser';
import userListReducer from '../reducers/userList';

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
    )
    return store;
}