import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return (
      <a className="producto" href="detalle.html?id=MLA647579156">
        <img className="producto-img" src={this.props.data.picture} />
        <div className="producto-info">
          <div className="producto-price">
            <span>$</span>
            {this.props.data.price.currency}
          </div>
          <div className="producto-title">{this.props.data.title}</div>
        </div>
        <div className="producto-location">{this.props.data.address}</div>
      </a>
    );
  }
}

export default Item;
