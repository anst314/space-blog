const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // Thing of what you would want your blog to have 
    img: {
        type: String,
        required: true
    }
})

const Blogs = mongoose.model('Blogs', blogSchema);
module.exports = Blogs;