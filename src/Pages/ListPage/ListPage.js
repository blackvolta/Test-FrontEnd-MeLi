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
    this.getResults();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.search != this.props.location.search) {
      this.setState({
        items: [],
        error: null,
        isLoaded: false
      });
      this.getResults();
    }
  }
  getResults() {
    const API = "/api/items?q=";
    const query = this.getQuery();
    console.log(query);
    axios
      .get(API + query)
      .then(res => {
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
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row" id="listado-resultados">
                {this.state.items.map((item, i) => (
                  <Item data={item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ListPage;
