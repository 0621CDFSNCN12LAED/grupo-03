import "./assets/css/app.css";

import SideBar from "./components/sideBar/sideBar";
import TopNavBar from "./components/topNavBar/topNavBar";
import Footer from "./components/footer/footer";

import { Switch, Route } from "react-router-dom";
import ContentWrapper from "./components/contentWrapper/contentWrapper";
import ContentRowTop from "./components/contentWrapper/contentRowTop/contentRowTop";
import ProductInDb from "./components/contentWrapper/productDetail/productInDb";
import ProductsInDb from "./components/productsInDb/productsInDb";
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
            <Route path="/dbData" component={ContentRowTop}></Route>
            <Route path="/movie" component={ProductInDb}></Route>
            <Route path="/products" component={ProductsInDb}></Route>
            <Route component={Error404}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
