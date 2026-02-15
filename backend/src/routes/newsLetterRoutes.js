

import express from "express"
import {newsLetter, getAllSubscribers, deleteSubscriber} from "../controllers/newsLetter.js"

const route = express.Router();

route.post("/", newsLetter)
route.get("/", getAllSubscribers);        
route.delete("/:id", deleteSubscriber);

export default route;