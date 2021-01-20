// Imports
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// CSS
import "./App.css";
// Components
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import ExpenseEntry from "./components/ExpenseEntry";
import EditExpense from "./components/EditExpense"
import Dashboard from "./components/Dashboard";
import Budget from "./components/Budget";
import Blogpost from "./components/Blogpost";
import Blog from "./components/Blog"
import ExpenseBreakdown from "./components/ExpenseBreakdown"


const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("jwtToken");
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem("jwtToken")) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);
  const nowCurrentUser = (userData) => {
    console.log("nowCurentUser is here...");
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                nowCurrentUser={nowCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
                user={currentUser}
              />
            )}
          />
          <Route path="/about" component={About} />
          <PrivateRoute
            path="/profile"
            component={Profile}
            user={currentUser}
          />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/expenseentry" component={ExpenseEntry} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path='/budget' component={Budget} />
          <Route exact path="/blogpost" component={Blogpost} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/expensebreakdown" component={ExpenseBreakdown} />
          <Route exact path="/editexpense/:id" component={EditExpense} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
export default App;
