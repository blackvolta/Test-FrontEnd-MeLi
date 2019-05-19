import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

class Breadcrumb extends Component {
  render() {
    return <span className="breadcrumb-item">{this.props.category}</span>;
  }
}

export default Breadcrumb;
