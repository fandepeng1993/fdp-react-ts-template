import {createStore,compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore, persistReducer, createTransform} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers';
import rootSagas from './sagas';
// declare var window: Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any };
const persistConfig = {
    keyPrefix: '',
    key: 'language',
    storage,
    blacklist: ["_persist"], // 黑名单
    whitelist: ["language"], // 白名单
};
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

// composeWithDevTools
const store: any = createStore(persistedReducer,/* preloadedState, */composeEnhancers(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);
sagaMiddleware.run(rootSagas);
export {store, persistor};