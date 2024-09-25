import { Router } from "express"
import moviesRouter from "./moviesRouter.js"
import formRouter from "./formRouter.js"

const router = Router()

router.use('/movie', moviesRouter)
router.use('/', formRouter)

export default router;