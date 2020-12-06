import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import Cardholder from './Cardholder';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import Timer from "./timer.component"

export default class Products extends Component{
	render(){
		
		return(
			<div>
			<Timer timeTillDate="12 12 2020, 1:37 am" timeFormat="MM DD YYYY, h:mm a" />
				<Row>
					<Col md={4}>
		  				<Cardholder name="Resort bookings for 4" startprice="$100" description="Enjoy your trip to one of the best resorts. Destination:Goa" image={image1}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Gardening set" startprice="$70" description="Comes with all necessary gardening tools with organic fertilizer for free" image={image2}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Kids playset" startprice="$20" description="Includes some of the most enjoyable items worth your child's time" image={image3}/>
		  			</Col>
		  		</Row>
		  		<Row className="row">
					<Col md={4}>
		  				<Cardholder name="Boat builder" startprice="$50" description="Informative guide on how to build a simple boat" image={image4}/>
		  			</Col>
			  		<Col md={4}>
			  			<Cardholder name="Canvas painting" startprice="$200" description="One of a kid painting by your top artist" image={image5}/>
			  		</Col>
			  		
		  		</Row>
			</div>
		);
	}
}

