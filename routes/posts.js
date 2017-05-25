const express = require('express')
const router = express.Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
	knex('post')
		.then((data) => {
			res.send(data)
		})
})

module.exports = router;
