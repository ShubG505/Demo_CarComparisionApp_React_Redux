import * as types from '../constants/types'

const INITIAL_STATE = {
  cars: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_CARS:
      return {
        ...state, cars: action.payload.map(car =>
          ({...car, compare: false})
        )
      };
    case types.COMPARE_CAR:
      return {
        ...state, cars: state.cars.map(car =>
          car.id === action.car.id ?
            ({...car, compare: !car.compare}) :
            car
        )
      };
    default:
      return state
  }
}
