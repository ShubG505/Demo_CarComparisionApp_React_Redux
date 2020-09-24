import React from 'react'
import {Car} from '..'
// renders car component for each item in carList
const CarList = ({cars, compare}) =>
  <div className="row mt-3">
      {cars.map(car =>
        <Car key={car.id} car={car} compare={compare} />
      )}
  </div>;

export default CarList
