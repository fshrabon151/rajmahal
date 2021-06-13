import React, { Component } from "react";
import { CardColumns, Button, ModalBody, ModalFooter, Modal } from "reactstrap";

import DishDetails from "./DishDetails";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment) =>
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          dishId: dishId,
          author: author,
          rating: rating,
          comment: comment,
        },
      }),
  };
};


class Menu extends Component {
  state = {
    selectDishes: null,
    modalOpen: false,
  };

  onDishSelect = (dish) => {
    this.setState({
      selectDishes: dish,
      modalOpen: !this.state.modalOpen,
    });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  render() {
    document.title = "Menu";
    const menu = this.props.dishes.map((item) => {
      return (
        <MenuItem
          key={item.id}
          {...item}
          onDishSelect={() => this.onDishSelect(item)}
        />
      );
    });

    let dishDetail = null;

    if (this.state.selectDishes != null) {
      const comments = this.props.comments.filter(
        (comment) => comment.dishId === this.state.selectDishes.id
      );
      dishDetail = (
        <DishDetails {...this.state.selectDishes} comments={comments} addComment={this.props.addComment} />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <CardColumns>{menu}</CardColumns>

          <Modal isOpen={this.state.modalOpen} >
            <ModalBody>{dishDetail}</ModalBody>
            <ModalFooter>
              <Button onClick={this.toggleModal}>Close</Button>
            </ModalFooter>
          </Modal>

          {/* <div className="col-8">{dishDetail}</div>
          <div className="col-4">
            {menu}</div> */}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Menu);
