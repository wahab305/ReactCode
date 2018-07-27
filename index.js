const  express = require('express'); // require to get access to express library known as common Js Module
require('./models/User');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./services/passport');


mongoose.connect(keys.mongoURI, {
  useMongoClient : true
});

const app = express();  // express handles the http request

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000 ; // whenever heroku runs application it can inject enviroment variable that are done in run time
app.listen(PORT);
