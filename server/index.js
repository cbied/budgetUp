require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive')
    app = express(),
    authController = require('./controllers/authController'),
    { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env




app.use(express.urlencoded({ extended: false }));
app.use(express.json());


massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log(`it's ALIVE!`)
    })
    .catch(error => console.log(`oops, you have an error: ${error}`))


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 4 // 1 month
    }
}))

app.post("/register", authController.register);
app.post("/login", authController.login);


app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} is listening`)
})