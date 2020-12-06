import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
//import { subscribeToTimer } from './api';
import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import CreateBid from "./components/create-bid.component";
import Login from "./components/login.component";
import Contact from "./components/contact"
import ProductList from "./components/product-list"
import Home from "./components/home.component"

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
  	<br/>
    <Route path="/home" component={Home}/>
    <Route path="/user" component={CreateUser}/>
    <Route path="/bid" component={CreateBid}/>
    <Route path="/login" component={Login}/>
   
    <Route path="/contact" component={Contact}/>
    <Route path="/product" component={ProductList}/>
      </div>
    </Router>
  );
}

export default App;
