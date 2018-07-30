import React from 'react';
import {Redux} from 'redux';
import {Provider} from 'react-redux';
import App from './app'

const Root = ({store}) =>  (
   <Provider store={ store }>
    <App/>
  </Provider>
);

export default Root;
