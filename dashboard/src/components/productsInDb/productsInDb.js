import ContentCard from "../contentWrapper/contentCard/contentCard";
/*import CategoriesInDb from "./categoriesInDb";

function GenresInDb () {
    return(
        <div>
            <ContentCard title="Products in Data Base">
              <CategoriesInDb />
            </ContentCard>
        </div>
    )
}

export default GenresInDb;*/
import React, {Component} from "react";

const productsUrl = "/api/products";

class ProductsInDb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: null
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
    const result = await fetch(productsUrl);
    const response = await result.json();
    const data = await response.data;
    this.setState({products: data});
  };

  render() {

    console.log("%cEvent => Render","color: cyan");

    if(!this.state.products){
      return <div className="row">Loading...</div>
    }

    return (
      <div>
        <ContentCard title="Products in Data Base">
          <div className="row">
            {this.state.products.map((product) => {
              return (
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{product.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </ContentCard>
      </div>
    );

  }

}

export default ProductsInDb;