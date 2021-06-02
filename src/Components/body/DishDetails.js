import dateFormat from "dateformat";
import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Badge,
} from "reactstrap";

import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";



const DishDetails = (props) => {
  const [show, setShow] = useState(false);

  const commentsToggle = () => {
    setShow(!show);
  };

  let comments = "";
  if (show) {
    comments = props.comments.map((comment) => {
      return (
        <>
          <ListGroupItem>
            <ListGroupItemHeading>{comment.author}</ListGroupItemHeading>
            <ListGroupItemText>
              {comment.comment}
              <br />
              <br />
              {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}
              <br />

              <Badge color="danger">Rating {comment.rating}</Badge>
            </ListGroupItemText>
          </ListGroupItem>
          <br />
        </>
      );
    });
  }

  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <CardImg top src={props.image} alt={props.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h3>{props.name}</h3>
          </CardTitle>

          <CardText>{props.description}</CardText>
          <h3>
            <Badge style={{ color: "#fff" }}>Price : {props.price}BDT</Badge>
          </h3>
          <h3 style={{ textAlign: "right" }}>
            <Badge color="danger">{props.label}</Badge>
          </h3>
        </CardBody>
      </Card>

      <br />
      <ListGroupItem
        className="justify-content-between"
        onClick={commentsToggle} style={{cursor:"pointer"}}
      >
        Comments <Badge pill>{props.comments.length}</Badge>
      </ListGroupItem>
      <br />

      {comments}
    </div>
  );
};

export default DishDetails;
