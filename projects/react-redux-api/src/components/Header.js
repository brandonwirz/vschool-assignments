import React from "react";
import { Link } from "react-router-dom";

const styles = {
        textAlign: "center",
        color: "white",
        paddingTop:"3px",
        height:"150px",
        fontFamily: "arial",
        background: "linear-gradient(to bottom, #4ca1af, #c4e0e5)" /* Chrome 10-25, Safari 5.1-6 */
      }

// const darkStarLink ={
//         fontSize: "16px",
//         textDecoration: "none",
//         padding:"-20px",
//         color:"#070839",
//       }
// const header ={
//         textDecoration: "none",
//         paddingBottom:"10px",
//         height:"10px"
//       }

      // const nav = {
      //   marginTop:"80px"
      // }


  export default function(props) {
      return (
          <div style={styles}>
            {/* https://darksky.net/poweredby/ */}
              <h1>Your Weather</h1>
              <a className="darkStarLink" href="https://darksky.net/poweredby/" target="_blank"><div>Powered by Darksky</div></a>
              <Link to="/">Home</Link>
              <Link to="/SaltLake">SaltLake</Link>
              <Link to="/cities">Cities</Link>
          </div>
      )
  }
