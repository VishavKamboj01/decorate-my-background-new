import "./App.css";
import Wallpapers from "./Components/Wallpapers/Wallpapers";
import { Route, Switch, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Components/Categories/Categories";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/wallpapers/category/:id" component={Wallpapers} />
          <Route path="/wallpapers" component={Wallpapers} />
          <Route path="/categories" component={Categories} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
