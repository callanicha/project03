require("dotenv").config()

exports.checkApiKey = (req, res, next) => {
	const apiKey = req.header("x-api-key")

	if (apiKey && apiKey === "this_is_my_test") {
		next() // API key is valid, proceed to the route
	} else {
		res.status(403).json({ error: "Forbidden: Invalid API Key" })
	}
}