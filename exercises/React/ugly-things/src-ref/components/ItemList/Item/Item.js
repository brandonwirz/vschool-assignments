import React from "react";
import "./Item.css";

let Item = (props) => (
<div>
  <h1>{props.data.name}</h1>
  <h3>{props.data.desc}</h3>
  <img alt="" src={props.data.url} />
  <button type="submit" onClick={props.handleRemove}>Remove</button>
</div>
)

export default Item;
