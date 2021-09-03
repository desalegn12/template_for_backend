const express = require("express");

const {
	getData,
	getSingleData,
	createData,
	updateData,
	deleteData,
	photoUpload,
} = require("../controller/control");

const advancedResult = require("../middleWire/advancedRouts");
const databaseSchema = require("../model/DatabaseSchema");

/**
 * we can bind the router path under this router.use('rout ', and binding object)
 */

const router = express.Router();
const { protect, authorize } = require("../middleWire/Auth");

router
	.route("/")
	.get(advancedResult(databaseSchema, "courses"), getData)
	.post(protect, authorize("publisher"), createData);

//cause those request methods need the id of the data
router
	.route("/:id")
	.get(getSingleData)
	.put(protect, authorize("publisher"), updateData)
	.delete(protect, authorize("publisher"), deleteData);
router.route("/:id/photo").put(protect, photoUpload);

module.exports = router;
