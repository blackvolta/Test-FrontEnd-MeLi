import React, { Component } from "react";
import { Link } from "react-router-dom";
import shipping_ic from "../Assets/Images/ic_shipping.png";
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    const freeShipping = this.props.data.free_shipping;
    return (
      <div className="producto">
        <Link className="link" to={"/items/" + this.props.data.id}>
          <img className="producto-img" src={this.props.data.picture} />
        </Link>
        <div className="producto-info">
          <div className="producto-price">
            <span>$</span>
            {this.props.data.price.amount}

            {freeShipping && <img className="shipping-img" src={shipping_ic} />}
          </div>
          <div className="producto-title">
            <Link className="link" to={"/items/" + this.props.data.id}>
              {this.props.data.title}
            </Link>
          </div>
        </div>
        <div className="producto-location">{this.props.data.address}</div>
      </div>
    );
  }
}

export default Item;
