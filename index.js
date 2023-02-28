const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const singleRoom = require('./data/singleRoom.json');
const doubleRoom = require('./data/doubleRoom.json');
const familyRoom = require('./data/familyRoom.json');


app.get('/', (req, res) => {
    res.send('Burj Al Arab API Running');
});

app.get('/room-categories', (req, res) => {
    res.send(categories);
})
app.get('/book/1', (req, res) => {
    res.send(singleRoom);
})
app.get('/book/2', (req, res) => {
    res.send(doubleRoom);
})
app.get('/book/3', (req, res) => {
    res.send(familyRoom);
})

app.listen(port, () => {
    console.log('Burj Al Arab Server Running On Port', port);
})