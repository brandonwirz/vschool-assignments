import React ,{Component} from "react";
import axios form "axios";
import Hit form "./Hit"

class HitList extends Component {
  constructor() {
    super();
    this.state = {
         HitList: [];
  }
}

componentDidMount(){
    axios.get("http://api.vschool.io:6543/hitlist.json").then(response =>{
          // console.log(response);
          this.setState({
            HitList: response.data
          })
    })

}

  render(){
      return(
      {this.state.HitList.map((hit)=>{
            return(
              <div>
                  <Hit
                     name={hit.name}
                     imhUrl={hit.image}
                     key={hit.name}
                     {/* key={turtle.name + index} */}
                  />
            );
        })}
      );
   }
}
