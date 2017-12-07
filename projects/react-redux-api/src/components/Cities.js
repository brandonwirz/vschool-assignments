import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
// import Main from "./weather/Main";
import {getCityForcast} from "../redux/cityForcast";
import WeatherOutput from "./WeatherOutput";

//<h1>Cities Page</h1>
// import action creators
// import {getLocalForcast} from "../../redux/localForcast";
// import WeatherOutput from "./WeatherOutput";

class Cities extends Component{
    constructor(props){
        super(props);
          this.state = {
              location: "",
              latitude: "",
              longitude:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}



handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      // [e.target.longitude]: e.target.value

    });
}

handleSubmit(e){
    e.preventDefault();//because page refreshes
    this.props.getCityForcast(this.state.latitude,this.state.longitude );
    // this.props.addDescription(this.state);
    // this.props.addImage(this.state);
    this.setState({
              location: "",
              latitude: "",
              longitude: ""
    });
}

render(){
    const styles = {
            position:"absolute",
            top:"100px",
            left:"50px",
            right:"50px",
            textAlign: "center",
            padding:"10px",
            marginTop:"90px"
      }
      const tempColor={
          color: "purple"
      }

        return(
          <div>
            <form style ={styles} onSubmit={this.handleSubmit}>

                  <label form="latitude">Latitude</label>
                  <input name ="latitude"
                  type="text"
                  id="latitude"
                  onChange={this.handleChange}
                  // value={this.state.latitude}
                  placeholder=""/>
                  &nbsp;

                  <label form="Longitude">Longitude</label>
                  <input name="longitude"
                  type="text"
                  id="longitude"
                  onChange={this.handleChange}
                  // value={this.state.longitude}
                  placeholder=""/>
                  &nbsp;

                <button>Get Weather</button>
            </form>

              {this.props.cityForcast.currently.apparentTemperature ?

                    <div className="centerInfo">
                        {/* <Main /> */}
                        <h2>Temperature: <span style={tempColor}>{this.props.cityForcast.currently.apparentTemperature}&nbsp;degrees</span></h2>
                        <h2>Humidity: <span style={tempColor}>{this.props.cityForcast.currently.humidity}%</span></h2>
                        <h3>Daily Summary: <span style={tempColor}>{this.props.cityForcast.currently.summary}</span></h3>
                        <h3>Weekly Summary: <span style={tempColor}>{this.props.cityForcast.daily.summary}</span></h3>
                        <h3>Latitude: <span style={tempColor}>{this.props.cityForcast.latitude}</span></h3>
                        <h3>Longitude: <span style={tempColor}>{this.props.cityForcast.longitude}</span></h3>
                    </div>
                        : null}
          </div>
        )
    }
}

export default connect(state => state, {getCityForcast})(Cities)
