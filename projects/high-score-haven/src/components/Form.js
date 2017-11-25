import React, {Component} from "react";


class Form extends Component{
    constructor(){
      super();
        this.state = {
          name: "",
          game: "",
          date: "",
          highScore: "",
          trashTalk: "",
          trashTalkArray: ['Nice job dummy!', 'Try again bozoo!', 'Your a real buffoon']

        }
          this.handleInputsChange = this.handleInputsChange.bind(this)
    }

    handleInputsChange(e){
          e.persist();
          // console.log(e.target.name, e.target.checked, e.target.value);
          if(e.target.type === "checkbox"){
              if(e.target.checked){
                  this.setState({trashTalk: this.randomTrashTalk()})
                }else{
                  this.setState({trashTalk: ""})
                }
              } else {
                  this.setState({[e.target.name]: e.target.value})
          }
      }

    randomTrashTalk() {
          let index = Math.floor(Math.random() * this.state.trashTalkArray.length)
          return this.state.trashTalkArray[index];
        }


    render(){
          const block = {
            display: "block"
        }

        return(
              <div className="form">
                  <form onSubmit= {(e)=>this.props.submit(e, this.state)}>
                      Name:
                      <input style={block} name="name" required onChange={this.handleInputsChange} value= {this.state.name}/>

                      Game:
                      <input style={block} name="game" onChange={this.handleInputsChange} value= {this.state.game}/>

                      Date:
                      <input style={block} name="date" onChange={this.handleInputsChange} value= {this.state.date}/>

                      High Score:
                      <input style={block} name="score" minLength="2" onChange={this.handleInputsChange} value= {this.state.score}/>
                      <br/>
                      Include a Random Trash Talking Message?
                      <input style={block} name="trashTalk" type="checkBox" onChange={this.handleInputsChange} value={this.state.trashTalkArray}/>
                      <br/>
                      <button>submit</button>
                  </form>
              </div>
          )
     }
}

export default Form;
