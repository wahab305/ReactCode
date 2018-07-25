const  express = require('express'); // require to get access to express library known as common Js Module
const app = express();  // express handles the http request

app.get('/', (req, res) => {
    res.send({Hi : "there"});
});

const PORT = process.env.PORT || 5000; // whenever heroku runs application it can inject enviroment variable that are done in run time 
app.listen(5000);
