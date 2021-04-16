import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddService from "./components/Dashboard/AddService/AddService";
import Admin from "./components/Dashboard/Admin/Admin";

import Home from "./components/Home/Home/Home";
import Orders from "./components/Home/Orders/Orders";
import PrivateRoute from "./components/Home/PrivateRoute/PrivateRoute";

import Login from "./components/Login/Login";
import Checkout from "./components/Home/Checkout/Checkout";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
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
            <Route path="/admin">
          <Admin></Admin>
          </Route>
          <Route path="/admin/addService">
          <AddService></AddService>
          <PrivateRoute path="/orders/:_id">
            <Orders />
          
          </PrivateRoute>
          
          </Route>
        </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
