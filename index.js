const  express = require('express'); // require to get access to express library known as common Js Module
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const User = require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();


app.use(bodyParser.json());


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

  // express handles the http request

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000 ; // whenever heroku runs application it can inject enviroment variable that are done in run time
app.listen(PORT);
