import React from "react";

import {Col, Thumbnail, Button} from "react-bootstrap";

function Thumb(props) {

  const styles = {
    backgroundColor: props.backGroundColor,
    marginTop: "50px",
    height: "300px"
  }
    return (
      <Col xs={6} md={4}>
        <Thumbnail style={styles}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>
            <Button bsStyle="success">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
          </Thumbnail>
          </Col>

    )
};

export default Thumb;
