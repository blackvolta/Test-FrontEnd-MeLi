import React, { Component } from "react";
import axios from "axios";
import Item from "../../Components/Item";
import "./ListPage.css";
import { Link } from "react-router-dom";
const API = "/api/items/list:query";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      error: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    axios
      .get(API)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({
          items: data,
          isLoaded: true
        });
      })
      .catch(error =>
        this.setState({
          error
        })
      );
  }

  render() {
    if (!this.state.isLoaded) {
      return <div className="App">Cargando ...</div>;
    } else {
      return (
        <div className="row" id="listado-resultados">
          {this.state.items.map(item => (
            <Item data={item} />
          ))}
        </div>
      );
    }
  }
}

export default HomePage;
