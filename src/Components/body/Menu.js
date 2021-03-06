import React, { Component } from "react";
import { CardColumns, Button, ModalBody, ModalFooter, Modal } from "reactstrap";

import DishDetails from "./DishDetails";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../../redux/actionCreators";
import Loading from "./Loading";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment) =>
      dispatch(addComment(dishId, author, rating, comment)),

    fetchDishes: () => dispatch(fetchDishes()),
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

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    document.title = "Menu";

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else {
      const menu = this.props.dishes.dishes.map((item) => {
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
          <DishDetails
            {...this.state.selectDishes}
            comments={comments}
            addComment={this.props.addComment}
          />
        );
      }
      return (
        <div className="container">
          
          <div className="row">
            <CardColumns>{menu}</CardColumns>

            <Modal isOpen={this.state.modalOpen}>
              <ModalBody>{dishDetail}</ModalBody>
              <ModalFooter>
                <Button onClick={this.toggleModal}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
