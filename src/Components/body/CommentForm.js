import React, { Component } from "react";
import { Form, Button, Input } from "reactstrap";



class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(
      this.props.dishId,
      this.state.author,
      this.state.rating,
      this.state.comment
    );
    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Yourname"
            onChange={this.handleInputChange}
            required
          />
          <br />

          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
          >
            <option>Give rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            placeholder="Your Comment"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Button type="submit">Submit Comment</Button>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
