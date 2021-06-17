const express = require('express');
const router = express.Router();
// If you are here... your requestes start with /api
const albumsRoutes = require('./albums.routes')

router.use("/albums", albumsRoutes)

module.exports = router;
