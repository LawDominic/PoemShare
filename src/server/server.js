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

app.get("/", (req, res) => {
  res.send("<h1>PoemShare Server</h1>");
});

app.get("/api/poems", (req, res) => {
  res.json(poems);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
