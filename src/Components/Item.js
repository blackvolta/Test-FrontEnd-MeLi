import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="producto" href="detalle.html?id=MLA647579156">
        <img
          className="producto-img"
          src="http://mla-s1-p.mlstatic.com/752415-MLA25242878719_122016-I.jpg"
        />
        <div className="producto-info">
          <div className="producto-price">
            <span>$</span>
            {this.props.data.price}
          </div>
          <div className="producto-title">{this.props.data.title}</div>
        </div>
        <div className="producto-location">{this.props.data.location}</div>
      </a>
    );
  }
}

export default Item;
