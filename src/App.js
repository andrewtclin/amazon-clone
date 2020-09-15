import React, { useEffect } from "react";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //using auth from firebase, and this function will listen for the signed in user
    auth.onAuthStateChanged((authUser) => {
      //it will returned an authenticated user, if not, it is null
      console.log("User:", authUser);

      if (authUser) {
        // The user just logged in / was logged in
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []); //With empty array, it will only run once when component renders

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
