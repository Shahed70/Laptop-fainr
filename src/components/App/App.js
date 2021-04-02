import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Deshboard from "../Deshboard/Deshboard";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import CheckOut from "../CheckOut/CheckOut";
import Order from "../Order/Order";
import PrivarRoute from "../PrivarRoute";
export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivarRoute path="/deshboard">
              <Deshboard />
          </PrivarRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/checkout/:id'>
             <CheckOut orderInfo={loggedInUser} />
          </Route>
          <Route path="/order">
             <Order />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
