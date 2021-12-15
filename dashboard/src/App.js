import "./assets/css/app.css";

import SideBar from "./components/sideBar/sideBar";
import TopNavBar from "./components/topNavBar/topNavBar";
import Footer from "./components/footer/footer";

import { Switch, Route } from "react-router-dom";
import ContentWrapper from "./components/contentWrapper/contentWrapper";
import ContentRowTop from "./components/contentWrapper/contentRowTop/contentRowTop";
import MovieInDb from "./components/contentWrapper/movieDetail/movieInDb";
import ProductsInDb from "./components/productsInDb/productsInDb";
import Error404 from "./components/error/error404";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopNavBar />
          <Switch>
            <Route path="/" exact component={ContentWrapper}></Route>
            <Route path="/dbData" component={ContentRowTop}></Route>
            <Route path="/movie" component={MovieInDb}></Route>
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
