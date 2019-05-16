import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.query.value);
  };

  render() {
    return (
      <header>
        <a href="/">
          <img className="logo" src="images/Logo_ML.png" tabIndex={1} />
        </a>
        <form action="" onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            name="searchbox"
            id="searchbox"
            className="input-search"
            placeholder="No dejes de buscar"
            tabIndex={2}
          />
          <button type="submit" alt="buscar" tabIndex={3}>
            <img src="images/ic_Search.png" />
          </button>
        </form>
      </header>
    );
  }
}

export default Menu;
