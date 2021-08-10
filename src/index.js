import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const initialState = {
  'user': '',
  'result': {
    _id : "60d3f3992a4a50020d43fde6",
    title:"Pantalon yoga",
    description : "Pantalon yoga  direfentes tallas",
    price: 600000,
    ulrpicture: "https://http2.mlstatic.com/D_NQ_NP_791012-MCO45597318862_042021-O.webp"
  },
  'query': '',
};

const store = createStore(reducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
  );
