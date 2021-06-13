import dateFormat from "dateformat";
import React from "react";
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
import CommentForm from "./CommentForm";



const DishDetails = (props) => {


  let comments = props.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <ListGroupItem >
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
        </div>
      );
    });
  

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
        style={{ cursor: "pointer" }}
      >
        Comments <Badge pill>{props.comments.length}</Badge>
      </ListGroupItem>
      <br />

      {comments}
      <hr />
       <CommentForm dishId = {props.id}/>
    </div>
  );
};

export default DishDetails;
