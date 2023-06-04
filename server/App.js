const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 0;
const todolist = [
  {
    id: 0,
    text: "ssflkddsd",
    done: false,
  },
];

// app.get("/", function (req, res) {
//   res.send("hello");
// });

app.get("/api/todo", (req, res) => {
  res.json(todolist); // return todolist;
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  todolist.push({
    id: ++id,
    text,
    done,
  });
  return res.send("success");
});
// app.post('/profile', function (req, res, next) {
//   console.log(req.body)
//   res.json(req.body)
// })

app.listen(80, () => {
  console.log("server start!!");
});
