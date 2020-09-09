const express = require('express');
const { ROUTE_CONTSTANTS } = require('./helpers/route_constants');
const bodyParser = require('body-parser');
const app = express();

// Body parser will intercept the requset and extract the body... 
// Details providing during registration are parsed and extracted from request and print in the console

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) // parse application/json

//route, callback function.
app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    //res.send("<h1>Welcome to Default Page ");
    res.sendFile(__dirname+'/pages/home.html')
});

app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/login.html')
});

app.get(ROUTE_CONTSTANTS.GET_REGISTER,function (req,res){
    res.sendFile(__dirname+'/pages/register.html')
});

app.get(ROUTE_CONTSTANTS.GET_PRODUCTS,function (req,res){
    const productData = [
        {
          "_id": "5f586164d68428b1cf81cbe3",
          "index": 0,
          "guid": "24a8fe7f-696f-43f1-bdbe-4a3aed95c2ab",
          "isActive": true,
          "balance": "$2,164.62",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "green",
          "name": "Franco Douglas",
          "gender": "male",
          "company": "DIGINETIC",
          "email": "francodouglas@diginetic.com",
          "phone": "+1 (989) 593-2908",
          "address": "480 Tapscott Street, Bagtown, Palau, 4339",
          "about": "Fugiat officia fugiat eiusmod id in est amet voluptate. Aute mollit anim fugiat do duis sit pariatur fugiat pariatur. Aliqua culpa minim exercitation consectetur aute. Proident exercitation pariatur velit cupidatat eiusmod enim ad ad laboris adipisicing tempor aliquip sunt. Quis do consectetur et eu culpa ipsum sunt sit duis commodo pariatur ut.\r\n",
          "registered": "2016-05-14T11:21:41 -06:-30",
          "latitude": -43.937848,
          "longitude": 73.030142,
          "tags": [
            "velit",
            "ad",
            "elit",
            "nostrud",
            "officia",
            "fugiat",
            "reprehenderit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Lila Wooten"
            },
            {
              "id": 1,
              "name": "Montgomery Calhoun"
            },
            {
              "id": 2,
              "name": "Summers Juarez"
            }
          ],
          "greeting": "Hello, Franco Douglas! You have 3 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f586164533d753eebd5dfcf",
          "index": 1,
          "guid": "bab8862f-753a-42a1-8f7d-62054530ae08",
          "isActive": false,
          "balance": "$1,664.76",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "brown",
          "name": "Jeri Schneider",
          "gender": "female",
          "company": "COASH",
          "email": "jerischneider@coash.com",
          "phone": "+1 (983) 521-3916",
          "address": "336 Croton Loop, Libertytown, Virgin Islands, 2270",
          "about": "Ad duis ex nostrud sunt amet esse officia et aliquip mollit. Do do dolore et cupidatat aute aliquip anim laboris fugiat anim. In officia consectetur nostrud nostrud consectetur reprehenderit ullamco tempor sit velit reprehenderit est et dolore. Consectetur ipsum incididunt ad eiusmod reprehenderit reprehenderit commodo et duis. Ad est pariatur dolor occaecat reprehenderit cillum anim dolore cupidatat amet ipsum aliqua. Ipsum proident exercitation ipsum dolor non ullamco anim officia aute anim nostrud aute enim id. Ex eu aliqua Lorem labore.\r\n",
          "registered": "2015-08-22T10:52:54 -06:-30",
          "latitude": 5.488254,
          "longitude": 93.856994,
          "tags": [
            "dolor",
            "aliqua",
            "consectetur",
            "cillum",
            "exercitation",
            "ut",
            "eiusmod"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Chapman Rodriquez"
            },
            {
              "id": 1,
              "name": "Bradley Frazier"
            },
            {
              "id": 2,
              "name": "Salazar Alvarez"
            }
          ],
          "greeting": "Hello, Jeri Schneider! You have 4 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f58616413533522d221df36",
          "index": 2,
          "guid": "378761fe-3979-4c97-8c26-1a688f8eb8cc",
          "isActive": false,
          "balance": "$2,370.77",
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "green",
          "name": "William Bolton",
          "gender": "male",
          "company": "ZORK",
          "email": "williambolton@zork.com",
          "phone": "+1 (973) 497-2198",
          "address": "163 Hampton Place, Goldfield, Florida, 4270",
          "about": "Fugiat magna dolor sint mollit anim adipisicing amet non laborum elit voluptate. Consectetur commodo qui ea cupidatat consectetur est excepteur. Veniam laboris commodo adipisicing consectetur. Duis voluptate anim ipsum aliqua do voluptate officia mollit est id sint adipisicing officia. Aute exercitation ipsum consequat consectetur quis culpa nulla tempor elit.\r\n",
          "registered": "2016-06-27T01:55:45 -06:-30",
          "latitude": -52.450465,
          "longitude": 129.350611,
          "tags": [
            "culpa",
            "deserunt",
            "ipsum",
            "consequat",
            "proident",
            "amet",
            "sit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Whitley Barrera"
            },
            {
              "id": 1,
              "name": "Rachael Silva"
            },
            {
              "id": 2,
              "name": "Charity Valdez"
            }
          ],
          "greeting": "Hello, William Bolton! You have 6 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f586164852c2bb4b7cc2c67",
          "index": 3,
          "guid": "686d9acf-b9e6-4793-a0e6-71f5d84f8d9c",
          "isActive": true,
          "balance": "$3,582.00",
          "picture": "http://placehold.it/32x32",
          "age": 20,
          "eyeColor": "brown",
          "name": "Combs Guy",
          "gender": "male",
          "company": "ANARCO",
          "email": "combsguy@anarco.com",
          "phone": "+1 (885) 572-2740",
          "address": "658 Moultrie Street, Kenmar, Vermont, 194",
          "about": "Dolor cupidatat officia esse labore ipsum fugiat ipsum eu fugiat laboris laboris excepteur. Sunt ex pariatur non eiusmod. Et magna excepteur nisi et occaecat incididunt culpa non ipsum non minim irure. Nulla anim mollit eu laborum laboris in et duis eu. Id incididunt nostrud magna et culpa ipsum nulla elit officia.\r\n",
          "registered": "2016-07-18T05:38:07 -06:-30",
          "latitude": 54.172735,
          "longitude": -48.109477,
          "tags": [
            "voluptate",
            "quis",
            "Lorem",
            "do",
            "tempor",
            "qui",
            "duis"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Courtney Ramirez"
            },
            {
              "id": 1,
              "name": "Best Crawford"
            },
            {
              "id": 2,
              "name": "Lorna Terrell"
            }
          ],
          "greeting": "Hello, Combs Guy! You have 6 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5f586164b216b8e429211f1b",
          "index": 4,
          "guid": "95733c03-b618-4e89-8f6b-9f8ccafcd369",
          "isActive": true,
          "balance": "$3,370.85",
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "blue",
          "name": "Antoinette Stevenson",
          "gender": "female",
          "company": "STELAECOR",
          "email": "antoinettestevenson@stelaecor.com",
          "phone": "+1 (813) 570-3110",
          "address": "172 Kings Place, Chamizal, Marshall Islands, 1602",
          "about": "Ut exercitation fugiat consectetur tempor quis. In sit magna occaecat nulla consectetur dolore officia proident dolor laboris labore mollit. Aliqua officia ullamco anim duis magna. Esse consectetur sunt amet exercitation laborum duis exercitation. Aliqua ipsum magna aute et aute magna elit exercitation excepteur ipsum enim excepteur.\r\n",
          "registered": "2020-06-21T05:14:34 -06:-30",
          "latitude": -5.116926,
          "longitude": -51.99242,
          "tags": [
            "id",
            "reprehenderit",
            "aliquip",
            "irure",
            "esse",
            "ullamco",
            "qui"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Moreno Finley"
            },
            {
              "id": 1,
              "name": "Olson Buckley"
            },
            {
              "id": 2,
              "name": "Ramirez Newman"
            }
          ],
          "greeting": "Hello, Antoinette Stevenson! You have 8 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5861649cdb136fc5998a72",
          "index": 5,
          "guid": "f1cebedb-48f8-46d2-b6a0-1daf06b03f49",
          "isActive": true,
          "balance": "$3,357.93",
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "green",
          "name": "Mccormick Thornton",
          "gender": "male",
          "company": "POLARIUM",
          "email": "mccormickthornton@polarium.com",
          "phone": "+1 (916) 450-3199",
          "address": "868 Bassett Avenue, Cataract, North Dakota, 106",
          "about": "Fugiat exercitation adipisicing amet eiusmod ad excepteur nostrud eiusmod pariatur id pariatur. Consequat ullamco labore eu irure nostrud fugiat. Duis dolore reprehenderit aute quis qui aute labore in nisi qui reprehenderit officia.\r\n",
          "registered": "2019-05-18T11:08:07 -06:-30",
          "latitude": 69.554785,
          "longitude": -137.600191,
          "tags": [
            "veniam",
            "nisi",
            "elit",
            "irure",
            "dolore",
            "reprehenderit",
            "sit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Julia Strong"
            },
            {
              "id": 1,
              "name": "Blevins Britt"
            },
            {
              "id": 2,
              "name": "Marisa Sherman"
            }
          ],
          "greeting": "Hello, Mccormick Thornton! You have 1 unread messages.",
          "favoriteFruit": "apple"
        }
      ];
    
      res.json(productData);
    //res.send("<h1>Products Page</h1>");
});

app.get(ROUTE_CONTSTANTS.GET_FILE,function (req,res){
    res.sendFile(__dirname+'/Files/Demo.pdf')
});

app.post(ROUTE_CONTSTANTS.POST_REGISTER,function(req,res){
    console.log(req.body); //req will parsed by body parser and print
    res.send("Successfully registered")
})
app.listen(3000);