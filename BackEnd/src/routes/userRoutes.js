import express from "express";
import {getAllUsers, registerUser} from "../controllers/userControllers.js"


const router = express.Router();
router.post("/register", registerUser);
router.get("/", getAllUsers);

export default router;