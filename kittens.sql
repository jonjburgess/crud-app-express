DROP DATABASE IF EXISTS kittens;
CREATE DATABASE kittens;

\c kittens;

CREATE TABLE cats (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO cats (name, breed, age, sex)
  VALUES ('Finlay', 'Siamese', 5, 'F');
