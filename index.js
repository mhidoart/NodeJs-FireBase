
const express = require('express');
const cors = require('cors');
const config = require('./config');
const studentRoutes = require('./routes/student-routes');

const app = express();

app.use(express.json());
app.use(cors());


app.use('/api', studentRoutes.routes);

app.listen(config.port, () => {
    console.log('App is listning to ' + config.port);
})