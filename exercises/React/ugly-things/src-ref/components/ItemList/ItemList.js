import React from "react";
import "./ItemList.css";

import Item from "./Item"

let ItemList = (props) => (
  <div className="item-list">
    {
      props.data.map((item, index) => (
        <Item key={item.name + index} data={item} index={index}/>
      ))
    }
  </div>
)

export default ItemList;
