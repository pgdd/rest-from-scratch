const express = require('express');
const router = express.Router();
// If you are here... your requestes start with /api
const albumsRoutes = require('./albums.routes')
const tracksRoutes = require('./tracks.routes')

router.use("/albums", albumsRoutes)
router.use("/tracks", tracksRoutes)

module.exports = router;
