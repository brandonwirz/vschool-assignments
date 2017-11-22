import React from "react";


 const Color = (props)=>{
      const styles= {
              width:"60px",
              height:"60px",
              backgroundColor: "#" + props.backgroundColor,
              display: "inline-block",
      }

        return(
          <div style={styles}>
              {props.backgroundColor}
          </div>
    );
}

export default Color;
