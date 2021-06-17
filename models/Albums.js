const db = require("../dbConnect")
const save = (data) => {
    console.log('I am in Album models, and I want to save', data)
    let query = "INSERT INTO `albums` (`title`, `artist`, `genre`, `cover`) VALUES ('L'école du micro d'argent', 'IAM', 'rap', 'https://images-na.ssl-images-amazon.com/images/I/51jO-X7LDYL._SX425_.jpg')"
    let results = db.query(query)
    console.log(results)
    return results
}

const findById = (id) => {
    console.log("I want to find the album, with this id", id)
    return "the album data"
}

const findAll = (qs) => {
    console.log("I want the discography")
    return "A discography []"
}

const updateById = (id, data) => {
    console.log("I want to update this", id, "with this", data)
    return 'The updated Album'

}

const deleteById = (id) => {
    console.log(" I want to delete", id)
    return 'It is deleted'
}

module.exports = {
    save,
    findById,
    findAll,
    updateById,
    deleteById
}