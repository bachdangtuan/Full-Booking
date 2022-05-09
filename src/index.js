import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { BrowserRouter } from 'react-router-dom'
import { DOMAIN } from './util/settings/config';

//Import đa ngôn ngữ

import './18in'

//Flowbite
import 'flowbite';
// import CSS Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Cấu hình signalR
import * as signalR from '@aspnet/signalr';

//import CSS AntDegsign
import 'antd/dist/antd.css';

// Code lắng nghe sự kiện
const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();
connection.start().then(() => {
  
  ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  
    document.getElementById('root')
  )
}).catch(error => {
  console.log(error);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



















