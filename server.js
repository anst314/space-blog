const express = require('express')
require('dotenv').config();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express()
const User = require('./models/UserModel');
const Blog = require('./models/BlogModel');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function createJWT(user) {
  return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

app.post('/api/users', function (req, res) {
    console.log('Here')
    console.log(req.body)
    const newUser = new User(req.body)
    newUser.save().then((user) => {
      console.log(user)
         //* creating a new jwt
         const token = createJWT(user);
         console.log(token)
      res.json({token})
    })

})

app.delete('/api/delete/:id', function (req, res) {
  console.log(req.params)
  Blog.findByIdAndDelete(req.params.id).then(function(data) {
    console.log(data)
    res.send('deleting!')
  })
})

app.get('/api/blog/:id', function(req, res){
  Blog.findById(req.params.id).then(function(data) {
    console.log(data)
    res.json(data)
  })
}) 
app.post('/api/createBlog', function (req, res) {
  console.log(req.body)
  const newBlog = new Blog(req.body)
  
  newBlog.save().then((blog) => {
    console.log(blog)
    res.send('My message here!') 
  })
})

app.post('/api/editBlog/:id', function(req, res){
  Blog.findByIdAndUpdate(req.params.id, req.body).then((blog) => {
    console.log(blog)
    res.send('My message here!') 
  })
})
app.get('/api/blogs', function (req, res) {
  Blog.find({}).then(function(blogs) {
    console.log(blogs)
    res.json({blogs})
  })
})
app.listen(3001, () => {
    console.log('Server running...')
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})