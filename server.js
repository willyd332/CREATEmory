const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const session = require('express-session');

const app = express();

require('./db/db');

const normalRouter = require('./controllers/normalRouter');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', normalRouter);

let port = process.env.PORT;
if (!process.env.PORT) {port = 3000;}

app.listen(port, function()
{
	console.log(`Server is listening on port ${port}`);
});