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
    const API = "/api/items/list:";
    const query = this.getQuery();
    axios
      .get(API + query)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({
          items: data.items,
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
    console.log(search);
    //const search = queryString.parse(location.search);
    return search.search;
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

export default ListPage;
