import React, {Component} from "react";

const categoriesUrl = "/api/products/categories";
const carnesUrl = "api/products/carnes";
const pescadosUrl = "api/products/pescados";
const pollosUrl = "api/products/pollos";
const veganosUrl = "api/products/veganos";

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
    const result = await fetch(categoriesUrl);
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
    const result = await fetch(carnesUrl);
    const response = await result.json();
    const meta = await response.meta;
    this.setState({carnesProducts: meta.count});
  };

  async fetchPescadosProducts() {
    const result = await fetch(pescadosUrl);
    const response = await result.json();
    const meta = await response.meta;
    this.setState({pescadosProducts: meta.count});
  };

  async fetchPollosProducts() {
    const result = await fetch(pollosUrl);
    const response = await result.json();
    const meta = await response.meta;
    this.setState({pollosProducts: meta.count});
  };

  async fetchVeganosProducts() {
    const result = await fetch(veganosUrl);
    const response = await result.json();
    const meta = await response.meta;
    this.setState({veganosProducts: meta.count});
  };

  render() {

    console.log("%cEvent => Render","color: cyan");

    if(!this.state.categories){
      return <div class="row">Loading...</div>
    }

    return (
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card bg-dark text-white shadow">
            <div class="card-body">{this.state.carnes}: {this.state.carnesProducts} products</div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card bg-dark text-white shadow">
            <div class="card-body">{this.state.pescados}: {this.state.pescadosProducts} products</div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card bg-dark text-white shadow">
            <div class="card-body">{this.state.pollos}: {this.state.pollosProducts} products</div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card bg-dark text-white shadow">
            <div class="card-body">{this.state.veganos}: {this.state.veganosProducts} products</div>
          </div>
        </div>
      </div>
    );

  }

}

export default CategoriesInDb;
