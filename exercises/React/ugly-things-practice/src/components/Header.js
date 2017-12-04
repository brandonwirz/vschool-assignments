import React from "react";

const styles = {
        textAlign: "center",
        color: "white",
        paddingTop:"3px",
        height:"150px",
        fontFamily: "arial",
        // background: "#4ca1af", /* fallback for old browsers */
        background: "linear-gradient(to bottom, #4ca1af, #c4e0e5)" /* Chrome 10-25, Safari 5.1-6 */
        // background: "linear-gradient(to right, #4ca1af, #c4e0e5)"
      }

export default function Header(props) {
          return (
              <header style ={styles}>
                 <h1>Ugly things</h1>
              </header>
        )
    }
