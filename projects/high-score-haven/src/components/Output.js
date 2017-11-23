import React, {Component} from "react";

function Output(props) {
    return(
           <tr>
              <td>{props.name}</td>
              <td>{props.game}</td>
              <td>{props.date}</td>
              <td>{props.score}</td>
              <td>{props.trashTalk}</td>
           </tr>
    )
}

export default Output;
