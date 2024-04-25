import { ContentError, NotFoundError } from 'com/errors.js'
import logic from '../logic/index.js'
import { validate } from "com"
import jwt from 'jsonwebtoken'


export default async function retrieveCompleteRecipeHandler(req, res) {
	const token = req.headers.authorization.substring(7)

	const payload = jwt.verify(token, process.env.JWT_SECRET)
	const { sub: userId } = payload

	const { recipeId } = req.params

	try {
		validate.id(userId, 'user id')
		validate.id(recipeId, 'recipe id')

	} catch (error) {

		return res.status(400).send()
	}

	try {
		const recipes = await logic.retrieveCompleteRecipe(userId, recipeId)
		res.status(200).send(recipes)
	} catch (error) {
		if (error instanceof NotFoundError) {
			res.status(404).send(error)
		}
		else if (error instanceof ContentError) {
			res.status(400).send(error)
		} else {
			res.status(500).send(error)
		}
	}
}

