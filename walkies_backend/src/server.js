const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
require ('./mongo');
require('dotenv').config()

const UserRouter = require('./routes/User.route');
const OwnerRouter = require('./routes/Owner.route');
const DogRouter = require('./routes/Dog.route');
const WalkerRouter = require('./routes/Walker.route');
const {AuthenticateChecker} = require('./controllers/auth.controller');
const AuthenticateRouter = require('./routes/Authenticate.route');

const AvatarUpload = require('./routes/AvatarUploader');
const avatarFolder = './avatarFolder';
const fs = require('fs');

const cors = require('cors');
const mongoose = require('mongoose');
const db = mongoose.connection;


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

const port = process.env.PORT || 4000;

app.use(session({
    secret: process.env.SECRET,
    name: 'dog lover',
    cookie: { maxAge: 3600000 }, //one hour expiry
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db })
}));

//check for folder to hold avatars, if no folder then create one
if (!fs.existsSync(avatarFolder)){
    fs.mkdirSync(avatarFolder);
}

//
if(process.env.PROD && process.env.PROD === 'TRUE')
{
    app.use(express.static('./walkies_backend/frontend'));
}
    app.use(express.static(avatarFolder));

//routes
app.use('/user', UserRouter);
app.use('/dog', DogRouter);
app.use('/owner', AuthenticateChecker, OwnerRouter)
app.use('/auth', AuthenticateRouter);
app.use('/upload', AvatarUpload);
app.use('/walker', WalkerRouter);

app.use(express.static(avatarFolder));
app.listen(port, () => {console.log(`Listening on port ${port}`)});