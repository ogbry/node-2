module.exports = {

	create: function(req, res) {

		const db = req.app.get('db');

	    const { userId, postID, comment } = req.body;

	    const newComment = { id: db.comments.id, userId, comment };

	    db.comments.data.push(newComment);
	    db.comments.id++;

	    res.status(201).json(newComment);

	}
}