import React, {Component} from 'react';
import i1 from "./1.jpg"
import i2 from "./2.jpg"
import "../App.css"

export default class Home extends Component{
	render(){
		return(
			<div className="App">

			<section className="container-fluid px-0">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div id="headingGroup" className="text-white text-center d-none d-lg-block mt-5">
                    <h4 className="">This webstore is an auction site supported by donations and advertisements with no
                        membership fees. Everything is not sold at auction at this site, the site’s online auctions are
                        highly rated for rare and collectible merchandise and state of art electronics.</h4>
                </div>
            </div>
            <div className="col-lg-6">
                <img className="img-fluid" src={i1} alt=""/>
            </div>
        </div>
    </section>

    <section className="container-fluid px-0">
        <div className="row align-items-center content">
            <div className="col-md-6 order-2 order-md-1">
                <img src={i2} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6 text-center order-1 order-md-2">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>Auction Junction</h2>
                        <img src="" alt=""  className="d-none d-lg-inline"/>
                        <i className="fa fa-forumbee" aria-hidden="true"></i>
                        <p className="lead">Get your best deals RIGHT NOW, RIGHT HERE. Participate in our exclusive deals at bay. 
                        From resort bookings, trip tickets, concerts to paintings and antique pieces.
                        ALL just for you. 
                        But hey, they're all really swift to disappear. So make your favourite deal yours before the timer stops ticking!!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row align-items-center content">
            <div className="col-md-6 text-center">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                        <h2>Auction Junction</h2>
                        <img src="" alt="" className="d-none d-lg-inline"/>
                        <i className="fa fa-forumbee" aria-hidden="true"></i>
                        <p className="lead"> Don't forget, the timer is still ticking. GO GO GO!
                        Free registeration, giveaways, and much more</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <img src="dan-gold-N7RiDzfF2iw-unsplash.jpg" alt="" className="img-fluid"/>
            </div>
        </div>
    
    </section>

			</div>

			)
	}

}