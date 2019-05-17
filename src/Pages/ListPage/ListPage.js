import React, { Component } from "react";
import axios from "axios";
import Item from "../../Components/Item";
import "./ListPage.css";
import { Link } from "react-router-dom";
import queryString from "query-string";

class ListPage extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      error: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    const API = "http://localhost:5000/api/items/list:";
    const query = this.getQuery();
    console.log(query);
    axios
      .get(API + query)
      .then(res => {
        console.log("adentro");
        console.log(res.data.items);
        this.setState({
          items: res.data.items,
          isLoaded: true
        });
      })
      .catch(error =>
        this.setState({
          error
        })
      );
  }
  getQuery() {
    const values = queryString.parse(this.props.location.search);
    const search = values.search;
    //&console.log(search);
    return search;
  }

  render() {
    if (!this.state.isLoaded) {
      return <div className="App">Cargando ...</div>;
    } else {
      return (
        <div className="row" id="listado-resultados">
          {this.state.items.map((item, i) => (
            <Item data={item} key={i} />
          ))}
        </div>
      );
    }
  }
}

export default ListPage;
