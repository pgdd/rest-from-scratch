const { log } = console
const Albums = require("../models/Albums")
const create = (req, res, next) => {
    log("I am in Album controller, at create")
    const { body } = req;

    let album = Albums.save(body)

   // save in db please !
   // and the, res with ok 
    res.json(album)
}

const show = (req, res, next) => {
    log("I am in Album controller, at show One album")
    const { id } = req.params
    console.log(id)
    // ...go get the album with this id

    let album = Albums.findById(id)
    // and then, res with the album
    res.json(album)
}

const index = (req, res, next) => {
    log("I am in Album controller, at list albums")
    // Go get all the albums
    // and res, with a list
    let albums = Albums.findAll()
    res.json(albums)

}

const update = (req, res, next) => {
    log("I am in Album controller, at update one album")
    const { id } = req.params
    const { body } = req
    let album = Albums.updateById(id, body)
    // go to update the album with this id, by changing thoses values..
    // ...and then returns ok, or the newly updated album
    res.json(album)
}

const destroy = (req, res, next) => {
    log("I am in Album controller, at destroy one album")
    const { id } = req.params

    let deleted = Albums.deleteById(id)
    console.log(id)
    // go in to the database, and delete the album with this id, and returns ok...?
    res.json(deleted)
}


module.exports =  {
    create,
    show,
    index,
    update,
    destroy
}