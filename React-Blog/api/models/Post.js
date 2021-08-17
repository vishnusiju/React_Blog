
const mongoose = require('mongoose');

// nobady can create usename with same name.
const PostSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: true
        },
        categories:{
            type: Array,
            required: false
        }
    },
    { timestamps: true}  //it will create updated time.
);


module.exports = mongoose.model('Post', PostSchema);