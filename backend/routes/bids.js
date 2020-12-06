const router=require('express').Router();
let mongoose=require('mongoose');

let Bid=require('../models/bid.model');

router.route('/').get((req, res) => {
  Bid.find()
    .then(bids => res.json(bids))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req,res)=>{
	const title=req.body.title;
	const description=req.body.description;
	const startprice=Number(req.body.startprice);

	const newBid=new Bid({
		
		title,
		description,
		startprice
	});

	newBid.save()
	.then(()=> res.json('Bid added'))
	.catch(err=>res.status(400).json('Error: '+err));
});



module.exports=router;