const app = require('express')(),
morgan = require('morgan'),
PORT = process.env.PORT || 8080;

app.use(morgan('dev'));

app.get('/',(req,res) =>{
    res.send('This is the server');
})
app.listen(PORT, () =>{
    console.log(`Listening on PORT ${PORT}`);
})