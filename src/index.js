import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import {mainReducer, initialState} from './Reducer';
import {Provider, connect} from 'react-redux';


const store = createStore(mainReducer, initialState);


const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
