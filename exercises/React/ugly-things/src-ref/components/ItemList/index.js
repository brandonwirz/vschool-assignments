import React from "react";
import ItemList from "./ItemList.js";
import {connect} from "react-redux"

// let dummyData = [
//   {
//     name: "Some Face",
//     url: "https://www.funnypica.com/wp-content/uploads/2012/05/Ugly-Woman.jpg",
//     desc: "Not sure what it is"
//   },
//   {
//     name: "Another Face",
//     url: "https://www.funnypica.com/wp-content/uploads/2012/05/funny-looking-people.jpg",
//     desc: "Even not sure what its is and wah"
//   },
//   {
//     name: "Better not",
//     url: "https://www.funnypica.com/wp-content/uploads/2012/05/Nice-bath.jpg",
//     desc: "Another of those random images you wish you never saw"
//   }
// ]

class ItemListContainer extends React.Component {
  render() {
    return (
      <ItemList data={this.props.items}/>
    )
  }
}

export default connect((state) => state)(ItemListContainer);
