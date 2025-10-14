// CRUD Operations
use("CrudDb")

db.createCollection("courses")

db.courses.insertOne({
    name: " harry bhai web dev free course",
    price: 0,
    assignment: 12,
    projects:45
})



// Insert function


db.courses.insertMany(
[
    {
      "name": "Harry Bhai Web Dev Free Course",
      "price": 0,
      "assignment": 12,
      "projects": 45
    },
    {
      "name": "CodeWithAnuj Python Bootcamp",
      "price": 0,
      "assignment": 10,
      "projects": 30
    },
    {
      "name": "Thapa Technical MERN Stack",
      "price": 0,
      "assignment": 15,
      "projects": 40
    },
    {
      "name": "Apna College Cloud Basics",
      "price": 0,
      "assignment": 8,
      "projects": 25
    },
    {
      "name": "Love Babbar DSA Playlist",
      "price": 0,
      "assignment": 20,
      "projects": 50
    },
    {
      "name": "Hitesh Choudhary JavaScript Mastery",
      "price": 0,
      "assignment": 14,
      "projects": 35
    },
    {
      "name": "Kunal Kushwaha DevOps for Beginners",
      "price": 0,
      "assignment": 9,
      "projects": 28
    },
    {
      "name": "Telusko Java Full Course",
      "price": 0,
      "assignment": 11,
      "projects": 32
    },
    {
      "name": "Krish Naik Machine Learning Crash Course",
      "price": 0,
      "assignment": 13,
      "projects": 38
    },
    {
      "name": "CodeWithHarry Git & GitHub Tutorial",
      "price": 0,
      "assignment": 7,
      "projects": 20
    }
  ]
)

let a = db.courses.find({price : 0})
console.log(a.toArray())

let b = db.courses.findOne({price: 0})

console.log(b)


// UPDATE

db.courses.updateOne({price: 0},
    {$set: {price: 100}}
)

db.courses.updateMany({price: 0},
    {$set: {price: 146}}
)


// UPDATE



db.courses.deleteOne({price: 100})

db.courses.deleteMany({price: 146})