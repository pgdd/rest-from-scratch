const db = require("../dbConnect").promise();

const save = async (data) => {
    console.log('I am in Album models, and I want to save', data)
    let query = `INSERT INTO tracks SET ?`

    let [ result ] = await db.query(query, [{ ...data }])
   
    return result.insertId
}

const findById = async (id) => {
    let query = 'SELECT * FROM tracks WHERE ID = ?'
    let [ result ] = await db.query(query, [id])
    return result[0]
}

const findAll = async (qs) => {
    console.log("I want the discography")
    let query = 'SELECT * FROM tracks'
    let [ results ] = await db.query(query)

    return results
}

const findAllTracksByAlbum = async (album_id) => {
    console.log("I am in my custom method")
    console.log(album_id);
    let query = `
        SELECT DISTINCT tr.*, al.title as album
        FROM tracks tr
        LEFT JOIN albums al
            ON tr.album_id = al.id
            WHERE tr.album_id = ?;
    `
    let [ results ] = await db.query(query, [album_id])
    return results
 
}

const updateById = async (id, data) => {
    console.log("I want to update this", id, "with this", data)
    let query = 'UPDATE tracks SET ? WHERE ?'
    let [ result ] = await db.query(query, [{...data},  { id } ] )
    return result

}

const deleteById = async (id) => {
    console.log(" I want to delete", id)
    let query = "DELETE FROM tracks WHERE id = ?"
    let [ result ] = await db.query(query, [ id ])
    return result
}

module.exports = {
    save,
    findById,
    findAll,
    updateById,
    deleteById,
    findAllTracksByAlbum
}