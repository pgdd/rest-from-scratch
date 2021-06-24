const { log } = console
const Albums = require("../models/Albums")
const create = async (req, res, next) => {
    log("I am in Album controller, at create")
    const { body } = req;
    try {
        let album = await Albums.save(body)
        res.status(201).json(album)
    }
    catch(error) {
        res.status(400).send({
            message: "Could not create album",
            error
        })
    }
    // console.log(album)
   // save in db please !
   // and the, res with ok 
   
}

const show = async (req, res, next) => {
    log("I am in Album controller, at show One album")
    const { id } = req.params
    console.log("here")
    console.log(id)
    // ...go get the album with this id
    try {
        let album = await Albums.findById(id)
        res.status(206).json(album)
    } catch (error) {
        res.status(404).send({
            message: "Could not create album",
            error
        })
    }

    // and then, res with the album
   
}

const index = async (req, res, next) => {
    log("I am in Album controller, at list albums")
    // Go get all the albums
    // and res, with a list
    try {
        let albums = await Albums.findAll()
        res.status(200).json(albums)
    
    } catch (error) {
        res.status(404).send({
            message: "Could not get discorgrapy",
            error
        })
    }
  
}

const update = async (req, res, next) => {
    log("I am in Album controller, at update one album")
    const { id } = req.params
    const { body } = req
    try {
        let album = await Albums.updateById(id, body)
        // go to update the album with this id, by changing thoses values..
        // ...and then returns ok, or the newly updated album
        res.status(206).json(album)
    } catch(error) {
        res.status(400).send({
            message: "Could not get discorgrapy",
            error
        })
    }
}

const destroy = async (req, res, next) => {
    log("I am in Album controller, at destroy one album")
    const { id } = req.params
    try {
        let deleted = await Albums.deleteById(id)
        // go to update the album with this id, by changing thoses values..
        // ...and then returns ok, or the newly updated album
        res.status(204).json(deleted)
    } catch(error) {
        res.status(400).send({
            message: "Could not get discorgrapy",
            error
        })
    }

    // go in to the database, and delete the album with this id, and returns ok...?
}


module.exports =  {
    create,
    show,
    index,
    update,
    destroy
}