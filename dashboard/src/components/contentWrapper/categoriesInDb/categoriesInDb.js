import React, {Component} from "react";

const categoriesURL = "/api/products/categories";
const categoriesProductsURL = "/api/products/categories-products";

class CategoriesInDb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: null,
      carnes: null,
      pescados: null,
      pollos: null,
      veganos: null,
      carnesProducts: null,
      pescadosProducts: null,
      pollosProducts: null,
      veganosProducts: null
    }
    console.log("Event => Constructor");
  }

  componentDidMount() {
    console.log("%cEvent => Component Did Mount","color: green");
    this.fetchCategories();
    this.fetchCarnesProducts();
    this.fetchPescadosProducts();
    this.fetchPollosProducts();
    this.fetchVeganosProducts();
  }

  componentDidUpdate() {
    console.log("%cEvent => Component Did Update","color: yellow");
  }

  componentWillUnmount() {
    console.log("%cEvent => Component Will Unmount","color: red");
  }

  async fetchCategories() {
    const result = await fetch(categoriesURL);
    const response = await result.json();
    const data = await response.data;
    this.setState({categories: data});

    const carneName = data[0].name;
    this.setState({carnes: carneName});

    const pescadoName = data[1].name;
    this.setState({pescados: pescadoName});

    const polloName = data[2].name;
    this.setState({pollos: polloName});

    const veganoName = data[3].name;
    this.setState({veganos: veganoName});
  };
  
  async fetchCarnesProducts() {
    const result = await fetch(categoriesProductsURL);
    const response = await result.json();
    const meta = await response.meta;
    this.setState({carnesProducts: meta.carnesCount});
  };

  async fetchPescadosProducts() {
    const result = await fetch(categoriesProductsURL);
    const response = await result.json();
    const meta = await response.meta;
    this.setState({pescadosProducts: meta.pescadosCount});
  };

  async fetchPollosProducts() {
    const result = await fetch(categoriesProductsURL);
    const response = await result.json();
    const meta = await response.meta;
    this.setState({pollosProducts: meta.pollosCount});
  };

  async fetchVeganosProducts() {
    const result = await fetch(categoriesProductsURL);
    const response = await result.json();
    const meta = await response.meta;
    this.setState({veganosProducts: meta.veganosCount});
  };

  render() {

    console.log("%cEvent => Render","color: cyan");

    if(!this.state.categories){
      return <div className="row">Loading...</div>
    }

    return (
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">{this.state.carnes}: {this.state.carnesProducts} products</div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">{this.state.pescados}: {this.state.pescadosProducts} products</div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">{this.state.pollos}: {this.state.pollosProducts} products</div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">{this.state.veganos}: {this.state.veganosProducts} products</div>
          </div>
        </div>
      </div>
    );

  }

}

export default CategoriesInDb;
