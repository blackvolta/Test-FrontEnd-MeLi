import React, { Component } from "react";
import axios from "axios";
import "./DetailPage.css";
import Breadcrumb from "../../Components/Breadcrumb";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: [],
      amountPrice: "",
      error: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("/api/items/" + this.props.match.params.id)
      .then(res => res.json())
      .then(data => {
        console.log(data.item);
        this.setState({
          perfil: data.item,
          amountPrice: data.item.price.amount,
          isLoaded: true
        });
      });
  }
  formatWithSeparator = (number, separator) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  formatDecimalPart = decimalPart => {
    if (decimalPart < 10) return "0" + decimalPart.toString();
    else return decimalPart.toString();
  };

  render() {
    return (
      <div id="producto-detalle">
        <div className="row" id="breadcrumb">
          <Breadcrumb data={this.state.category} key={1} />
        </div>
        <img
          className="producto-img"
          src="https://mla-s1-p.mlstatic.com/752415-MLA25242878719_122016-O.jpg"
        />
        <div className="detalle-info">
          <div className="condicion">{this.state.perfil.condition}</div>
          <div className="cantidad-vendidos">
            {this.state.perfil.soldQuantity} vendidos
          </div>
          <h1 className="title">{this.state.title}</h1>
          <div className="price">
            <span>$</span>
            {this.state.amountPrice}
          </div>
          <button type="button" className="btn btn-primary">
            Comprar
          </button>
        </div>
        <h3>Descripción del producto</h3>
        <div id="producto-descripcion">{this.state.perfil.description}</div>
      </div>
    );
  }
}

export default DetailPage;
