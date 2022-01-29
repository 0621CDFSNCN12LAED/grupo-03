import React, { useEffect, useState } from "react";

const lastProduct = "/api/products/last-product";

function LastDbProduct(props) {
  const [product, setProduct] = useState([]);

  async function searchProduct () {
		const response = await fetch(lastProduct);
		const result = await response.json();
		setProduct(result.data);
	}

  useEffect( () => {
		searchProduct();
	}, []);
  
  return (
    <>
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={product.image}
          alt={product.name}
        />
      </div>
      <p>
        {product.name}
      </p>
      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/products">
        View movie detail
      </a>
    </>
  );
}

export default LastDbProduct;
