import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return (
      <div className="producto">
        <Link className="link" to={"/items/" + this.props.data.id}>
          <img className="producto-img" src={this.props.data.picture} />
        </Link>
        <div className="producto-info">
          <div className="producto-price">
            <span>$</span>
            {this.props.data.price.amount}
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
