import { Link } from "react-router-dom";

import defaultProfilePic from "../../assets/images/default-user.jpg";

export default function TopNavBar(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">

        <li className="nav-item dropdown no-arrow mx-1">
          <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Register
          </span>
          </Link>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <Link className="nav-link dropdown-toggle" to="#" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Login
            </span>
            <img
              className="img-profile rounded-circle"
              src={defaultProfilePic}
              alt=""
              width="60"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
