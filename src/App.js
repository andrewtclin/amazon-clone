import React, { useEffect } from "react";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HKEQqB6f563rqZKe5MgYt3DJzU9asZ5bCdEnUyfVzseRbsqhXRNrXO4PljF3fQdGo5Ms2DjSys6TLGoMUEcm0fu00iVaqln4g"
); //Public key

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
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* If use exact, only redirect when it is exact */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
