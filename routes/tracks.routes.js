const express = require("express")
const router = express.Router({ mergeParams: true })
const tracksController = require("../controllers/tracks.controller")
// if you are here.. your request is /api/tracks

// Create one
router.post("/", tracksController.create) 

// Read (one) (to access one shoe)
router.get("/:id", tracksController.show)

// Read (list) (to access to a list of shoes)
router.get("/", tracksController.index, tracksController.indexByAlbum)

// Update (one)
router.put("/:id", tracksController.update)

// Delete (one)
router.delete("/:id", tracksController.destroy)

module.exports = router;