const express = require('express');
const app = express();
const kodersRoutes = require('./routes/koders.route');

app.use( express.json());
app.use('/koders', kodersRoutes )

app.get('/', ( req, res )=>{
    res.json({
        message: "koders APIv1"
    })
})

module.exports = app;