import React from "react";
import "./Form.css";

let Form = (props) => (
  <form className="form" onSubmit={props.handleSubmit}>
    <div className="form-items">
    <input placeholder="Title" name="name" className="inputs" value={props.name} onChange={props.handleChange}/>
    <input placeholder="Image URL" className="inputs" name="url"  value={props.url} onChange={props.handleChange}/>
    <input placeholder="Description" className="inputs" name="desc"  value={props.desc} onChange={props.handleChange}/>
    <button className="form-btn">Submit</button>
    </div>
  </form>
)
export default Form;
