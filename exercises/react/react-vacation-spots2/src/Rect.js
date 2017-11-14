import React from "react";

// function Box({backgroundColor, title, subTitle, info}){
  function Rect(props){
    const images = {
           background: `url(${props.imgURL}) no-repeat center`,
           backgroundSize: `cover`
       }
    // const {backgroundColor, title, subTitle, info} =props;
    const styles ={
        rect:{
            backgroundColor:props.backgroundColor,
            // border: "solid black 2px",
            width: "15%",
            height: "300px",
            display:"inline-block",
            verticleALign: "top",
            position:"relative",
            padding: "10px"
        },
        info:{
            overflow: "auto",
            height:"70px",
            bottom:"39px",
            position:"absolute"
      }

}
    return(

      <div style ={styles.rect}>
          <h2>{props.location}</h2>
          <h4>{props.subTitle}</h4>
          <h4>{props.price}</h4>
          <div>{props.imgUrl}</div>
          <div>{props.timeToGo}</div>
          <div style ={styles.info}>
              <p>{props.info}</p>
          </div>
          <div style={images}>

          </div>
      </div>

      )
}
// location = {box.location}
// // subTitle={box.subTitle}
// price ={box.price}
// timeToGo={box.timeToGo}
// backgroundColor={box.backgroundColor}
// info={box.info}

export default Rect;
