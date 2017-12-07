import React from "react";
import {Link, Switch, Route} from "react-router-dom";
import data from "../data.json";
import ServiceDetail from "./ServiceDetail";


export default function Services(props) {
    console.log(props.match);

    const services = data.map(service =>
        <li key={service._id}>
            <Link to={`${props.match.url}/${service._id}`}>
                {service.name}
            </Link>
        </li>
    )

    return (
        <ul>
            {services}

            {props.match && <Route path="/service/:service" component={ServiceDetail}/>}

        </ul>
    )
}
