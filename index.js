const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")
const db = require("./database")

app.use("/api/", usersRouter)

app.use(express.json());

//GET METHODS
app.get("/", (req, res) => {
    res.json({
        msg: "This the message"
    })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


//Open your browser and go to http://localhost:3000. 
// You should see the message "Welcome to our simple REST API!"

