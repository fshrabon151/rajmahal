import React, { Component } from "react";
import DISHES from "../../data/dishes";
import DishDetails from "./DishDetails";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    dishes: DISHES,
    selectDishes: null,
  };

  onDishSelect = (dish) => {
    this.setState({ selectDishes: dish });
  };
  render() {
    const menu = this.state.dishes.map((item) => {
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
      dishDetail = <DishDetails {...this.state.selectDishes} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">{dishDetail}</div>
          <div className="col-4">
            {menu}</div>
        </div>
      </div>
    );
  }
}
export default Menu;
