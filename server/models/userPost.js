const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    //   },
    text: { type: String, required: true},
    // body: { type: String, required: true},
    // username: { type: String, required: true},
    // userId: { type: String, required: true},
    // parentId: { type: String, required: false},
    // comments: { type: [String], default: [] },
    },
    {
        timestamps: {required: true}
    })

module.exports = mongoose.model("UserPost", postSchema);
// module.exports.postSchema = postSchema;
