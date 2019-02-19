// This file allows us to seed our application with data
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
    description:"Chromebook " ,
    price:"1002.99",
    amazonLink:"https://www.amazon.com/dp/B01N5G5PG2?aaxitk=lTzsK32hBWW3Mo9OuI6b3A&pd_rd_i=B01N5G5PG2&pf_rd_p=e037c154-e093-48a4-b127-477e5e294e3f&hsa_cr_id=3360553210501&sb-ci-n=productDescription&sb-ci-v=ASUS%20C302CA-DHM4%20Chromebook%20Flip%2012.5-inch%20Touchscreen%20Convertible%20Chromebook%2C%20Intel%20Core%20m3%2C%204GB%20RAM%2C%2064GB%20Flash%20Storage%2C%20All-Metal%20Body%2C%20USB%20Type%20C%2C%20Corning%20Gorilla%20Glass%2C%20Chrome%20OS&sb-ci-a=B01N5G5PG2",
    }
    ]


  // remove all records that match {} -- which means remove ALL records
db.WList.deleteMany({},(err, lists)=>{
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all item from the wish list');
      // create new records based on the array books_list
      db.WList.create(myList, (err, lists)=>{
        if (err) { return console.log('err', err); }
        console.log("created", lists.length, "items");
        process.exit();
      });
    }
  });