import React, {Component} from 'react';

import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  
} from 'reactstrap';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Cardholder extends Component {


  constructor(){
    super();
    this.onChangeBid=this.onChangeBid.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
      bid:0,
      startprice:0,
      errors:{}
    }
  }
  onChangeBid(e)
  {
    console.log(this.state.startprice)
    this.setState({
      bid: e.target.value
    });
   
    
    
  }
  componentDidMount(e)
  {
    this.setState({
      startprice:this.props.startprice
    })
  }


  onSubmit(e)
  {
    e.preventDefault();
    const bidInput={
      bid:this.state.bid}
       if(this.state.bid<this.state.startprice)
       {document.getElementById("error").innerHTML="Bid value must be greater than current price"; }
    
    console.log(bidInput);
    document.getElementById("current").innerHTML=`Current bid: ${bidInput.bid}`;
    this.setState({
    bid:0})
  }

  render(){
    return (
        
    
        
        <Card>
          <CardImg top width="10%" src={this.props.image} alt="Card image cap" />
          <CardBody>
            <CardTitle><h1>{this.props.name}</h1></CardTitle>
            <CardSubtitle>{this.props.startprice}</CardSubtitle>
            <CardText>{this.props.description}</CardText>
            <CardText id="current"></CardText>
            <div id="error"></div>
           
            <Route render={({ history}) => (
              <div id="expire">
            <form id="form" onSubmit={this.onSubmit}>
              <label>Bid</label><br/>
              <input type="number" id="bid" required value={this.state.bid}
              onChange={this.onChangeBid}/>
              <br/>
              <input type="submit" onClick={this.onSubmit} value="Submit"/>
            </form>
             
             </div>
            )} />
          </CardBody>
        </Card>
  
    );
  };
}

Cardholder.propTypes = {
  name: PropTypes.string
};

Cardholder.propTypes = {
  description: PropTypes.string
};

Cardholder.propTypes = {
  image: PropTypes.string
};

Cardholder.propTypes = {
  click: PropTypes.string
};
