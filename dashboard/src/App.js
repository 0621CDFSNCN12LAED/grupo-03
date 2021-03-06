import "./assets/css/app.css";

import SideBar from "./components/sideBar/sideBar";
import TopNavBar from "./components/topNavBar/topNavBar";
import Footer from "./components/footer/footer";

import { Switch, Route } from "react-router-dom";
import ContentWrapper from "./components/contentWrapper/contentWrapper";
import Sales from "./components/sales/sales";
import Products from "./components/products/products";
import SoldProducts from "./components/soldProducts/soldProducts";
import SearchProducts from "./components/searchProducts/searchProducts";
import Error404 from "./components/error/error404";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopNavBar />
          <Switch>
            <Route exact path="/" component={ContentWrapper}></Route>
            <Route path="/sales" component={Sales}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/sold-products" component={SoldProducts}></Route>
            <Route path="/search-products" component={SearchProducts}></Route>
            <Route component={Error404}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;