import React from 'react';
import ReactDOM from 'react-dom/client';
//import { ReduxRenderer } from './redux-manager';
import { Provider } from 'react-redux'
import { store } from './store'
import { Game } from './game';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<Game />
	</Provider>,
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<ReduxRenderer store={store}>
// 		<Game />
// 	</ReduxRenderer>,
// );
