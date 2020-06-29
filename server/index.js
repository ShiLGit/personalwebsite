const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Running on port ' + PORT);
});

app.get('/', (req, res)=>{
    console.log("wtf");
    res.send("HI");
});