// import React from "react";
//
// function Services(props) {
//     return (
//         <div>
//             <h1>Services</h1>
//         </div>
//     )
// }
//
// export default Services;
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// This is the component representing an individual service (a detail view)
import ServiceDetail from "./ServiceDetail";

class Services extends React.Component {
    constructor() {
        super();
        this.state = {
            services: []
        }
    }

    // imagine this is doing an HTTP call for the data which we've hardcoded below:
    componentDidMount() {
        this.setState({
            services: [
                // {
                //     name: "Lawn Mowing",
                //     _id: "123",
                //     price: 20
                // },
                // {
                //     name: "Leaf Raking",
                //     _id: "234",
                //     price: 25
                // },
                // {
                //     name: "Sprinkler Maintenance",
                //     _id: "345",
                //     price: 100
                // }
            ]
        })
    }

    render() {
        return (



            <div>
                <h1>Services</h1>
                <div className="services-list">
                    {/*
                     Create a link for every service. The "to" prop
                     is directing them to "/services/" + whatever the ID is
                     of this particular service
                     */}
                    {this.state.services.map(service => <Link to={`/services/${service._id}`} key={service._id}>{service.name}</Link>)}
                </div>
                {/* This switch is just for the services section of the site. This is a nested view! */}
                <Switch>
                    {/*
                     Notice the :serviceId in the path below.
                     This says "whatever shows up here, call it 'serviceId'
                     so I can access it later"
                    */}
                    <Route path="/services/:serviceId" component={ServiceDetail} />
                </Switch>
            </div>
        )
    }
}

export default Services;
