var promise = require('bluebird');
var pgp = require('pg-promise')({ promiseLib: promise });
var connectionString = 'postgres://localhost:5432/kittens';
var db = pgp(connectionString);

module.exports = {
  getAllKittens: getAllKittens,
  getSingleKitten: getSingleKitten,
  createKitten: createKitten,
  updateKitten: updateKitten,
  removeKitten: removeKitten
};

function getAllKittens(req, res, next) {
  db.any('select * from cats')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL kittens'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleKitten(req, res, next) {
  var catID = parseInt(req.params.id);
  db.one('select * from cats where id = $1', catID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE kitten'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createKitten(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into cats(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one kitten'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateKitten(req, res, next) {
  db.none('update cats set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated kitten'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeKitten(req, res, next) {
  var catID = parseInt(req.params.id);
  db.result('delete from cats where id = $1', catID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} kitten`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}
