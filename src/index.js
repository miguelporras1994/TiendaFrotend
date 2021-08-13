import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import App from './routes/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';


const initialState = {
  'user': '',
  'result': [
    {
    "_id" : "60d3f3992a4a50020d43fde6",
    "title":"Pantalon yoga",
    "description" : "Pantalon yoga  direfentes tallas",
    "price": 600000,
    "ulrpicture": "https://http2.mlstatic.com/D_NQ_NP_791012-MCO45597318862_042021-O.webp"
  },
  {
    "_id": "60e3e6487de99d00eced01f7",
    "title": "Zapato adidas Grand Court Base Hombre",
    "description": "Tenis deportivos con clásico look de los 70  Rinde homenaje al estilo retro del deporte blanco. Estos tenis de cuero sintético suave se inspiran en los diseños deportivos de la década de los 70. Lucen las 3 Rayas en contraste en el lateral exterior y las 3 Rayas cosidas en el lateral interior. Su amortiguación ultrasuave le imprime comodidad a que cada uno de tus pasos.",
    "price": 231000,
    "ulrpicture": "https://http2.mlstatic.com/D_NQ_NP_673222-MCO40580006324_012020-O.webp"
}],
  'query': '',
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
  );
