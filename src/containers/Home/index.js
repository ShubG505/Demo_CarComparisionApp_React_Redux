import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, CarList} from '../../components'
import * as carActions from '../../actions/car'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    // get all cars
    this.props.actions.getCars();
  }

  render() {
    const {cars, actions} = this.props;
    // get only selected cars for comparision
    const compareCars = cars.filter(car => car.compare);
// render title, cars list, comparision
    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Cars</h2>
          </div>
        </div>
        <div id="spanDiv" className="row">
        <span id="msgSpan" className="note-span">{compareCars.length} selected out of {cars.length}</span>
        <span className="note-span alert">Note: You can select upto 5 cars at a time for comparision</span>
        </div>
        <CarList cars={cars} compare={actions.compare}/>
        {compareCars.length >= 2 && compareCars.length <= 5 &&
          <Compare cars={compareCars}/>
        }
        
      </div>
    )
  }
}

export default connect(
  state => ({
    cars: state.car.cars
  }),
  dispatch => ({
    actions: bindActionCreators(carActions, dispatch)
  })
)(Home)
