const express = require('express');
const mongoose = require('mongoose');
const Yoga = require('./models/yogaSchema');
const path = require('path');
require('dotenv').config();
//mongodb://localhost:27017/yoga

mongoose.connect('mongodb+srv://newuser:Kh1fB9OgjZAKEl4Q@cluster0.oadkk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('yoga.html');
})

app.post('/', async (req, res) => {
    const yoga = new Yoga(req.body.yoga);
    await yoga.save();
    res.render('yoga.html');
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})