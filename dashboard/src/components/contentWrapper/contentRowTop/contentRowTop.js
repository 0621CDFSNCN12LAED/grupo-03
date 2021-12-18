import React, { useEffect, useState } from "react";
import ValueCard from "./valueCard/valueCard";

const productsUrl = "/api/products";
const usersUrl = "/api/users";
const categoriesUrl = "/api/products/categories";
const salesUrl = "/api/sales";

function ContentRowTop() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sales, setSales] = useState([]);

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

  async function searchSales () {
		const response = await fetch(salesUrl);
		const result = await response.json();
		setSales(result.meta);
	}

	useEffect( () => {
		searchProducts();	
    searchUsers();
    searchCategories();
    searchSales();
	}, []);

  return (
    <div className="row">
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
        icon="fa-utensils"
        color="warning"
        value={categories.count}
      />
      <ValueCard
        title="Total Sales"
        icon="fa-hand-holding-usd"
        color="success"
        value={sales.count}
      />
    </div>
  );
}

export default ContentRowTop;
