import React, {Component} from "react";
import axios from "axios";

class ServiceDetail extends Component {
    constructor() {
        super();
        this.state = {
            service: {}
        }
    }

    componentDidMount() {
        axios.get(`http://api.mysite.com/services/${this.props.match.params.serviceId}`)
            .then(response => {
                this.setState({
                    service: response.data
                });
            });
    }

    render() {
        return (
            <div>
                <h1>{this.state.service.name} - ${this.state.service.price}</h1>
            </div>
        )
    }
}

export default ServiceDetail;
