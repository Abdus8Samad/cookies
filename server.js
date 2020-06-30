const app = require('express')(),
morgan = require('morgan'),
PORT = process.env.PORT || 8080;

//Request Logger
app.use(morgan('dev'));

///This is the home Route
app.get('/',(req,res) =>{
    res.send('This is the server');
})

//Starting the Server at a PORT
app.listen(PORT, () =>{
    console.log(`Listening on PORT ${PORT}`);
})