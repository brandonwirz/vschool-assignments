// import React, {Component} from "react";
// import axios from "axios";
// import {connect} from "react-redux";
// // import action creators
// // import {getLocalForcast} from "../../redux/localForcast";
// // import WeatherOutput from "./WeatherOutput";
//
// class WeatherList extends Component{
//     constructor(props){
//         super(props);
//           this.state = {
//               location: "",
//               currentTemp: "",
//               latitude: "",
//               longitude:""
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
// }
// componentDidMount(){//new york
//
// }
//
// handleChange(e) {
//     this.setState({
//       [e.target.location]: e.target.value,
//       // [e.target.longitude]: e.target.value
//
//     });
// }
//
// handleSubmit(e){
//     e.preventDefault();//because page refreshes
//     this.props.forcast(this.state);
//     // this.props.addDescription(this.state);
//     // this.props.addImage(this.state);
//     this.setState({
//               location: "",
//               currentTemp: "",
//               latitude: "",
//               longitude:""
//     });
// }
// render(){
//
//   const styles = {
//           position:"absolute",
//           top:"100px",
//           left:"50px",
//           right:"50px",
//           textAlign: "center",
//           padding:"10px",
//           marginTop:"90px"
//     }
//
//         return(
//             <form style ={styles} onSubmit={this.handleSubmit}>
// {/*
//                   <label for="latitude">Latitude</label>
//                   <input name ="latitude"
//                   type="text"
//                   id="latitude"
//                   onChange={this.handleChange}
//                   placeholder=""/>
//                   &nbsp;
//
//                   <label for="Longitude">Longitude</label>
//                   <input name="longitude"
//                   type="text"
//                   id="longitude"
//                   onChange={this.handleChange}
//                   placeholder=""/>
//
//                   <label for="Location">Location</label>
//                   <input name="Location"
//                   type="text"
//                   id="Location"
//                   onChange={this.handleChange}
//                   placeholder=""/>
//
//                 <button>Get Weather</button> */}
//             </form>
//         )
//   }
// }
// // export default WeatherList;
// // export default connect(null, {getLocalForcast})(WeatherList)
