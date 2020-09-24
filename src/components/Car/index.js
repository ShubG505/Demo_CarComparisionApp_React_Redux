import React from 'react'
import './styles.css'

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.carSelected = this.carSelected.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            showDetails: false,       // showDetails flag is used to show description of car, it is set true when user clicks on car's name
            disableChkbox: false,
            linkText: 'View Details'
        }
    }
  carSelected(car,compare){
    // get count of all the checked boxes
    let checkCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    // disable all unchecked boxes, if 5 cars were already selected
    if(checkCount === 5){
        let unchecked = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
        unchecked.forEach(ch =>{
            ch.disabled = true
        })
    }
    else{
        let allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
        allCheckBoxes.forEach(ch =>{
            ch.disabled = false
        })
    }
    compare(car);
  }

  toggleDetails(){
      // toggle about, hide buttons onClick
    this.setState({ 
        showDetails:!this.state.showDetails,
        linkText: (this.state.linkText === 'View Details') ? 'hide' : 'View Details'
     })
 
  }
    render() {
      const {car, compare} = this.props;
    return(
    <div key={car.id} className="col-sm-6 col-md-3">
        <div id="divparent" className={"car " + (car.compare ? "compare" : "")} >
            <div className="upperDiv">
                <img src={car.image} alt={car.name} />
                <div className="image_overlay"/>
                <input className="chkcar" type="checkbox" disabled={this.state.disableChkbox}  onClick={()=> this.carSelected(car, compare)} />
            </div>
            <div className="stats">
                <div className="stats-container">
                    <span className="car_price">{car.price}</span>
                    <span className="car_name">{car.name}</span> 
                    {this.state.showDetails ? 
                    <p>{car.description}                    
                    </p>
                    : []}
                    <div><a className="linkText" href="#" onClick={()=>this.toggleDetails() }>{this.state.linkText}</a></div>                                     
                    
                </div>
                
            </div>
        </div>
    </div>
)}
}
export default Car;
