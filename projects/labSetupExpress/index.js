const express = require('express');
const app = express();
const PORT = 3000;
const hostname = 'localhost';
app.get('/', (req, res) => {
    res.send('Hello');
});
app.get('/', (req, res) => {
    res.send('Hello');
});
app.get('/puppies', (req, res) => {
    res.send('puppies');
});

app.listen(PORT, () => {
    console.log(`server listening on host: ${hostname} port: ${PORT}`);
});

// app.get('/', (req, res) => {
//   res.send(`
//   <html>
//   <head>
//     <title>My site</title>
//   </head>
//   <body>
//     <h1>Hello World</h1>
//   </body>
//  </html>
// `);
// });

// app.get('/puppies', (req, res) => {
//             res.send( < h1 > puppies < /h1>);
//             });

//         app.get('/kittens', (req, res) => {
//                 res.send( < h1 > kittens < /h1>);
//                 });

//