const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    // Thing of what you would want your blog to have 
    subject: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;