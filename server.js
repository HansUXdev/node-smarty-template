var  util    = require('util'),
     http    = require('http'),
     nsmarty = require('nsmarty');

// Define the template path
nsmarty.tpl_path = __dirname + '';

///
// Define prototype Data
///
	var $arr = {
		title: 'Test Site',
		books: [
		    {
				title  : 'JavaScript: The Definitive Guide',          
				author : 'David Flanagan',                            
				price  : '31.18'
		    },
		    {
				title  : 'Murach JavaScript and DOM Scripting',
				author : 'Ray Harris'
		    },
		    {
				title  : 'Head First JavaScript',
				author : 'Michael Morrison',
				price  : '29.54'
		    }
		]
	}

///
/// Start Server
///
http.createServer(function (req, res) {
  // assign - parse the template.
  var   stream = nsmarty.assign('index.tpl', $arr);
        util.pump(stream, res); // take place of _display() from PHP Smarty.

}).listen(8000);
console.log("Server started: http://127.0.0.1:8000/");