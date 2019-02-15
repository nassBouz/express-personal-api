// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
const db = require('./models');

const myList = [{
    description:"iPhone X (64GB) - Space Gray " ,
    price:"929.60",
    amazonLink:"https://www.amazon.com/Apple-iPhone-Space-Gray-Unlocked/dp/B079C6MGBR/ref=sr_1_2_sspa?keywords=iphone&qid=1550189644&s=beauty&sr=1-2-spons&psc=1",
    },
    {
    description:"Women Summer Dress,Todaies Women Vintage Bodycon Sleeveless Dress Casual Retro Evening Party Prom Swing Dress 2018 " ,
    price:"20.99",
    amazonLink:"https://www.amazon.com/Clearance-Dress-Todaies-Vintage-Sleeveless/dp/B07BDMCD9D/ref=sr_1_2?crid=2LGT8PSB09EL9&keywords=dresses+for+women+2018&qid=1550192746&s=beauty&sprefix=DRESS%2Cbeauty%2C209&sr=1-2",
    },
    {
    description:"Women Summer Dress,Todaies Women Vintage Bodycon Sleeveless Dress Casual Retro Evening Party Prom Swing Dress 2018 " ,
    price:"20.99",
    amazonLink:"https://www.amazon.com/Clearance-Dress-Todaies-Vintage-Sleeveless/dp/B07BDMCD9D/ref=sr_1_2?crid=2LGT8PSB09EL9&keywords=dresses+for+women+2018&qid=1550192746&s=beauty&sprefix=DRESS%2Cbeauty%2C209&sr=1-2",
    }
    ]

// db.WList.create(myList, (err, savedList) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log(`saved new item : ${savedList}`);
// });

// // remove all records that match {} -- which means remove ALL records
// db.Book.deleteMany({}, function(err, books){
//     if(err) {
//       console.log('Error occurred in remove', err);
//     } else {
//       console.log('removed all books');
  
//       // create new records based on the array books_list
//       db.Book.create(books_list, function(err, books){
//         if (err) { return console.log('err', err); }
//         console.log("created", books.length, "books");
//         process.exit();
//       });
//     }
//   });

  // remove all records that match {} -- which means remove ALL records
db.WList.deleteMany({}, function(err, lists){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all books');
  
      // create new records based on the array books_list
      db.WList.create(myList, function(err, lists){
        if (err) { return console.log('err', err); }
        console.log("created", lists.length, "item");
        process.exit();
      });
    }
  });