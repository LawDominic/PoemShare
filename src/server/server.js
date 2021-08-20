const express = require("express");
const app = express();
app.use(express.json());

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

// @desc default page
// @route GET /
app.get("/", (req, res) => {
  res.send("<h1>PoemShare Server</h1>");
});

// @desc fetch poems data
// @route GET /api/poems
app.get("/api/poems", (req, res) => {
  console.log(poems);
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

// @desc post poem
// @route POST /api/poems
app.post("/api/poems", (req, res) => {
    const id = poems.length;
    var postBody = req.body;
    var poem = {
        id: id,
        title: postBody.title,
        author: postBody.author,
        authorid: postBody.authorid,
        text: postBody.text,
        votes: 0
    }
    poems = poems.concat(poem)
    res.json(poem)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
