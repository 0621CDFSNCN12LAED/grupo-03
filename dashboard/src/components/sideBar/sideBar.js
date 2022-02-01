import React from "react";
import { Link } from "react-router-dom";

import logoMorfi from "../../assets/images/dh-morfi-logo-white.png";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logoMorfi} alt="Digital House" />
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" exact to="/" >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Actions</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/sales">
          <i className="fas fa-fw fa-hand-holding-usd"></i>
          <span>Sales</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-shopping-cart"></i>
          <span>Products</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/sold-products">
          <i className="fas fa-fw fa-cart-arrow-down"></i>
          <span>Sold Products</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="#">
          <i className="fas fa-fw fa-cart-plus"></i>
          <span>Create Product</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/search-products">
          <i className="fas fa-fw fa-search"></i>
          <span>Search Products</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
