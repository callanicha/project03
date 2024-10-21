const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")
// const db = require("./database")

app.use(express.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, x-api-key"
	)
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	next()
})
app.use("/api/", usersRouter);

//GET METHODS
app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to my API !"
    })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


//Open your browser and go to http://localhost:3000. 
// You should see the message "Welcome to our simple REST API!"

