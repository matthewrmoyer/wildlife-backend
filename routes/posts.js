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
			user_email: req.body.user_email,
			user_name: req.body.user_name,
			latitude: req.body.latitude,
			longitude: req.body.longitude,
			specie: req.body.specie,
			description: req.body.description,
			image_url: req.body.image_url
		})
		.then(data => {
			res.send(req.body)
		})
})

// {
//     "user_email": "casey@gmail.com",
//     "user_name": "Casey",
//     "latitude": "40.56",
//     "longitude": "-105.721",
//     "specie": "Bobcat",
//     "description": "First time ever seeing a bobcat!",
//     "created_at": "2017-05-26T20:18:23.915Z",
//     "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Bobcat2.jpg"
//   },
module.exports = router;
