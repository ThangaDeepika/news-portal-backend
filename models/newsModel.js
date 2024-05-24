const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
    {
        Id: {
            type : Number,
            required : true
        },
        authorName : {
            type : String,
            required : true
        },
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        publishedAt : {
            type : String,
            required : true
        },
    },
    {
        collection : 'news'
    }
)
module.exports = mongoose.model('news', newsSchema)