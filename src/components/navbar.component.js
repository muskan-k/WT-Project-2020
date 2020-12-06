import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import index from './index.html'


export default class Navbar extends Component{
	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			
			  <div className="collapse navbar-collapse">
			  	Auction Junction
			    <ul className="navbar-nav">
				  <li className="nav-item">
			        <Link to="/home" className="nav-link">Home</Link>
			      </li>
			      <li className="nav-item">
			        <Link to="/user" className="nav-link">User</Link>
			      </li>
			      <li className="nav-item">
			        <Link to="/bid" className="nav-link" >Bid</Link>
			      </li>
			      <li className="nav-item">
			        <Link to="/login" className="nav-link" >Log in</Link>
			      </li>
			       <li className="nav-item">
			        <Link to="/product" className="nav-link" >Live Auctions</Link>
			      </li>
				  <li className="nav-item">
			        <Link to="/contact" className="nav-link" >Contact</Link>
			      </li>
				 
				  
			    </ul>
			  </div>
			</nav>



			);
	}
}