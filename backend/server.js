const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const passport=require("passport")
const users=require("./routes/users")
require('dotenv').config();

const app= express();


app.use(cors());
app.use(express.json());

const db=require("./config/keys").mongoURI;
mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true})
	.then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


app.use(passport.initialize());

require("./config/passport")(passport);


const port= process.env.PORT || 5000;

const bidsRouter= require('./routes/bids');
const usersRouter = require('./routes/users');


app.use('/users',usersRouter);
app.use('/bids',bidsRouter);


app.listen(port, ()=> {
	console.log(`server on: ${port}`);
});