import React from "react"

function Box(){
  const styles = {
      height: "100px",
      width: "100px",
      border: "5px solid blue",
      backgroundColor: this.state.bgColor,
      display: "inline-block"
  }
  return (
      <div style={styles} onClick={this.handleColorChange}></div>
  )



}
