import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import User from "./Components/User";
function App() {
  const [isLogIn, setLogin] = React.useState(false);
  function handleClick() {
    setLogin(!isLogIn);
  }

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/john">User John</Link>
          </li>
          <li>
            <Link to="/user/peter">User Peter</Link>
          </li>
        </ul>
        <button type="submit" onClick={handleClick}>
          {isLogIn ? "Log Out" : "Log In"}
        </button>

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <h1>Hello world</h1>;
            }}
          />
          <Route
            exact
            path="/about"
            render={() => {
              return <h1>Hello about</h1>;
            }}
          />
          <Route
            exact
            path="/user/:username"
            // component={User}
            render={({ match }) => {
              return isLogIn ? (
                <User match={match.params.username} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
