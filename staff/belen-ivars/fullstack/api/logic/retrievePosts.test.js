const mongoose = require('mongoose')

const retrievePosts = require('./retrievePosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
	.then(() => {
		try {
			retrievePosts('659abc140e890e8a7a2ddaa4', (error, posts) => {
				if (error) {
					console.error(error)

					return
				}
				console.log('posts retrieved', posts)
			})
		} catch (error) {
			console.error(error)
		}
	})
	.catch(error => console.error(error))