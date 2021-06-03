const Comment = require('../models/Comment')

class commentController {
    async get(req,res) {
        try {
            const comment = await Comment.find({post: req.params.id}).lean()
            res.json(comment)
        } catch (e) {
            res.json(e.message)
        }
    }
    async addComm(req,res) {
        try{
            const {firstName, text, post} = req.body
            const comment = new Comment({
                firstName,
                text,
                post
            })
            await comment.save()
            res.json(comment)
        } catch (e) {
            res.json(e.message)
        }
    }
    async delete(req,res) {
        try {
            const comment = await Comment.findByIdAndDelete({id: req.params.id}).lean()
            res.json(comment)
        } catch (e) {
            res.json(e.message)
        }
    }
    async update(req,res) {
        try {
            const id = req.params.id
            const {firstName, text} = req.body
            const comment = await Comment.findByIdAndUpdate(id, {firstName, text}, {new: true}).lean()
            res.json(comment)
        } catch (e) {
            res.json(e.messgae)
        }
    }
}

module.exports = new commentController()