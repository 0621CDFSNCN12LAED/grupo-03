import React from "react";
import logoMorfi from "../../assets/images/dh-morfi-logo-white.png";

import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logoMorfi} alt="Digital House" />
        </div>
      </a>

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
        <Link className="nav-link" to="/dbData">
          <i className="fas fa-fw fa-folder"></i>
          <span>Data</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/movie">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Movie</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-table"></i>
          <span>Products</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
