import React, { useEffect, useState } from "react";

const productUrl = "/api/products/lastproduct";

function ProductDetail(props) {
  const [product, setProduct] = useState([]);

  async function searchProduct () {
		const response = await fetch(productUrl);
		const result = await response.json();
		setProduct(result.data);
	}

  useEffect( () => {
		searchProduct();
	}, []);
  
  return (
    <>
      <div class="text-center">
        <img
          class="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={product.image}
          alt="Star Wars - Mandalorian"
        />
      </div>
      <p>
        {product.name}
      </p>
      <a class="btn btn-danger" target="_blank" rel="nofollow" href="/">
        View movie detail
      </a>
    </>
  );
}

export default ProductDetail;
