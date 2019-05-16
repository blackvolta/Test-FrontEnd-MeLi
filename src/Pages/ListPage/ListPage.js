import React, { Component } from "react";
import Item from "../../Components/Item";
import "./Home.css";
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      items_visibles: true,
      items: [],
      error: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({
          items: data,
          isLoaded: true
        });
      });
  }

  ocultarComponente() {
    this.setState({
      visible: false
    });
  }
  ocultarItems() {
    this.setState({
      items_visibles: false
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return true;
  }
  render() {
    if (this.state.visible) {
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
    } else {
      return <div className="App">Acceso restringido</div>;
    }
  }
}

export default HomePage;
