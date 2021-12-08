import React, { useEffect, useState } from "react";
import ValueCard from "./valueCard/valueCard";

const productsUrl = "/api/products";
const usersUrl = "/api/users";

function ContentRowTop() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

	async function searchProducts () {
		const response = await fetch(productsUrl);
		const result = await response.json();
		setProducts(result.meta);
	}

  async function searchUsers () {
		const response = await fetch(usersUrl);
		const result = await response.json();
		setUsers(result.meta);
	}

	useEffect( () => {
		searchProducts();	
    searchUsers();
	}, []);

  return (
    <div class="row">
      <ValueCard
        title="Total Users"
        icon="fa-film"
        color="primary"
        value={users.count}
      />
      <ValueCard
        title="Total Products"
        icon="fa-award"
        color="success"
        value={products.count}
      />
      <ValueCard
        title="Total Categories"
        icon="fa-user"
        color="warning"
        value="49"
      />
    </div>
  );
}

export default ContentRowTop;
