import { combineReducers } from 'redux'
import car from './carReducer'

const compareApp = combineReducers({
  car
});

export default compareApp