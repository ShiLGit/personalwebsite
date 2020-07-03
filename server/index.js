const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require('./routers/authRouter');
const cors = require('cors');

app.use(cors);

app.use('/login', authRouter);
app.listen(PORT, ()=>{
    console.log('Running on port ' + PORT);
});
