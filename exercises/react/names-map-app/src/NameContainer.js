import React ,{Component} from "react"
import Name from "./Name"

class NameContainer extends Component{
    constructor(){
        super();
          this.names = ["Bobby", "Derek", "Frank", "Lanie", "Neil", "Andrew", "Brandon", "Josh", "Kyle", "Jeremy", "Luke", "Adam", "Calvin", "Dan"];
    }

    render(){
          return this.names.map((name,i)=>{
             return <Name name={name} key={name+i}/>
       })
    }
}


export default NameContainer;




// function NameContainer(){
//     const names = ["Bobby", "Derek", "Frank", "Lanie", "Neil", "Andrew", "Brandon", "Josh", "Kyle", "Jeremy", "Luke", "Adam", "Calvin", "Dan"];
//
//     const
//
//     return  names.map((name,i)=>{
//       return <Name firstname={name} key={name+i}/>
//     })
//
//   // return name.map((name, index) => {
//
//       // return <h1>{ Name }<h1/>
//   //       return <Name name={name} key={index+name}/>
//   //       <div>
//   //           <Name firstname={names[0]}/>
//   //           <Name firstname={names[1]}/>
//   //       </div>
//   // })
//
// }
//
//
// export default NameContainer;
