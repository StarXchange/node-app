const http = require('http');
http.createServer((req, res) => {
    //create route
    if (req.url === '/about') {
    res.write('Welcome to about page');
    res.end();
    } else if (req.url === '/contact') {
    res.write('Welcome to contact page');
    res.end();
    } else {
    res.write('StarXchange is here!');
    res.end();
    }
}).listen(5050, () => {
    console.log('Server running on http://localhost:5050');
});
