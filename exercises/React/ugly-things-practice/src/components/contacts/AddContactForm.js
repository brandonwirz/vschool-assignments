import React, {Component} from "react";
import {connect} from "react-redux";
// import action creators
import {add} from "../../redux/contacts";

class AddContactForm extends Component{
      constructor(props){
        super(props);
        this.state = {
                title: "",
                description: "",
                img:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit(e){
    e.preventDefault();//because page refreshes
      this.props.add(this.state);
      this.setState({
            title: "",
            description: "",
            img:"",
      });
}

render(){
    const styles = {
          position:"absolute",
          top:"100px",
          left:"50px",
          right:"50px",
          textAlign: "center",
          padding:"10px"
        }

        return (
          <form style={styles} onSubmit={this.handleSubmit}>

                <input name ="title"
                       onChange={this.handleChange}
                       value={this.state.title}
                       type="text"/>

                <input name ="description"
                       onChange={this.handleChange}
                       value={this.state.description}
                       type="text"/>

                <input name ="img"
                       onChange={this.handleChange}
                       value={this.state.img}
                       type="text"/>

                <button>submit</button>
          </form>
      )
   }
}

export default connect (null, {add})(AddContactForm)
