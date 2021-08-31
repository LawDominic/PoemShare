const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors')
cors({credentials: true, origin: true})
app.use(cors())
app.use(express.static("build"))
let poems = [
  {
    id: 0,
    title: "Campervan",
    author: "Bob Bobalooba",
    authorid: 0,
    text: `__Lorem__ ipsum dolor sit amet,  
  consectetur adipiscing elit,  
  sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua.  `,
    votes: 3,
  }
];

app.use(function(req, res, next) {
  console.log(req)
  if (!req.headers.bob) {
    console.log(req)
    return res.status(401).json({ error: 'Unauthorised response' });
  }
  next();
});

// @desc default page
// @route GET /
app.get("/", (req, res) => {
  res.send("<h1>PoemShare Server</h1>");
});

// @desc fetch poems data
// @route GET /api/poems
app.get("/api/poems", (req, res) => {
  res.json(poems);
});

// @desc fetch specific poem
// @route GET /api/poems:id
app.get("/api/poems/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const poem = poems.find(poem => poem.id == id);
    if (poem) {
        res.json(poem);
    } else {
        res.status(404).end();
    }
});

const generateId = () => {
  const maxId = poems.length > 0 
  ? Math.max(...poems.map(poem => poem.id))
  : 0
  return maxId + 1
}

// @desc post poem
// @route POST /api/poems
app.post("/api/poems", (req, res) => {
    const id = generateId()
    var postBody = req.body;
    if (!(postBody.title || postBody.author || postBody.text)) {
      return res.status(400).json({ error: "parameter(s) missing"})
    }
    var poem = {
        id: id,
        title: postBody.title,
        author: postBody.author,
        text: postBody.text,
        votes: 0
    }
    poems = poems.concat(poem)
    res.json(poem)
})

// @desc upvote for poem given id
// @route POST /api/poems/:id
app.post('/api/poems/:id', (req, res) => {
    console.log(req);
    const id = parseInt(req.params.id);
    const poem = poems.find(poem => poem.id == id);
    if (!poem) {
      return res.status(400).json({ error: "id doesn't exist"})
    }
    poem.votes = poem.votes + 1;
    res.json(poem);
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
