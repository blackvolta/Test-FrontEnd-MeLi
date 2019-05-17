import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Logo_ML.png";
import searchIcon from "../Assets/Images/ic_Search.png";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.history.push({ pathname: "/items", search: `search=${search}` });
  };

  render() {
    return (
      <header>
        <a href="/">
          <img className="logo" src={logo} tabIndex={1} />
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
            <img src={searchIcon} />
          </button>
        </form>
      </header>
    );
  }
}

export default Menu;
