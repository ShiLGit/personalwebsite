const express = require('express');
const app = express();
const CONFIG = require('./config.js');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const authRouter = require('./routers/authRouter');
const cors = require('cors');

try{
    
    mongoose.connect(CONFIG.DB_URI, {
        //avoid deprecation warnings
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    });
    mongoose.connection.once('open', ()=>{
        console.log('CONNECTION ESTABLISHED');
    })
}catch(e){
    console.log("FFS", e);
}

//middleware
app.use(cors());
app.use(express.json());
app.use('/login', authRouter);

app.listen(PORT, ()=>{
    console.log('Running on port ' + PORT);
});
