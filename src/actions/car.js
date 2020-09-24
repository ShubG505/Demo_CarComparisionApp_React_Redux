import * as types from '../constants/types'

//fetch car details from json data
export const getCars = () =>
  dispatch =>
    fetch(`cars.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_CARS,
          payload: response.cars
        })
      })

export const compare = car => ({
    type: types.COMPARE_CAR,
    car
  })
