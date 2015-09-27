//require http so we can run it on the browser
var http = require('http');

//require the url library to parse the querystring value
var url = require('url');

//start the server
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.write('<h1>Lab 2</h1>');
    res.write('<h2>Karen Springford</h2>');
    
    // get the values from the url queryString
    var qs = url.parse(req.url, true).query;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);
    var method = qs.method;
    var total;
    
    
    //setting the IF statements to the mathematical operations
    if (method === 'multiply'){
        method = '*';
        //setting the total for each operation
        total = x * y;
    }
    
    else if (method === 'add'){
        method = '+';
        total = x + y;
    }
    
    else if (method === 'subtract'){
        method = '-';
        total = x - y;
    }
    
    else if (method === 'divide'){
        method = '/';
        total = x / y;
    }
    //IF statement to use the acceptable operands
    if (method === '+' || method === '-' || method === '*' || method === '/'){
        //write to the screen if correct
        res.write(''+x+' '+method+' '+' '+ y+' = '+total); 
        }
    else { 
        //error statement
        res.write("This is unacceptable input");
    }

    res.end();
}).listen(3000);

    

