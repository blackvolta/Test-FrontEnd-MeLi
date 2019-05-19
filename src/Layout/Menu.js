import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Logo_ML.png";
import searchIcon from "../Assets/Images/ic_Search.png";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  updateInputValue(event) {
    this.setState({
      searchValue: event.target.value || ""
    });
  }
  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/items?search=${this.state.searchValue}`);
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 header-wrapper">
              <a href="/" className="brand">
                <img className="logo" src={logo} tabIndex={1} />
              </a>
              <form action="" onSubmit={this.handleSearchSubmit}>
                <input
                  type="text"
                  name="searchbox"
                  id="searchbox"
                  onChange={e => this.updateInputValue(e)}
                  className="input-search"
                  placeholder="Nunca dejes de buscar"
                  tabIndex={2}
                />
                <button type="submit" alt="buscar" tabIndex={3}>
                  <img src={searchIcon} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
