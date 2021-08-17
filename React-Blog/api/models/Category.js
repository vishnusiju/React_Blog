

const mongoose = require('mongoose');

// nobady can create usename with same name.
const CategorySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        }
        
    },
    { timestamps: true}  //it will create updated time.
);


module.exports = mongoose.model('Category', CategorySchema);