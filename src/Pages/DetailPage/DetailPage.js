import React, { Component } from "react";
import axios from "axios";
import "./DetailPage.css";
import Breadcrumb from "../../Components/Breadcrumb";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: [],
      categories: [],
      amountPrice: "",
      decimals: "",
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
          categories: data.categories,
          amountPrice: data.item.price.amount,
          decimals: data.item.price.decimals,
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
    if (this.state.decimals < 10) {
      let decimlasString = "0" + this.state.decimals;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="row" id="breadcrumb">
              {this.state.categories.map((category, i) => (
                <Breadcrumb category={category} key={i} />
              ))}
            </div>
            <div className="row" id="producto-detalle">
              <img className="producto-img" src={this.state.perfil.picture} />
              <div className="detalle-info">
                <div className="condicion">{this.state.perfil.condition} -</div>
                <div className="cantidad-vendidos">
                  {this.state.perfil.soldQuantity} vendidos
                </div>
                <h1 className="title">{this.state.perfil.title}</h1>
                <div className="price">
                  <span>$</span>
                  <span>{this.state.amountPrice}</span>
                  {this.state.decimals < 10 && (
                    <span className="priceDecimals">
                      0{this.state.decimals}
                    </span>
                  )}
                </div>
                <button type="button" className="btn btn-primary">
                  Comprar
                </button>
              </div>
              <h3 className="producto-descripcion-title">
                Descripción del producto
              </h3>
              <div className="producto-descripcion">
                {this.state.perfil.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
