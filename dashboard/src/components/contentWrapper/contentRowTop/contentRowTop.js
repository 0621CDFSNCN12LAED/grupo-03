import React, { useEffect, useState } from "react";
import ValueCard from "./valueCard/valueCard";

const productsUrl = "/api/products";
const usersUrl = "/api/users";
const categoriesUrl = "/api/products/categories";

function ContentRowTop() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

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

  async function searchCategories () {
		const response = await fetch(categoriesUrl);
		const result = await response.json();
		setCategories(result.meta);
	}

	useEffect( () => {
		searchProducts();	
    searchUsers();
    searchCategories();
	}, []);

  return (
    <div class="row">
      <ValueCard
        title="Total Users"
        icon="fa-user"
        color="primary"
        value={users.count}
      />
      <ValueCard
        title="Total Products"
        icon="fa-shopping-cart"
        color="success"
        value={products.count}
      />
      <ValueCard
        title="Total Categories"
        icon="fa-cutlery"
        color="warning"
        value={categories.count}
      />
    </div>
  );
}

export default ContentRowTop;
