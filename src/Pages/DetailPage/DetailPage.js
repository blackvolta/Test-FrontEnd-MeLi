import React, { Component } from "react";
import axios from "axios";
import "./DetailPage.css";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: [],
      error: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("/api/items/detail:" + this.props.match.params.id)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({
          perfil: data,
          isLoaded: true
        });
      });
  }
  render() {
    return (
      <div id="producto-detalle">
        <img
          className="producto-img"
          src="https://mla-s1-p.mlstatic.com/752415-MLA25242878719_122016-O.jpg"
        />
        <div className="detalle-info">
          <div className="condicion">Nuevo</div>
          <div className="cantidad-vendidos">- 0 vendidos</div>
          <h1 className="title">
            Perro Lobo Americano 75 A 90%+ (resto Ovejero Alemán Blanco)
          </h1>
          <div className="price">
            <span>$</span>115000
          </div>
          <a href className="btn btn-primary">
            Comprar
          </a>
        </div>
        <h3>Descripción del producto</h3>
        <div id="producto-descripcion" />
      </div>
    );
  }
}

export default DetailPage;
