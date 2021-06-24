const db = require("../dbConnect").promise();

const save = async (data) => {
    console.log('I am in Album models, and I want to save', data)
    let query = `INSERT INTO albums SET ?`

    let [ result ] = await db.query(query, [{ ...data }])
   
    return result.insertId
}

const findById = async (id) => {
    let query = 'SELECT * FROM albums WHERE ID = ?'
    let [ result ] = await db.query(query, [id])
    return result[0]
}

const findAll = async (qs) => {
    console.log("I want the discography")
    let query = 'SELECT * FROM albums'
    let [ results ] = await db.query(query)

    return results
}



const updateById = async (id, data) => {
    console.log("I want to update this", id, "with this", data)
    let query = 'UPDATE albums SET ? WHERE ?'
    let [ result ] = await db.query(query, [{...data},  { id } ] )
    return result

}

const deleteById = async (id) => {
    console.log(" I want to delete", id)
    let query = "DELETE FROM albums WHERE id = ?"
    let [ result ] = await db.query(query, [ id ])
    return result
}

module.exports = {
    save,
    findById,
    findAll,
    updateById,
    deleteById
}