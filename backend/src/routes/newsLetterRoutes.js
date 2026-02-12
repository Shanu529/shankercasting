

import express from "express"
import {newsLetter} from "../controllers/newsLetter.js"

const route = express.Router();

route.post("/", newsLetter)

export default route;