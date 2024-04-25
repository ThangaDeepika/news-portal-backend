const express = require('express')
const router = express.Router()
const {addNewBook, getAllBooks, updateBook} = require('../controllers/booksController')
const {validateBook} = require('../controllers/validateController')

router.route('/').post(addNewBook).get(getAllBooks).patch(updateBook)
router.route('/validate').post(validateBook)

module.exports = router