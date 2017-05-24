# Kitten Api

## Setup
```
git clone git@github.com:jonjburgess/crud-app-express.git
cd crud-app-express
npm install
npm run setup
npm start
```

## GET All kittens
```
http://localhost:3000/api/kittens
```
will return....
```
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Finlay",
      "breed": "Siamese",
      "age": 5,
      "sex": "F"
    }
  ],
  "message": "Retrieved ALL kittens"
}
```

## GET Single kittens
```
http://localhost:3000/api/kittens/1
```
will return....
```
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "Sophia",
    "breed": "Abyssinian",
    "age": 12,
    "sex": "F"
  },
  "message": "Retrieved ONE kitten"
}
```

## POST Create kitten
```
$ curl --data "name=Jamie&breed=Tabby&age=6&sex=M" http://127.0.0.1:3000/api/kittens
```
will return....
```
{
  "status": "success",
  "message": "Inserted one kitten"
}
```

## PUT Update kitten
```
$ curl -X PUT --data "name=Sophia&breed=Abyssinian&age=8&sex=F" http://127.0.0.1:3000/api/kittens/1
```
will return....
```
{
  "status": "success",
  "message": "Updated kitten"
}
```

## DELETE Remove kitten
```
$ curl -X DELETE http://127.0.0.1:3000/api/kittens/1
```
will return....
```
{
  "status": "success",
  "message": "Removed 1 kitten"
}
```
