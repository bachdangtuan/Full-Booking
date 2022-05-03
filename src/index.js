import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { BrowserRouter } from 'react-router-dom'
//Flowbite
import 'flowbite';
// import CSS Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import CSS AntDegsign
import 'antd/dist/antd.css';

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



















