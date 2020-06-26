import { combineReducers } from 'redux';
import { layoutReducer, homeReducer, aboutReducer } from './reducers';

export default combineReducers({
  layout: layoutReducer,
  home: homeReducer,
  about: aboutReducer,
});
