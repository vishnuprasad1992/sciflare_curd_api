const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const orgRoute  = require('./src/routes/organizationRoute');
const userRoute = require('./src/routes/userRoute');
const app = express();


app.use(cors());
app.use(passport.initialize());

require('./src/config/DBConnection');

// include the middle ware
require('./src/middleware')(passport)


const dotenv = require('dotenv');
dotenv.config();

app.use(morgan('combined'))
app.use(express.urlencoded({urlencoded:true}));
app.use(express.json({extended: true}));

app.use('/api',orgRoute)
app.use('/api',userRoute)

app.listen(process.env.PORT,((req,res)=>{
    console.log(`server is running on ${process.env.PORT}`)
}))

