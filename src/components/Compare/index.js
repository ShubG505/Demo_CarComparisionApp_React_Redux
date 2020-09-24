import React from 'react'
import './styles.css'

const Compare = ({cars}) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th />
            {cars.map(car =>
              <th key={car.id}>
                {car.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
        <tr className="fuelType">
            <th scope="row">Engine Type</th>
            {cars.map(car =>
              <td key={car.id} className="text-center">{car.engineType}</td>
            )}
          </tr>
          <tr className="power">
            <th scope="row">Power</th>
            {cars.map(car =>
              <td key={car.id} className="text-center">{car.power}</td>
            )}
          </tr>
          <tr className="seatingCapacity">
            <th scope="row">Seating Capacity</th>
            {cars.map(car =>
              <td key={car.id} className="text-center">{car.seatingCapacity}</td>
            )}
          </tr>
          <tr className="bodyType">
            <th scope="row">Body Type</th>
            {cars.map(car =>
              <td key={car.id} className="text-center">{car.bodyStyle}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Price</th>
            {cars.map(car =>
              <td key={car.id} className="text-center">{car.price}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Turning Diameter</th>
            {cars.map(car =>
              <td key={car.id} className="text-center">{car.turningDiameter}</td>
            )}
          </tr>
          <tr className="colors">
            <th scope="row">Available Colors</th>
            {cars.map(car =>
              <td key={car.id}>
                {car.colors.map((color, index) =>
                  <span key={index} className={"bg-" + color} />
                )}
              </td>
            )}
          </tr>         
          <tr className="pros">
            <th scope="row">Pros</th>
            {cars.map(car =>
              <td key={car.id} className="text-center">{car.pros}</td>
            )}
          </tr>
          <tr className="cons">
            <th scope="row">Cons</th>
            {cars.map(car =>
              <td key={car.id} className="text-center">{car.cons}</td>
            )}
          </tr>
          <tr className="condition">
            <th scope="row">Condition</th>
            {cars.map(car =>
              <td key={car.id} className={car.condition === "Used" ? "bg-red" : "bg-green"}>
                {car.condition}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export default Compare
