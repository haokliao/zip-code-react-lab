import React, { Component } from 'react';
import './App.css';


function City(props) {
  return (
  <div className='city-container'>
    <div className='header'>Header</div>
    <div className='content'>
      <ul>
        <li>City: {props.City.state}</li>
        <li>Country: {props.city.country}</li>
        <li>State: {props.city.City}</li>
      </ul>  
    </div>  
  </div>);
}

function ZipSearchField(props) {

  // const handleInputChange = (value) => {
  //   fetch(`http://ctp-zip-api.herokuapp.com/zip/${value}`)
  //   .then(response => response.json())
  //   .then(cities => props.saveCities(cities))
  // }


  return (
  <div className='zip-search'>
    <b>Zip Code: </b>
    <input onChange= {(event) => {console.log(event)}}/>
    {/* when you type this parameter event looks for a target of value???  */}
  </div>);
}


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      cities: []
    }
    this.saveCities.bind()
  }

  saveCities(cities){
    this.setState({cities})
    return;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>

        <ZipSearchField saveCities={() => this.saveCities}/>

        <div>
          <City city={this.state.cities[0]} />
        </div>

      </div>
    );
  }
}

export default App;
