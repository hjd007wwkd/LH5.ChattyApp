import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Main from './components/Main';
import './styles/styles.scss';

//create redux store
const store = configureStore();

//to use redux store in the components
const jsx = (
    <Provider store={store}>
        <Main />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));