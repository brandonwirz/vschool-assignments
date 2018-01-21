import React from "react";
// import ReactDOM from 'react-dom';

import banner_footer from './images/banner_footer.jpg';

function Footer(){
  return(
      <div className="background-footer">
          <img src={banner_footer} className="banner-footer" alt="footer" />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>

  )
}

export default Footer;








//
//
//
// class Popup extends React.Component {
//   render() {
//     return (
//       <div className='popup'>
//         <div className='popup_inner'>
//           <h1>{this.props.text}</h1>
//         <button onClick={this.props.closePopup}>close me</button>
//         </div>
//       </div>
//     );
//   }
// }
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showPopup: false
//     };
//   }
//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }
//   render() {
//     return (
//       <div className='app'>
//         <h1>hihi</h1>
//         <button onClick={this.togglePopup.bind(this)}>show popup</button>
//         <button onClick={() => {alert('woooooooot?');}}>try me when popup is open</button>
//         <p>Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br /></p>
//         {this.state.showPopup ?
//           <Popup
//             text='Close Me'
//             closePopup={this.togglePopup.bind(this)}
//           />
//           : null
//         }
//       </div>
//     );
//   }
// };
//
//
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('content')
// );
