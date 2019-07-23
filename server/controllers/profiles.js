module.exports = {

	updateProfile: function(req, res){
		console.log('update')
	   const db = req.app.get('db')

	   const {userId} = req.params
	   const {thumbnail,about} = req.body

	   const index = db.profiles.data.find(data => data.userId === parseInt(userId))

	   if(index){
	       db.profiles.data[userId] = {userId, thumbnail, about}
	       res.status(200).json(db.profiles.data)
	   } 
	   else {
	       res.status(500).send(`no data match ${index}`)
	   }

	},

	fetchProfile: function(req, res) {

	  console.log('test')

	  const db = req.app.get('db')

	  res.status(200).json(db.profiles.data)

	}

}
