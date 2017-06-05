const express = require('express')
const router = express.Router()
const knex = require('../db/knex.js')

const upload = require('multer')();
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

AWS.config.update({
	accessKeyId: process.env.S3_KEY,
	secretAccessKey: process.env.S3_SECRET
});

const s3 = new AWS.S3();



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


router.get('/image', (req, res, next) => {
	s3.listObjects({
		Bucket: process.env.S3_BUCKET
	}, (err, resp) => {
		if (err) {
			next(err)
		} else {
			res.json({
				resp
			})
		}
	})
})

router.post('/image', upload.single('image'), (req, res) => {
	let id = uuid();
	s3.putObject({
		Bucket: process.env.S3_BUCKET,
		Key: id,
		Body: new Buffer(req.file.buffer)
	}, err => {
		if (err) {
			console.log(err)
		} else {
			res.json(`{"success": true}`)
		}
	}).then(function(data) {
			res.send(data)
		});
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