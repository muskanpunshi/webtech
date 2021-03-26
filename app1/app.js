var http = require('http')
var module=require('./myfirstmodule')


http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hi i am '+module.givename('Muskan Punshi.'))
      res.write('\n Currently the date and time is '+module.providedate())
      res.end  ('\nThe End');
}).listen(8080, ()=>{
    console.log("the server is running on port no. 8080")
})
