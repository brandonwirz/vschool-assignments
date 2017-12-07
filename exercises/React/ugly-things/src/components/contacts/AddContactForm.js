import React, {Component} from "react";
import {connect} from "react-redux";
// import action creators
import {add,deleteImg} from "../../redux/contacts";


class AddContactForm extends Component {
      constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            img: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this)
    }


handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
}

handleSubmit(e){
    e.preventDefault();//because page refreshes
    this.props.add(this.state);
    // this.props.addDescription(this.state);
    // this.props.addImage(this.state);
    this.setState({
            title:"",
            description: "",
            img: ""
    });
}
handleDelete(e){
    e.preventDefault();
    this.props.deleteImg();
    console.log(this.props.handleDelete());
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

              <input name="title"
                     placeholder="Title"
                     value= {this.state.title}
                     type ="text"
                     onChange={this.handleChange}/>
                     &nbsp;

              <input name = "description"
                     placeholder="Description"
                     value= {this.state.description}
                     type="text"
                     onChange={this.handleChange}/>
                     &nbsp;

              <input name= "img"
                     placeholder="Image URL"
                     value= {this.state.img}
                     type="text"
                     onChange={this.handleChange}/>

              <button>submit</button>
              {/* <button>delete</button> */}

          </form>
        )
        // return (
        //
        //
        // )
     }
}


export default connect(null, {add, deleteImg})(AddContactForm)
