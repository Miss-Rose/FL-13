import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import courseReducer from "./redux/reducers/courseReducer";
import searchReducer from "./redux/reducers/searchReducer";

const store = createStore(
    combineReducers({
        courseReducer,
        searchReducer
    })
);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

