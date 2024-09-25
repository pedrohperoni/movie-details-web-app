import { Router } from "express"
import {renderForm} from "../controllers/formController.js"
const formRouter = Router()

formRouter.get("/", renderForm)

export default formRouter