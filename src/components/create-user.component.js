import React, {Component} from 'react';

import axios from 'axios';
export default class CreateUser extends Component{
	constructor(props){
		super(props);
		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);

		this.state={
			name:'',
			email:'',
			password:'',
			errors:{}
		}
	}
	
	onChange(e){
		this.setState({ [e.target.id]: e.target.value });
	}
	onSubmit(e)
	{
		e.preventDefault();
		const userObj={
			name:this.state.name,
			email:this.state.email,
			password:this.state.password
		};
		
		console.log(userObj);

		axios.post('/users/add',userObj)
		.then(res=>{console.log(res.data)})
		.catch((err)=>{
			console.log(err)
		});

		this.setState({
			name:'',
			email:'',
			password:'',
			errors:{}
		})
	}

	
	render(){
		const {errors}=this.state;
		return (
			<div className="container">
			
			<form  onSubmit={this.onSubmit}>
			 <div className="form-group">
		      
		            <input className="form-control"
		            id="name"
		            required
		            error={errors.name}
		            type="text" value={this.state.name}
		            onChange={this.onChange}/>
		            <label htmlFor="name">Name:</label>
		        	
		            
		    </div>
		        <div className="form-group">
		         	
		            <input id="email" className="form-control"
		            error={errors.email}
		            required
		            type="email" value={this.state.email}
		            onChange={this.onChange}/>
		            <label htmlFor="email">Email:</label>
		        </div>
		        <div className="form-group">
		         	
		            <input id="password" className="form-control"
		            error={errors.password} 
		            required
		            type="password" value={this.state.password}
		            onChange={this.onChange}/>
		            <label htmlFor="password">Password:</label>
		        </div>
		    	<div className="form-group">
		        <input className="btn btn-primary" type="submit" value="Sign Up"
		        />
		        </div>
		    </form>
		    </div>
		 
		 

			)
	}

}


