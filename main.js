// console.log("Hello, World!");
// console.log("sam is here");
// const http = require("http");
// const randomQuotes = require("random-quotes");

// randomQuotes();
const fs = require('fs');

//read input.txt
// const data = fs.readFileSync('input.txt', 'utf8');
fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
})

console.log('Program Ended');
