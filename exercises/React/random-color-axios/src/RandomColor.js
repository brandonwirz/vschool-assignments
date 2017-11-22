import React ,{Component} from "react";
import axios from "axios";
import Color from "./Color"

class RandomColor extends Component {
  constructor(){
    super()
    this.state ={
        colors:[]
    }
  }

componentDidMount(){
  axios.get("http://www.colr.org/json/tag/cheese").then(response=>{
    this.setState({
        colors: response.data.colors
    })
  })
}

render(){


  return(
    <div>
      {this.state.colors.map((color)=>{
        return(
          <Color backgroundColor={color.hex}/>
         );
       })
     }
    </div>

    );
  }
}


//   return(
//       this.state.HitList.map(color => {
//         return(
//             <Color name={color.name}/>
//         );
//       })
//     );
//   }
// }




export default RandomColor;
