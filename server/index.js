const express = require('express');

const user = require('./controllers/user.js');
const posts = require('./controllers/posts.js')
const comments = require('./controllers/comments.js')
const profiles = require('./controllers/profiles.js')

const db = {
  users: {
    id: 0,
    data: [],
  },
  profiles: {
    id: 0,
    data: [],
  },
  posts: {
    id: 0,
    data: [],
  },
  comments: {
    id: 0,
    data: [],
  },
};


const app = express()


app.set('db', db);

app.use(express.json());

// app.get('/db', (req, res) => {
// 	const db = req.app.get('db')
// 	res.status(200).send(db)
// })

//Sign-up
app.post('/sign-up', user.signUp);

//Posts
app.post('/posts', posts.create);
app.get('/user/:userId/posts', posts.getUserPosts);
app.get('/posts/:postId', posts.getPost);

//Comment
app.post('/comments', comments.create)

//Profiles
app.get('/profiles', profiles.fetchProfile)
app.patch('/profiles/:userId', profiles.updateProfile)

app.get('/debug', (req, res) => {
    res.status(200).json(req.app.get('db'))
  })



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

