import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <CardBody>
          <CardImg
            width="100%"
            alt={props.name}
            src={props.image}
            // style={{ opacity: "0.5" }}
          ></CardImg>
          <CardImgOverlay>
            <CardTitle
              style={{ cursor: "pointer",backgroundColor: "#3c5e79e8", margin: "15px", fontSize: "20px", fontWeight: "500", color: "#fff", padding: "5px 12px", display: "inline-block"}}
              onClick={props.onDishSelect}
            >
              {props.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
