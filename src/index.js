import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//Need react-redux to talk to each other.  Need to import the Provider to do this.
import {Provider} from 'react-redux';

// need to create the store so that it can hold the state for our entire app.  It will be passed to all our reducers.  Created store will go to the provider. React doesn't need it; redux needs it
import { createStore } from 'redux';

//bring in reducers - they pass pieces of state into the store
import reducers from './reducers/index';

// need to pass reducers into the store
const theStore = createStore(reducers);


ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
  document.getElementById('root')
);
