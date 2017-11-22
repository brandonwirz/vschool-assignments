import React, {Component} from "react";
import Output from "./Output.js";
import Form from "./Form.js"

class Container extends Component {
    constructor() {
      super()
      this.state = {
        forms: []
      }
  }

  handleSubmit = (e, info) => {
      e.preventDefault();
      this.setState(prevState => {
        prevState.forms.push(info)
        return {forms: prevState.forms}
    })
  }

  render() {
    return (<div>
      <Form submit={this.handleSubmit}/> {
            this.state.forms.map(form => {
                return (<Output name={form.name} game={form.game} date={form.date} score={form.score} trashTalk={form.trashTalk}/>)
        })
      }
    </div>
   )
  }
}

export default Container;
