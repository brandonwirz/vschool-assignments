import React from "react";
import data from "../data.json";
export default function ServiceDetail(props) {
    const thisService = data.find(service => props.match.params.service === service._id);

    return (
        <h1>{thisService.name} - ${thisService.price}</h1>
    )
}
