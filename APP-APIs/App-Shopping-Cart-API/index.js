//import framework
const express= require('express');
const jwt = require('jsonwebtoken');
const mongoose= require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');

const userRoute=require('./Routes/UserRoute');
const productRoute=require('./Routes/ProductRoute');

//initialize app
const app=express();

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


mongoose.connect(
    'mongodb://localhost:27017/shop',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    app.listen(3000,()=>{
        console.log('Shopping Cart API is Up & Running');
    })
}).catch(error=>{
    console.log(error);
});

app.use('/api/v1/userRoute',userRoute);
app.use('/api/v1/productRoute',productRoute);


/*app.get('/name',(req, res, next) => {
    res.json({message:"Hi I'm Fucking Here"})
    console.log("Hi I'm Fucking Here")
});*/


