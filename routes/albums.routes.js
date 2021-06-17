const express = require("express")
const router = express.Router()
const albumsController = require("../controllers/albums.controller")
// if you are here.. your request is /api/albums

// Create one
router.post("/", albumsController.create) 

// Read (one) (to access one shoe)
router.get("/:id", albumsController.show)

// Read (list) (to access to a list of shoes)
router.get("/", albumsController.index)

// Update (one)
router.put("/:id", albumsController.update)

// Delete (one)
router.delete("/:id", albumsController.destroy)

module.exports = router;