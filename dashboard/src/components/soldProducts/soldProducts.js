import React, {Component} from "react";

import ContentCard from "../contentWrapper/contentCard/contentCard";

const soldProductsURL = "/api/sales/products";
const mostSoldProductsURL = "/api/sales/most-sold-products";
const lastSoldProductsURL = "/api/sales/last-sold-products";

class SoldProducts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      soldProducts: [],
      mostSoldProducts: [],
      lastSoldProducts: [],
      page: 0,
    }
    console.log("Event => Constructor");
  }

  componentDidMount() {
    console.log("%cEvent => Component Did Mount","color: green");
    this.fetchProducts();
    this.fethMostSold();
    this.fethLastSold();
  }

  componentDidUpdate() {
    console.log("%cEvent => Component Did Update","color: yellow");
  }

  componentWillUnmount() {
    console.log("%cEvent => Component Will Unmount","color: red");
  }

  async fetchProducts() {
    const response = await fetch(soldProductsURL);
    const result = await response.json();
    const data = await result.data;
    this.setState({soldProducts: data});
  };

  async fethMostSold() {
    const response = await fetch(mostSoldProductsURL);
    const result = await response.json();
    const data = await result.data;
    this.setState({mostSoldProducts: data});
  }

  async fethLastSold() {
    const response = await fetch(lastSoldProductsURL);
    const result = await response.json();
    const data = await result.data;
    this.setState({lastSoldProducts: data});
  }

  nextPage = async () => {
    await this.setState({page: this.state.page + 1});
    this.fetchMoreProducts();
  }

  previousPage = async () => {
    await this.setState({page: this.state.page - 1});
    this.fetchMoreProducts();
  }

  async fetchMoreProducts() {
    const response = await fetch(soldProductsURL + `?page=${this.state.page}`);
    const result = await response.json();
    const data = await result.data;
    this.setState({soldProducts: data});
  }

  render() {

    console.log("%cEvent => Render","color: cyan");

    if(!this.state.soldProducts){
      return <div className="row">Loading...</div>
    }

    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Sales - Products</h1>
        </div>
        <div className="row">
          <ContentCard title="Sold Products">
            <div className="row">
              {this.state.soldProducts.map((product, i) => {
                return (
                  <div className="col-lg-6 mb-4">
                    <div key={i} className="card bg-dark text-white shadow">
                      <div className="card-body">{product.productos.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={this.previousPage}>Prev</button>
            <button onClick={this.nextPage}>Next</button>
          </ContentCard>
          <ContentCard title="Most Sold Products">
            <div className="row">
              {this.state.mostSoldProducts.map((product, i) => {
                return (
                  <div className="col-lg-6 mb-4">
                    <div key={i} className="card bg-dark text-white shadow">
                      <div className="card-body">{product.productos.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ContentCard>
          <ContentCard title="Last Sold Products">
            <div className="row">
              {this.state.lastSoldProducts.map((product, i) => {
                return (
                  <div className="col-lg-6 mb-4">
                    <div key={i} className="card bg-dark text-white shadow">
                      <div className="card-body">{product.productos.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ContentCard>
        </div>
      </div>
    );

  }

}

export default SoldProducts;