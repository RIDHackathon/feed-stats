import { combineReducers, createStore } from 'redux';
import reducers from './reducers';

const combined = combineReducers(reducers);
// tslint:disable-next-line:no-string-literal
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore)
  : createStore;
const store = enhancer(combined);

export default store;
