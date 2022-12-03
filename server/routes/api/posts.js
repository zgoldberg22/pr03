const express = require('express'); 

const mongodb = require('mongodb');
// const uri = "mongodb+srv://zgoldberg22:<password>@pr-3.t5pi5dz.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://zgoldberg22:<blHGlN04zNtpmWyh>@pr-3.t5pi5dz.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



//set up router
const router = express.Router(); 

//GET posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection(); 
    res.send(await posts.find({}).toArray()); 
}); 

//Add Post - with post request
router.post('/', async (req,res) => {
  const posts = await loadPostsCollection(); 
   //inserts one record
  await posts.insertOne({
    text: req.body.text, 
    createdAt: new Date(), 
  });

  res.status(201).send(); 
}); 

//Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection(); 
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id)});

  res.status(200).send(); 
})

//connect to database
//username: zgoldberg22
//password: 64LyqnoCB7eHyoiE
async function loadPostsCollection() {
   const {MongoClient, ServerApiVersion} = require('mongodb'); 
   const uri = "mongodb+srv://zgoldberg22:64LyqnoCB7eHyoiE@pr-3.t5pi5dz.mongodb.net/?retryWrites=true&w=majority";
   const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1}); 

   return client.db('pr-3').collection('posts'); 
}

module.exports = router; 