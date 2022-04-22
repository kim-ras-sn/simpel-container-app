const express = require('express');
const app = express();
const port = 8080;

app.use("/styles",express.static(__dirname + "/styles"));
app.use("/images",express.static(__dirname + "/images"));

app.listen(port, () => {
console.log('listening for request on port ${port}');
});

app.get('/', (req, res) => {
console.log('root request made');
res.sendFile("./http/index.html", { root: __dirname })
});

app.get('/about', (req, res) => {
    console.log('About request made');
res.sendFile('./http/about.html', { root: __dirname });
});

app.get('/about-us', (req, res) => {
res.redirect('/about');
});

app.use((req, res) => {
res.status(404).sendFile('./http/404.html', { root: __dirname });
});