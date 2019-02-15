// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

 const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    nassimaMyEndpoints: true, 
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/nassBouz/sf-wdi-51-assignments/express-personal-api/README.md", 
    baseUrl: "https://obscure-shore-80964.herokuapp.com",
    endpoints: [
      {
        method: "GET", 
        path: "/api", 
        description: "Describes all available endpoints"
      },
      {
        method: "GET",
        path: "/api/profile", 
        description: "Data about me : who am I ?"
      }, 
      {
        method: "GET",
        path: "/api/wishList",
        description: "Display all my wish list"
      },
      {
        method: "POST",
        path: "/api/wishList",
        description: "Add an item to my wish list"
      } ,
      {
        method: "PUT",
        path: "/api/wishList/:id",
        description: "Edit a previous item in my wish list and display it"
      } ,
      {
        method: "DELETE",
        path: "/api/wishList/:id",
        description: "Delete an item from my wish list"
      }
    ]
  })
});
 
app.get('/api/profile', function(req, res){
  //res.send("starting my profile");
  res.json({
    name:"nassima",
    gitHubUsername: "nassBouz",
    githubLink:"https://github.com/nassBouz/sf-wdi-51-assignments",
    githubProfileImage: "https://github.com/settings/profile",
    personalSiteLink: " https://nassbouz.github.io/NB-Project00",
    currentCity:"San Francisco",
    citiesBeenTo:[{name:"Algiers", contry:"Algeria"},{ name:"Paris", contry:"France"},
    {name:"Madrid",contry:"Spain"}]
  })
});
/**********
 * SERVER *
 **********/


 /// -----------display my wish list--------------
app.get('/api/wishList', (req, res) => {
  // send all books as JSON response
  db.WList.find({}, (err, wishlist) => {
      if (err) { return console.log("index error: " + err); }
      res.json(wishlist);
  });
});

/// -------------- add an item to my wish list-------------
app.post('/api/wishList',(req, res) =>{
  let newItem = new db.WList({
     description : req.body.description,
     price : req.body.price,
     amazonLink : req.body.amazonLink
  });
   
    newItem.save(function(err, wList){
      if (err) {
        return console.log("save error: " + err);
      }
      console.log("saved ", wList.description);
      // send back the book!
      res.json(newItem);
    })
  });
  
// -------------------- update an item ------------------------
app.put('/api/wishList/:id', function(req, res) {
  // get ietm id from url params (`req.params`)
  let itemId = req.params.id;   
  // get update body from req.body
  let updateBody = req.body;
  console.log("item to edit: ", req.body);

  // find and update the todos's attributes
  db.WList.findOneAndUpdate(
      { _id: itemId }, // search condition
      updateBody, // new content you want to update
      {new:true}, // you want to receive the new object
      (err, updatedlist) => { // callback
      if(err) { return console.log(err) }
      res.json(updatedlist);
  });
});

// delete todo
app.delete('/api/wishList/:id', (req, res) => {
  // get todo id from url params (`req.params`)
  let itemId = req.params.id;

  // find todo in db by id and delete
  db.WList.findOneAndRemove(
      { _id: itemId },
      (err, deletedItem) => {
          if(err) { return console.log(err) }
          res.json(deletedItem);
  });
});




// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
