import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import App from './App';
import { store, persistor } from './App/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import "./index.css";
import { cartTotals } from "./Features/cart/cartSlice"



store.dispatch(cartTotals());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>  */}
        <BrowserRouter>
          <Routes>
              <Route path="*" element={ <App /> }>
              </Route>
          </Routes>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


