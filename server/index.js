const express = require('express');
const app = express();
const CONFIG = require('./config.js');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const authRouter = require('./routers/authRouter');
const projRouter = require('./routers/projRouter');
const cors = require('cors');


//middleware
app.use(cors());
app.use(bodyParser());
app.use(express.json());
app.use('/admin', authRouter);
app.use('/projects', projRouter);
//db connection
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

app.listen(PORT, ()=>{
    console.log('Running on port ' + PORT);
});
