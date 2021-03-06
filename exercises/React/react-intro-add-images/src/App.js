import React from "react";

import Body from "./Body";
import './App.css'

// function App(){

  // const words = ["Hello", "World", "How are you?"];
class App extends React.Component{
        constructor(){
        super()
        this.turtles = [
          {
              name: "Leonardo",
              nickName: "Leo",
              weapon: "Katana",
              imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
          },
          {
              name: "Donatello",
              nickName: "Don",
              weapon: "Bo staff",
              imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
          },
          {
              name: "Michelangelo",
              nickName: "Mikey",
              weapon: "Nunchucks",
              imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
          },
          {
              name: "Raphael",
              nickName: "Raph",
              weapon: "Sai",
              imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg"
          }
      ]
    }
    render() {
    return (
        <div>
            {this.turtles.map((turtle, i) =>
            <div key={turtle.name + i}>
                <h1>{turtle.name} ({turtle.nickName})</h1>
                <p>Weapon of choice: {turtle.weapon}</p>
                <img src={turtle.imgUrl} alt={`${turtle.name}`} width="200"/>
                <hr/>
            </div>
            )}
        </div>
      );
    };

}
export default App;







// render(){
//   return(
//       {this.turtles.map(turtle =>
//
//
//
//
//
//   )
//
//
//
//
//
//
//
//
// }
