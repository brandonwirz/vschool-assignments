import React ,{Component} from "react";
import axios from "axios";
import Hit from "./Hit"

class HitList extends Component {
  constructor() {
    super();
    this.state = {
         HitList: []
  }
}

componentDidMount(){
    axios.get("http://api.vschool.io:6543/hitlist.json").then(response =>{
          // console.log(response);w
          this.setState({
            HitList: response.data
          })
    })
}

  render(){
            return(
              <div>
                  {this.state.HitList.map(hit => {
                    return(
                        <Hit name={hit.name} key={hit.name} src={hit.image} alt={`${hit.name}`}/>
                    );
                })}
              </div>
            );
          }
}


export default HitList;
