import React, { Component } from 'react';
import './App.css';

function City(props) {
  return (
  <div className='city-container'>
    <div className='header'>Zip Search</div>
    <div className='content'>
      <ul>

        <li>City Name : {props.City}</li>
        <li>Country : {props.Country}</li>
        <li>State : {props.State}</li>

      </ul>
    </div>
  </div>
  );
}

function ZipSearchField(props) {
  return (
  <div class='zip-search'>
    <span>City </span>
    <input type='text' onChange={props.changeHandler}/>
  </div>
  );
}


class App extends Component {

  state={
    zipCode: '',
    cities: []
  }

  zipChanged = (event) => {
    console.log(event.target.value)
    //update state this console log needs to be in front before setstate
    //setstate will update asyncronously, so if you don't have it before it will be one behind
    this.setState({zipCode: event.target.value})

    // now we want to fetch the data for zipcode that user has typed
    fetch('http://ctp-zip-api.herokuapp.com/zip/'+event.target.value)
    .then((res) => res.json())
    .then((data) => this.setState({cities:data}))
    //res is  response, so this response is going to be json data
    //we've made the call, now we have to use that data
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <ZipSearchField zipCode={this.state.zipCode} changeHandler={this.zipChanged}/>
        {/* grabs the current state zipCode is in */}

        <div class='zip-search'>Current Zip is { this.state.zipCode }</div>

        <div>

          {
          this.state.cities.map((city) => <City City = {city.City} Country = {city.Country} State={city.State} />) 
          }          
        </div>

      </div>
    );
  }
}

export default App;