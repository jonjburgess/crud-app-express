require('dotenv').config()

var promise = require('bluebird');
var pgp = require('pg-promise')({ promiseLib: promise });
var connectionString = 'postgres://localhost:5432/kittens';
var db = pgp(connectionString);

var algoliasearch = require('algoliasearch');
var client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
var index = client.initIndex('cats');

db.any('select * from cats')
  .then(function (data) {
    var cats = [];

    data.forEach(function(cat) {
        cats.push({
          objectID: cat.id,
          name: cat.name,
          breed: cat.breed,
          age: cat.age,
          sex: cat.sex
        });
    });

    index.addObjects(cats, function(err, content) {
      if (err) {
        console.log(err);
      }
      console.log(content);
      process.exit();
    });
  })
  .catch(function (err) {
    console.log(err);
  });
