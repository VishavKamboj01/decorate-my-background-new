import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import { Route, Switch, HashRouter } from "react-router-dom";
import Wallpapers from "./Components/Wallpapers/Wallpapers";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Components/Categories/Categories";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);

      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <HashRouter>
        <Navbar currentUser={currentUser} />
        <Switch>
          <Route
            path="/wallpapers/category/:id"
            render={(props) => (
              <Wallpapers currentUser={currentUser} {...props} />
            )}
          />
          <Route
            exact
            path="/wallpapers"
            render={(props) => (
              <Wallpapers currentUser={currentUser} {...props} />
            )}
          />
          <Route path="/categories" component={Categories} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/:user" component={Home} />
          <Route
            exact
            path="/"
            render={(props) => <Home currentUser={currentUser} {...props} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
