/*支持ie9-11*/
/* import 'mutation-observer';
import 'core-js/es/map';
import 'core-js/es/set'; */
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store, persistor} from '@/store';
import '@/lang/index';
import '@/style/index.less';
import 'nprogress/nprogress.css';
import PKG from '../package.json';
import {PersistGate} from "redux-persist/integration/react";

console.log('当前版本：' + PKG.version);
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
