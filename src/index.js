import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Main from './views/Main'


ReactDOM.render(
  <BrowserRouter>
  <Main />
  </BrowserRouter>,
  

  document.getElementById('root')

);

