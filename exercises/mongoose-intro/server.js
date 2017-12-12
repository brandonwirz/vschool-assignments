const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/people')

const Schema = mongoose.Schema;

const friendSchema = new Schema({
  name: String,
  age: Number,
  interests: [String],
  friends: [String]
})

//SCHEMA
const Friend = mongoose.model('Friend', friendSchema)

//CREATE
const myFriend = new Friend({
    name: 'JD',
    age: 24,
    interests: ['Music', 'Food'],
    friends: []
})
myFriend.save((err, friend)=>{
    console.log(friend, "Successfully added")
})


// //READ
Friend.find({age: 24}, (err, friends) => {
  console.log(friends);
});


//This will return a maximum of one document:
// Friend.findOne({age: 24},(err, friend) => {
//   console.log(friend);
// });

//UPDATE
Friend.findOne({
       name: 'JD',
       age: 24,
       interests: ['Music', 'Food'],
       friends: []
   }, (err, friend) => {
        friend.age++;
        friend.save((err, new_friend) => {
          console.log(new_friend);
  });
});


//TO DELETE
Friend.findOne({name: "JD"}, (err, friend)=>{
    friend.remove((err, friend)=>{
        console.log(friend, "Successfully removed")
    })
})


//
// Friend.find((err, friends)=>{
//     console.log(friends)
// })

// Friend.findOne({name: 'JD'}, (err, friend) => {
//   friend.remove(err => {
//     console.log('JD is gone');
//   });
// });


































// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/people')
//
// const Schema = mongoose.Schema;
//
// const friendSchema = new Schema({
//   name: {
//         type: String,
//         required: true
//   },
//   username: {
//         type: String,
//         required: true,
//         unique: true
//
//   },
//   gender: {
//       type: String,
//       enum: ["male", "female", "other"]
//   },
//   age: Number,
//   interests: [String],
//   friends: [String]
// })
//
// const Friend = mongoose.model('Friend', friendSchema)
//
// const myFriend = new Friend({
//     name: 'DJ',
//     age: 24,
//     interests: ['Music', 'Food'],
//     friends: []
// })
//
// myFriend.save((err, friend)=>{
//     console.log(friend, "Successfully added")
// })
//
// Friend.findOne({name: "Jack Daniels"}, (err, friend)=>{
//     friend.remove((err, friend)=>{
//         console.log(friend, "Successfully added")
//     })
// })
//
// Friend.find((err, friends)=>{
//     console.log(friends)
// })
