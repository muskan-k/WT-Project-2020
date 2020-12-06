const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const bidSchema= new Schema({
	title: {type: String, required:true, minlength:2, trim:true},
	description: {type: String, required:true, minlength:10, trim:true},
	startprice:{type: Number, required:true, default:0},
	currentprice:{type:Number,required:true,default:0}
	
	
},{
	timestamps:true,
});

const Bid=mongoose.model('Bid',bidSchema);

module.exports=Bid;
