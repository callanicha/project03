const express = require("express")
const router = express.Router()

const usersArray = [
	{
	"ID": 1,
	"firstName": "John",
	"lastName": "Doe"
	},
	{
	"ID": 2,
	"firstName": "Jane",
	"lastName": "Smith"
	},
	{
	"ID": 3,
	"firstName": "Michael",
	"lastName": "Johnson"
	},
	{
	"ID": 4,
	"firstName": "Emily",
	"lastName": "Davis"
	},
	{
	"ID": 5,
	"firstName": "Chris",
	"lastName": "Brown"
	}
]

//GET METHODS
router.get("/users", (req, res) => {
	res.json(usersArray)
})

//POST METHODS
router.post("/users", (req, res) => {
	const { firstName, lastName } = req.body

	res.json({
		msg: "This the message from PUT ",
		firstName,
		lastName,
	})
})

//PUT METHODS
routerouer.put("/users", (req, res) => {
	const { firstName, lastName } = req.body
  const userId = req.params.id

	res.json({
		msg: "This the message from PUT ",
    userId,
		firstName,
		lastName,
	})
})

//DELETE METHODS
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;

	res.json({
		msg: "This the message from DELETE ",
    id
	})
})

module.exports = router