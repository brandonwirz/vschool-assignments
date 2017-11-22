import React, {Component} from "react";

function Output(props) {
    return (
      <div>
         <table>
           <tr>
             <th>Name</th>
             <th>Game</th>
             <th>Date</th>
             <th>Score</th>
          </tr>
           <tr>
              <td>{props.name}</td>
              <td>{props.game}</td>
              <td>{props.date}</td>
              <td>{props.score}</td>
              <td>{props.trashTalk}</td>
           </tr>
         </table>
      </div>)
}

export default Output;
