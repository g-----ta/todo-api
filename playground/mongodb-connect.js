// mongoDB v2
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // Insert new doc into Uers (name, age, location)
  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: 'Kota',
  //   age: 27,
  //   location: 'Osaka'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert users', err);
  //   }

  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.collection('Users').find({
    name: 'Kota'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.close();

});



// mongoDB v3
// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     return console.log('Unable to connet to MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
//   const db = client.db('TodoApp');

//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }

//     console.log(JSON.stringify(requlst.ops, undefined, 2));
//   });

//   client.close();
// }