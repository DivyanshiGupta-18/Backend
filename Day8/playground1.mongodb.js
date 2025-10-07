
use('SigmaDatabase');
// Insert a few documents into the courses collection.
db.getCollection('sales').insertMany([
  {
  "courses": [
    {
      "name": "java",
      "price": "20000",
      "master": "harry bhaii"
    },
    {
      "name": "python",
      "price": "15000",
      "master": "code with anuj"
    },
    {
      "name": "reactjs",
      "price": "25000",
      "master": "vinit tyagi"
    },
    {
      "name": "nodejs",
      "price": "22000",
      "master": "aman dhattarwal"
    },
    {
      "name": "mern stack",
      "price": "30000",
      "master": "technical thapa"
    },
    {
      "name": "cloud computing",
      "price": "40000",
      "master": "apna college"
    },
    {
      "name": "data structures",
      "price": "18000",
      "master": "love babbar"
    },
    {
      "name": "machine learning",
      "price": "45000",
      "master": "krish naik"
    },
    {
      "name": "cyber security",
      "price": "35000",
      "master": "hitesh chaudhary"
    },
    {
      "name": "devops",
      "price": "38000",
      "master": "kunal kushwaha"
    }
  ]
}

]);



// Print a message to the output window.
console.log(`Done Inserting Data`);
