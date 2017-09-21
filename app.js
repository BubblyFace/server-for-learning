var express = require('express');
var path = require('path')

const app = express();

app.set('views','./views');

// app.post('/test',(req, res)=>{
//     console.log(req)
//     res.send('post request to testPage')
// })

// app.get('/test',(req, res)=>{
//     console.log(req)
//     res.send('post request to testPage')
// })


app.engine('html', require('ejs').renderFile);
app.set('view engine','html');


app.use(express.static(path.join(__dirname, 'src')));
app.get('/', function (req, res) {
  res.render('index');
});


app.get('/test',(req, res)=>{
    console.log(req.params)
    res.send('test1')
})
 

 app.post('/test2',(req, res)=>{
    console.log(req.params)
    res.send('test2')
})

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});