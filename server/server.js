const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // env variable set by heroku

app.use(express.static(publicPath)); // use public directory to serve up assets

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html')); // serve up index.html if resource requested is not in public folder
});

app.listen(port, () => { // start on port 3000
    console.log('server is up');
});
