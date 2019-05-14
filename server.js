var express = require('express'),
    resturants = require('./js/resturants'),
    app = express();

app.use(express.static('www'));

app.get('/resturants', resturants.findAll);
app.get('/resturants/:id', resturants.findById);
app.get('/resturants/:id/resturantsbhs', resturants.findresturantsbhs);
app.set('port', process.env.PORT || 8001);
app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});