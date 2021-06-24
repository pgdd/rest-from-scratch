const { log } = console
const Tracks = require("../models/Tracks")
const create = async (req, res, next) => {
    log("I am in Tracks controller, at create")
    const { body } = req;
    try {
        let track = await Tracks.save(body)
        res.status(201).json(track)
    }
    catch(error) {
        res.status(400).send({
            message: "Could not create track",
            error
        })
    }
    // console.log(track)
   // save in db please !
   // and the, res with ok 
   
}

const show = async (req, res, next) => {
    log("I am in Tracks controller, at show One track")
    const { id } = req.params
    console.log("Here in Track show")
    console.log(id)
    // ...go get the track with this id
    try {
        let track = await Tracks.findById(id)   
 
        if(!track) throw new Error("Error")

        res.status(206).json(track)
    } catch (error) {
        res.status(404).send({
            message: "Could not find track",
            error
        })
    }

    // and then, res with the track
   
}

const index = async (req, res, next) => {
    log("I am in Tracks controller, at list tracks")
    // Go get all the tracks
    // and res, with a list
    try {
        let tracks = await Tracks.findAll()
        res.status(200).json(tracks)
    
    } catch (error) {
        res.status(404).send({
            message: "Could not get discorgrapy",
            error
        })
    }
  
}

const update = async (req, res, next) => {
    log("I am in Tracks controller, at update one track")
    const { id } = req.params
    const { body } = req
    try {
        let track = await Tracks.updateById(id, body)
        // go to update the track with this id, by changing thoses values..
        // ...and then returns ok, or the newly updated track
        res.status(206).json(track)
    } catch(error) {
        res.status(400).send({
            message: "Could not get discorgrapy",
            error
        })
    }


}

const destroy = async (req, res, next) => {
    log("I am in Tracks controller, at destroy one track")
    const { id } = req.params
    try {
        let deleted = await Tracks.deleteById(id)
        // go to update the track with this id, by changing thoses values..
        // ...and then returns ok, or the newly updated track
        res.status(204).json(deleted)
    } catch(error) {
        res.status(400).send({
            message: "Could not get discorgrapy",
            error
        })
    }

    // go in to the database, and delete the track with this id, and returns ok...?
}


module.exports =  {
    create,
    show,
    index,
    update,
    destroy
}