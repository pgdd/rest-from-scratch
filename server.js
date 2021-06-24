const { log } = console;
const express = require("express")
const port = 8000;
const routes = require("./routes")

const app = express()
app.use(express.json());

app.use("/api", routes)



app.listen(port, () => {
    log(`I am running on ${port}`)
})

// 
// /api/albums
// /api/tracks
// /api/albums/:id/tracks