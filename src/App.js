import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddService from "./components/Home/AddService/AddService";

import Home from "./components/Home/Home/Home";
import PrivateRoute from "./components/Home/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Checkout from "./components/Home/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllOrders from "./components/Home/AllOrders/AllOrders";

import AddReviews from "./components/AddReviews/AddReviews";
import AllServices from "./components/AllServices/AllServices";
import AddUser from "./components/User/AddUser/AddUser";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
    <Router>
      
    <Switch>
    <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/login">
            <Login />
            </Route>
            <PrivateRoute path="/checkout/:_id">
            <Checkout />
            </PrivateRoute>
            <Route path="/bookings">
            <AllOrders />
            </Route>
            <PrivateRoute path="/addUser">
            <AddUser />
          </PrivateRoute>            
          <PrivateRoute path="/addService">
          <AddService/>                
          </PrivateRoute>
          <PrivateRoute path="/addReview">
          <AddReviews/>                
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/manage">
            <AllServices />
          </PrivateRoute>
        </Switch>     
    </Router>
    </UserContext.Provider>
  );
}

export default App;
