var express =require('express');

var app= express();
const port=5000;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use('/login',require('./routes/Login'))

app.listen(port, console.log(`Server on ${port}`));