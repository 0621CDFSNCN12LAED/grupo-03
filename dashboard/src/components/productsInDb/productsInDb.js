import React, {Component} from "react";

import ContentCard from "../contentWrapper/contentCard/contentCard";

const productsUrl = "/api/products";

class ProductsInDb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: null,
      page: 0,
    }
    console.log("Event => Constructor");
  }

  componentDidMount() {
    console.log("%cEvent => Component Did Mount","color: green");
    this.fetchProducts();
  }

  componentDidUpdate() {
    console.log("%cEvent => Component Did Update","color: yellow");
  }

  componentWillUnmount() {
    console.log("%cEvent => Component Will Unmount","color: red");
  }

  async fetchProducts() {
    const response = await fetch(productsUrl);
    const result = await response.json();
    const data = await result.data;
    this.setState({products: data});
  };

  nextPage = async () => {
    await this.setState({page: this.state.page + 1});
    this.fetchMoreProducts();
  }

  previousPage = async () => {
    await this.setState({page: this.state.page - 1});
    this.fetchMoreProducts();
  }

  async fetchMoreProducts() {
    const response = await fetch(productsUrl + `?page=${this.state.page}`);
    const result = await response.json();
    const data = await result.data;
    this.setState({products: data});
  }

  render() {

    console.log("%cEvent => Render","color: cyan");

    if(!this.state.products){
      return <div className="row">Loading...</div>
    }

    return (
      <div>
        <ContentCard title="Products in Data Base">
          <div className="row">
            {this.state.products.map((product, i) => {
              return (
                <div className="col-lg-6 mb-4">
                  <div key={i} className="card bg-dark text-white shadow">
                    <div className="card-body">{product.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <button onClick={this.previousPage}>Prev</button>
          <button onClick={this.nextPage}>Next</button>
        </ContentCard>
      </div>
    );

  }

}

export default ProductsInDb;