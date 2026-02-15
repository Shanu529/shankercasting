

import { getDashboardStats } from "../controllers/dashboardController.js";

import express from "express";
import { getRecentActivity } from "../controllers/recentActivity.js";

const routes = express.Router();

routes.get("/", getDashboardStats)
routes.get("/activity", getRecentActivity)

export default routes;