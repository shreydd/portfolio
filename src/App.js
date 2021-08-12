import "./App.css";
// import Navbar from "./Navbar";
import Home from "./Home";
import Work from "./Work";
import Resources from "./Resources";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./Scrollup";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        <Router>
            <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Work">
              <Work />
            </Route>
            <Route exact path="/Resources">
              <Resources />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
