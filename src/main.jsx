import React from 'react';
import { createRoot } from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ToastContainer
        position="top-right"
        rtl={false}
      />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
