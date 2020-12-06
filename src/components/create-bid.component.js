import React, {Component} from 'react';
import axios from 'axios';

export default class CreateBid extends Component{
	constructor(props){
		super(props);
		this.onChangeTitle=this.onChangeTitle.bind(this);
		this.onChangeDesc=this.onChangeDesc.bind(this);
		this.onChangeStart=this.onChangeStart.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.state={
			title: '',
			description: '',
			startprice:0

		}
	}

	onChangeTitle(e)
	{
		this.setState({
			title: e.target.value
		});
		
	}
	onChangeDesc(e)
	{
		this.setState({
			description: e.target.value
		});
		
	}
	
	onChangeStart(e)
	{
		this.setState({
			startprice: e.target.value
		});
		
	}

	

	onSubmit(e)
	{
		e.preventDefault();
		const bid={
			title:this.state.title,
			description:this.state.description,
			startprice:this.state.startprice

		}

		console.log(bid);

		axios.post('/bids/add',bid)
		.then(res=>{console.log(res.data)})
		.catch((err)=>{
			console.log(err)
		});

		this.setState({
			title: '',
			description: '',
			startprice:0
		})
	}



	render(){
		return (
			<div>
			<form onSubmit={this.onSubmit}>
		        <div className="form-group">
		        <label>Title:</label>
		            <input className="form-control" 
		            required
		            type="text" value={this.state.title}
		            onChange={this.onChangeTitle}/>
		        </div>
		        <div className="form-group">
		        <label>Description:</label>
		            <input className="form-control" 
		            required
		            type="text" value={this.state.description}
		            onChange={this.onChangeDesc}/>
		        </div>
		        <div className="form-group">
		        <label>Start Bid:</label>
		            <input className="form-control" 
		            required
		            pattern="[0-9]*"
		            type="number" value={this.state.startprice}
		            onChange={this.onChangeStart}/>
		        </div>
		        <div className="form-group">
		        <input className="btn btn-primary" type="submit" value="Create Bid"/>
		        </div>
		    </form>
		    </div>

			)
	}
}