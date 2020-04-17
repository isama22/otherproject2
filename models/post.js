const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//same file as post
const commentSchema = new mongoose.Schema({
    text: String,
},
    { timestamps: true }
);
//make this a referenced schema in a different file
const postSchema = new mongoose.Schema({
    text: {
        type: String,

    },
    category: {
        type: String,
        enum: ['mainPage', 'techniques', 'events', 'artists', 'resourceLinks', 'posts']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [commentSchema],
},
    { timestamps: true }
);
module.exports = mongoose.model('Post', postSchema);