import React from "react";


// function Box({backgroundColor, title, subTitle, info}){
  function Box(props){

    // const {backgroundColor, title, subTitle, info} = props;

    const styles ={
        box:{
            backgroundColor:props.bgColor,
            border: "solid black 2px",
            width: "20%",
            height: "300px",
            display:"inline-block",
            verticleAlign: "top",
            position:"relative",
            padding: "10px"
        },
        info:{
            overflow: "auto",
            height:"70px",
            bottom:"39px",
            postion:"absolute"
      }
}
    return(

      <div style ={styles.box}>
          <h2>{props.title}</h2>
          <h4>{props.subTitle}</h4>
          <div style ={styles.info}>
              <p>{props.info}</p>
          </div>
      </div>

      )
}


export default Box;
