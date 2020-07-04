const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require('./routers/authRouter');
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());
app.use('/login', authRouter);

app.listen(PORT, ()=>{
    console.log('Running on port ' + PORT);
});
