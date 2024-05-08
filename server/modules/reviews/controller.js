require('dotenv').config();

const express = require('express');
const ObjectId = require("mongoose").Types.ObjectId;

const Models = require('./models');
const PointModels = require('../points/models');

const pointMiddleware = require('../../middleware/point');
const router = express.Router();


async function approveApi(req) {
	let body = req.body;
	const model = new Models.Review(body);
	const review = await model.save();
	if (review) {
		return review;
	}
}

async function rejectApi(req, res, next) {
	try {
		let body = req.body;
		if (body.codeVerification == 2) {
			let addReview = await approveApi(req);
			let obj = {
				userId: body.apiUserId,
				apiId: body.apiId,
				point: -1,
				category: "review",
			}

			let point = await pointMiddleware.addPoint(obj, res)
			res.json("Reject Point Add")
		} else {
			next()
		}
	} catch (error) {
		res.json(error)
	}
}



// Review 
router.get('/getAllReview/:apiId', (req, res) => {
	const apiId = req.params.apiId;
	Models.Review.aggregate([
		{
			$match: {
				apiId: new ObjectId(apiId)
			}
		}, {
			$lookup: {
				from: "users",
				localField: "reviewerId",
				foreignField: "_id",
				as: "reviewer"
			}
		}, {
			$unwind: "$reviewer"
		}, {
			$unset: ["reviewer._id", "reviewer.empId", "reviewer.password", "reviewer.email", "reviewer.reporty", "reviewer.status"],
		}
	]).then(data => {
		res.json(data);
	}).catch(err => {
		res.json(err);
	});
});

router.post('/addReview', rejectApi, async (req, res) => {
	try {
		let body = req.body;
		let reviewData = await Models.Review.find({ apiId: body.apiId });


		if (reviewData.length == 0) {
			let reviews = await approveApi(req)
			res.json(reviews)
		} else {

			// If One people give approveal the code
			if (reviewData[0].codeVerification == 1) {
				let reviews = await approveApi(req)

				if(reviews){
					let obj = {
						userId: body.apiUserId,
						apiId: body.apiId,
						point: 2,
						category: "review",
					}
					let point = await pointMiddleware.addPoint(obj, res)
					res.json("Point added");
				}
			} else {
				let reviews = await approveApi(req)
				if(reviews){
					res.json("Point added After One Reject");
				}
			}
		}


	} catch (error) {
		res.send(error);
	}
});

router.post('/addReply/:id', async (req, res) => {
	try {
		const reviewId = req.params.id;
		const obj = req.body;
		obj.createdAt = new Date();
		obj.updatedAt = new Date();

		const review = await Models.Review.findOneAndUpdate({ _id: reviewId }, { $push: { reply: obj } }, {
			new: true,
			upsert: true // Make this update into an upsert
		});

		if (review) {
			res.json({
				success: true,
				message: 'User has replied for the review'
			});
		}
	} catch (error) {
		res.send(error);
	}
});


module.exports = router;