import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import App from './routes/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';


const initialState = {
  'user': '',
  'result': [],
  'query': '',
};


const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
  );
