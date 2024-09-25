import { Router } from "express"
import { searchMovie} from '../controllers/moviesController.js'

const moviesRouter = Router()

moviesRouter.get("/search", searchMovie)

export default moviesRouter;