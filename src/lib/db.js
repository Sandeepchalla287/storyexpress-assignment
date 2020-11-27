var mongoose = require('mongoose');
module.exports = function(app)
{ 
  mongoose.connect('mongodb://localhost/movies', {
  mongoose: { safe: true
}
}, function(err) { if (err) 
{
  return console.log('Mongoose - connection error:', err);
}
});
return mongoose; 
};