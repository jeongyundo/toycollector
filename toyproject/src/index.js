import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Admin/App';
import Carouseldiv from './Homepage/Carousel'
import Columnsdiv from './Homepage/Columns'
import Header from './Homepage/Header'
import Menu from './Homepage/Menu'
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Carouseldiv />, document.getElementById('carousel'));
ReactDOM.render(<Columnsdiv />, document.getElementById('container'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
