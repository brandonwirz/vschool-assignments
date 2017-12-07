import React, {Component} from "react";
// import WeatherOutput from "./weather/WeatherOutput"
// import Main from "./weather/Main";
import {getLocalForcast} from "../redux/localForcast"
import {connect} from "react-redux"

//Denver, Colorado
const tempColor={
    color: "purple"
}
class Home extends Component{

  componentDidMount(){//coordinates lat/long
      this.props.getLocalForcast("39.742043","-104.991531");
  }

  render(){
    return (
      <div className="centerInfo">
          {/* <Main /> */}
          <h2>Denver Temperature: <span style={tempColor}>{this.props.localForcast.currently.apparentTemperature}&nbsp;degrees</span></h2>
          <h2>Humidity: <span style={tempColor}>{this.props.localForcast.currently.humidity}%</span></h2>
          <h3>Currently: <span style={tempColor}>{this.props.localForcast.currently.summary}</span></h3>
          <h3>Daily Summary: <span style={tempColor}>{this.props.localForcast.daily.summary}</span></h3>
          <h3>Weekly Summary: <span style={tempColor}>{this.props.localForcast.currently.icon}</span></h3>
          <h3>Latitude: <span style={tempColor}>{this.props.localForcast.latitude}</span></h3>
          <h3>Longitude: <span style={tempColor}>{this.props.localForcast.longitude}</span></h3>

      </div>
    )
  }
}

export default connect(state => state, {getLocalForcast})(Home)
