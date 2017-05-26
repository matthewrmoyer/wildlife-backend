const express = require('express')
const router = express.Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
	knex('post')
		.then((data) => {
			res.send(data)
		})
})

router.post('/', (req, res) => {
	knex('post')
		.insert({
			user_email: req.body.email,
			user_name: req.body.name,
			latitude: req.body.latitude,
			longitude: req.body.longitude,
			specie: req.body.specie,
			description: req.body.description,
			image_url: req.body.image_url
		})
})

module.exports = router;
