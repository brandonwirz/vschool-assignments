// import React from "react";
// import axios from "axios";
// import {connect} from "react-redux";
// import {getLocalForcast} from "../redux/localForcast"
//
// const styles ={
//         textAlign:"center",
//         margin: "0 auto"
// }
//
// // class WeatherOutputList extends Component{
// function WeatherOutputList(props){
//   // console.log(outputList)
//     const outputList = props.outputList.map((output, i) => {
//         return (
//                 <div style={styles}>
//                     <h1>{this.props.localForcast.latitude}</h1>
//                     <h1>{this.props.localForcast.longitude}</h1>
//                 </div>
//               )
//           });
// 
//   return (
//           <div style={styles}>
//              {outputList}
//           </div>
//     )
// }
//
//
//   function mapStateToProps(state){
//       return state
//   }
//
//   export default connect(mapStateToProps, state => state, {getLocalForcast})(WeatherOutputList);
