import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component{
	constructor(){
		super();
		this.onChangeEmail=this.onChangeEmail.bind(this);
		this.onChangePwd=this.onChangePwd.bind(this);
		this.onSubmit=this.onSubmit.bind(this);

		this.state={
			email:'',
			userpassword:'',
			errors:{}
		}
	}
	onChangeEmail(e)
	{
		this.setState({
			email: e.target.value
		})
		
	}
	onChangePwd(e)
	{
		this.setState({
			password: e.target.value
		})
		
	}
	
	
	onSubmit(e)
	{
		e.preventDefault();
		const userData={
			email:this.state.email,
			password:this.state.password
		}
		console.log(userData);

		axios.post('/users/login',userData)
		.then(res=>{console.log(res.data)})
		.catch((err)=>{
			console.log(err)
		});

		this.setState({
			email:'',
			password:'',
			errors:{}
		});
}
		
	render(){
		const {errors}=this.state;
		return (
			<div className="container">
			
			<form onSubmit={this.onSubmit}>
			<div className="form-group">
		       
		         	<label htmlFor="email">Email:</label>
		            <input id="email" className="form-control"
		            error={errors.email}
		            required 
		            type="email" value={this.state.email}
		            onChange={this.onChangeEmail}/>
	
		        </div>
		        
		    <div className="form-group">
		        
		         	<label htmlFor="password">Password:</label>
		            <input  id="password" className="form-control"
		            error={errors.userpassword}
		            required
		            type="password" value={this.state.password}
		            onChange={this.onChangePwd}/>	
		            
		        </div>
		    <div className="form-group">
		    
		        <input className="btn btn-primary" type="submit" value="Log In "
		        />
		        </div>
		    </form>
		    </div>
		   
			)
		}}
	